import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; 
import { ApiClient, CheckoutApi, CheckoutRequest } from '../master-card-client/src/index';

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

  const [isMastercardLoaded, setIsMastercardLoaded] = useState(false);
  const [mcCheckoutServices, setmcCheckoutServices] = useState();

  useEffect(() => {
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
          cardBrands: ["mastercard"],
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
            const cards = await mcCheckoutServices.getCards();
            console.log('Available Mastercard cards:', cards);
            const cardData = {
              primaryAccountNumber: "5186001700008785", // Example Mastercard number
              panExpirationMonth: "12",
              panExpirationYear: "28",
              cardSecurityCode: "123", 
              billingAddress: {
                line1: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
                countryCode: "US"
              },
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
            
            const { encryptedCard, cardBrand } = await mcCheckoutServices.encryptCard(cardData);
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
            const checkoutresponse = mcCheckoutServices.checkoutWithNewCard(sessionRequest);
            console.log(checkoutresponse);



          }
          catch(error) {
            // Handle errors
            console.error(error);
          }}
          else{
            console.warn("master card library ain't loaded yet");
          }
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
        <src-button onClick={handleMastercardPayment}></src-button>
      </div> 

    </div>
  );
}

export default CheckoutPage;