import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; // Import your CSS for styling
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
    // For simplicity, we're not implementing quantity changes in this dummy example
    // In a real app, you would update the quantity of the item in the cart
    console.log(`Update quantity of item ${itemId} to ${newQuantity}`);
  };

  const [isMastercardLoaded, setIsMastercardLoaded] = useState(false);
  const [mcCheckoutServices, setmcCheckoutServices] = useState();

  useEffect(() => {
    const initializeMastercard = async () => {
      try {
        // Wait for MastercardCheckoutServices to become available
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
            transactionAmount: {
              transactionAmount: calculateTotal(),
              transactionCurrencyCode: "USD",
            },
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

    // Load the Mastercard library asynchronously
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
            const cards = await window.mcCheckoutServices;
            console.log('Available Mastercard cards:', cards);
            // Create Payment Session with Authentication and Passkeys Parameters (Required fields only)
            const sessionRequest = {
              dpaTransactionOptions: {
                authenticationPreferences: {
                  payloadRequested: 'AUTHENTICATED' 
                },
                paymentOptions: {
                  dynamicDataType: 'CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM' 
                },
                transactionAmount: { 
                  transactionAmount: calculateTotal(), 
                  transactionCurrencyCode: 'USD' 
                },
                // Passkeys parameters:
                verificationMethod: '07' // Passkeys (FIDO2) verification method
              },
            };
            const checkout = mcCheckoutServices.checkout(sessionRequest);
            console.log(checkout);
            const sessionResponse = await window.mcCheckoutServices.createSession(sessionRequest);
            console.log('Mastercard session created:', sessionResponse);

            //initiate checkout 
            let checkoutResponse;
              if (sessionResponse.authenticationRequired) {
                console.log('needed auth');
              } else {
                checkoutResponse = await window.mcCheckoutServices.checkoutWithNewCard();
              }

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
        {/* You can add more summary lines for discounts, taxes, etc. */}
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