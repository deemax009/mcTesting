# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.TransactionConfirmationApi

All URIs are relative to *https://sandbox.api.mastercard.com/srci/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postConfirmation**](TransactionConfirmationApi.md#postConfirmation) | **POST** /checkout/confirmations | Send results of payment authorization to Unified Checkout Solutions.



## postConfirmation

> postConfirmation(xOpenapiClientid, postbackConfirmationRequest, opts)

Send results of payment authorization to Unified Checkout Solutions.

Use the confirmations endpoint to notify the SRCI the outcome of a checkout or payment.  The confirmation data is sent in the request body and normally the response will be 204 (No Content) .  If an error response is returned, the response body will include further information about the reason for the error. 

### Example

```javascript
import CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi from 'checkout_save_card_on_file_delete_saved_card_on_file_and_confirmations_api';

let apiInstance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.TransactionConfirmationApi();
let xOpenapiClientid = "3f34bev5-55dc-4c2d-a971-3ec37175364k"; // String | Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the SRC Client ID present in the request body.
let postbackConfirmationRequest = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.PostbackConfirmationRequest(); // PostbackConfirmationRequest | 
let opts = {
  'merchantTransactionId': "0a4e0d3.34f4a04b.390515165b8f87a5a0694cd752752ff6717fce21", // String | Merchant Checkout Transaction Identifier which is returned in the checkoutResponse to either checkoutWithCard or checkoutWithNewCard JavaScript methods and links the client-side JavaScript calls and server-side API calls for a specific transaction. Optional for Subsequent Payment or Subsequent Split Shipment.
  'xSrcCxFlowId': "34F4A04B.B9EF8486-E8C1-44F3-88DC-D4F516A354DC.1587777300" // String | The X-Src-Cx-Flow-Id helps in routing and session affinity. Usage of X-Src-Cx-Flow-Id in requests ensures requests by the same client are directed to the same server. When you make your initial API call, use the X-Src-Cx-Flow-Id, returned in one of the client-side calls checkoutWithNewCard() or checkoutWitCard(). If you do not send X-Src-Cx-Flow-Id in your request or if the field is empty, the Click to Pay system generates one and responds with the X-Src-Cx-Flow-Id in the header. The X-Src-Cx-Flow-Id returned in the response must be used in subsequent calls to ensure that these calls are directed to the same server that returned the initial response. Failure to do so will result in call failures.
};
apiInstance.postConfirmation(xOpenapiClientid, postbackConfirmationRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOpenapiClientid** | **String**| Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the SRC Client ID present in the request body. | 
 **postbackConfirmationRequest** | [**PostbackConfirmationRequest**](PostbackConfirmationRequest.md)|  | 
 **merchantTransactionId** | **String**| Merchant Checkout Transaction Identifier which is returned in the checkoutResponse to either checkoutWithCard or checkoutWithNewCard JavaScript methods and links the client-side JavaScript calls and server-side API calls for a specific transaction. Optional for Subsequent Payment or Subsequent Split Shipment. | [optional] 
 **xSrcCxFlowId** | **String**| The X-Src-Cx-Flow-Id helps in routing and session affinity. Usage of X-Src-Cx-Flow-Id in requests ensures requests by the same client are directed to the same server. When you make your initial API call, use the X-Src-Cx-Flow-Id, returned in one of the client-side calls checkoutWithNewCard() or checkoutWitCard(). If you do not send X-Src-Cx-Flow-Id in your request or if the field is empty, the Click to Pay system generates one and responds with the X-Src-Cx-Flow-Id in the header. The X-Src-Cx-Flow-Id returned in the response must be used in subsequent calls to ensure that these calls are directed to the same server that returned the initial response. Failure to do so will result in call failures. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

