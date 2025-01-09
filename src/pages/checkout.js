import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; 
import { ApiClient, CheckoutApi, CheckoutRequest } from '../master-card-client/src/index';
import axios from 'axios';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'T-Shirt A', price: 10.00 },
    { id: 2, name: 'T-Shirt B', price: 12.50 },
  ]);

  const [shippingCost, setShippingCost] = useState(5.00); 
  const [discount, setDiscount] = useState(0); 

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + shippingCost - discount;
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    console.log(`Update quantity of item ${itemId} to ${newQuantity}`);
  };

    const [cardDetails, setCardDetails] = useState({
      primaryAccountNumber: "", // Example Mastercard number
      panExpirationYear: "",
      panExpirationMonth: "",
      cardSecurityCode: "", 
      cardholderFirstName: "",
      cardholderLastName: "",
    });

  const [isMastercardLoaded, setIsMastercardLoaded] = useState(false);
  const [mcCheckoutServices, setmcCheckoutServices] = useState();

  useEffect(() => {
    const dpaRegistrationData = {
      "dpas": [
        {
          "supportedCardBrands": ["MASTERCARD"],
          "dpaData": {
            "dpaName": "myShop",
            "dpaPresentationName": "myShop",
            "dpaUri": "https://mctesting--mastercard-7b751.asia-east1.hosted.app/" // Replace with your actual DPA URI
          },
          "debitTokenRequested": true,
          "merchantCountryCode": "US",
          "supportedCheckoutTypes": ["CLICK_TO_PAY"]
        }
      ]
    };
    
    const organizationId = 'b189a4d5-2fb9-416f-ab84-2f682571afc1'; // Replace with your actual organization ID
    const apiUrl = `https://sandbox.api.mastercard.com/srci/onboarding/org/${organizationId}/dpas/batch`;
    const registerDPA = async () => {
      try {
        const response = await axios.post(apiUrl, dpaRegistrationData, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
      
        console.log('DPA registration successful:', response.data);
      } catch (error) {
        console.error('Error registering DPA:', error);
      }
    };
    
    const initializeMastercard = async () => {
      try {
        while (!window.MastercardCheckoutServices) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        const mcCheckoutService = new window.MastercardCheckoutServices();

        const params = {
          srcDpaId: "b189a4d5-2fb9-416f-ab84-2f682571afc1_dpa0",
          dpaData: {
            dpaName: "Testdpa0",
          },
          dpaTransactionOptions: {
            dpaLocale: "en_US",
          },
          cardBrands: ["mastercard","visa"],
        };

        const result = await mcCheckoutService.init(params);
        console.log("Mastercard checkout service initialized:", result);
        setIsMastercardLoaded(true);
        setmcCheckoutServices(mcCheckoutService);
      } catch (error) {
        console.error("Error initializing Mastercard checkout service:", error);
      }
    };

    // Load the Mastercard library 
    const script = document.createElement("script");
    script.src =
      "https://sandbox.src.mastercard.com/srci/integration/2/lib.js?srcDpaId=b189a4d5-2fb9-416f-ab84-2f682571afc1_dpa0&locale=en_US";
    script.async = true;
    script.onload = initializeMastercard;
    document.head.appendChild(script);
  }, []);

      const handleMastercardPayment = async () => {
        const apiClient = new ApiClient(); // Initialize ApiClient
        apiClient.basePath = 'https://sandbox.api.mastercard.com/srci/api'; 
        console.log(apiClient);
        if (isMastercardLoaded) { 
          try {
            const cardData = {
              primaryAccountNumber: "5186001700008785", // Example Mastercard number
              panExpirationMonth: "12",
              panExpirationYear: "28",
              cardSecurityCode: "123", 
              cardholderFirstName: "John",
              cardholderLastName: "Doe"
            };

            

            function openMastercardWindow() {
              // Calculate the position to center the window
              const width = 480; // You can adjust the width if needed
              const height = 700; // You can adjust the height if needed
              const left = (window.innerWidth - width) / 2;
              const top = (window.innerHeight - height) / 2;
            
              // Open the pop-up window with the specified URL
              return window.open(
                "https://sandbox.src.mastercard.com/sdk/communicator-frame.1.0.0.html", // The Mastercard URL
                "MastercardWindow", 
                `width=${width},height=${height},top=${top},left=${left}` 
              );
            }
            
            const { encryptedCard, cardBrand } = await mcCheckoutServices.encryptCard(cardDetails);
            console.log(cardDetails);
            console.log(cardBrand + '' + encryptedCard);
            // Create Payment Session with Authentication and Passkeys Parameters (Required fields only)
            const sessionRequest = {
              windowRef: openMastercardWindow(),
              encryptedCard: encryptedCard,
              cardBrand: "mastercard",
              dpaTransactionOptions: {
                dpaLocale: "en_US",
                authenticationPreferences: {
                  payloadRequested: 'AUTHENTICATED' 
                },
                paymentOptions: [
                  {
                    dynamicDataType: 'CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM' 
                  }
                ],
                transactionAmount: { 
                  transactionAmount: 100, 
                  transactionCurrencyCode: 'USD' 
                },
              },
              
            };
            const checkoutresponsePromise = mcCheckoutServices.checkoutWithNewCard(sessionRequest);
            checkoutresponsePromise.then(function (checkoutResponse) {
              console.log('Checkout successful:', checkoutResponse);
              console.log('Checkout Action Code:', checkoutResponse.checkoutActionCode); 
            })
            .catch(function (error) {
              console.error('Checkout failed:', error);
            });

            

          }
          catch(error) {
            // Handle errors
            console.error(error);
          }}
          else{
            console.warn("master card library ain't loaded yet");
          }
          };
          const handleCardInputChange = (event) => {
            const { name, value } = event.target;
            setCardDetails({ ...cardDetails, [name]: value });
          };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price.toFixed(2)} BHD</span>
            </div>
            <div className="item-actions">

              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        <div className="summary-line">
          <span>Subtotal:</span>
          <span>{calculateSubtotal().toFixed(2)} BHD</span>
        </div>
        <div className="summary-line">
          <span>Shipping:</span>
          <span>{shippingCost.toFixed(2)} BHD</span>
        </div>
        <div className="summary-line">
          <span>Discount:</span>
          <span>{discount.toFixed(2)} BHD</span>
        </div>
        <hr />
        <div className="summary-line total">
          <span>Total:</span>
          <span>{calculateTotal().toFixed(2)} USD</span>
        </div>
      </div>

      <div id="mastercard-payment-form"> 
      <form id="card-input-form">
          <div>
            <label htmlFor="primaryAccountNumber">Card Number:</label>
            <input
              type="text"
              id="primaryAccountNumber"
              name="primaryAccountNumber"
              value={cardDetails.primaryAccountNumber}
              onChange={handleCardInputChange}
              maxLength="16"
              pattern="[0-9]*"
              required
              placeholder="Enter 16-digit card number"
            />
          </div>
          <div>
            <label htmlFor="panExpirationMonth">Expiry Month:</label>
            <input
              type="text" 
              id="panExpirationMonth"
              name="panExpirationMonth"
              value={cardDetails.panExpirationMonth}
              onChange={handleCardInputChange}
              maxLength="2"
              pattern="(0[1-9]|1[0-2])"
              required
              placeholder="MM"
            />
          </div>
          <div>
            <label htmlFor="panExpirationYear">Expiry Year:</label>
            <input
              type="text"
              id="panExpirationYear" 
              name="panExpirationYear"
              value={cardDetails.panExpirationYear}
              onChange={handleCardInputChange}
              maxLength="2"
              pattern="[0-9]*"
              required
              placeholder="YY"
            />
          </div>
          <div>
            <label htmlFor="cardSecurityCode">CVV:</label>
            <input
              type="text"
              id="cardSecurityCode"
              name="cardSecurityCode" 
              value={cardDetails.cardSecurityCode}
              onChange={handleCardInputChange}
              maxLength="3"
              pattern="[0-9]*"
              required
              placeholder="Enter 3-digit CVV"
            />
          </div>
          <div>
            <label htmlFor="cardholderFirstName">First Name:</label>
            <input
              type="text"
              id="cardholderFirstName"
              name="cardholderFirstName"
              value={cardDetails.cardholderFirstName}
              onChange={handleCardInputChange}
              pattern="[A-Za-z\s]+"
              required
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label htmlFor="cardholderLastName">Last Name:</label>
            <input
              type="text"
              id="cardholderLastName"
              name="cardholderLastName"
              value={cardDetails.cardholderLastName}
              onChange={handleCardInputChange}
              pattern="[A-Za-z\s]+"
              required
              placeholder="Enter last name"
            />
          </div>
        </form>
        <src-button onClick={handleMastercardPayment}></src-button>
      </div> 

    </div>
  );
}

export default CheckoutPage;