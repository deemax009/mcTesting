# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutApi

All URIs are relative to *https://sandbox.api.mastercard.com/srci/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkout**](CheckoutApi.md#checkout) | **POST** /checkout | Used either for Server to Server Checkout (allow the SRCI server to perform a checkout), or to obtain the encrypted transaction payload via the response.



## checkout

> CheckoutResponse checkout(xOpenapiClientid, checkoutTransactionRequest, opts)

Used either for Server to Server Checkout (allow the SRCI server to perform a checkout), or to obtain the encrypted transaction payload via the response.

This operation provides for two situations:  1. Server to Server checkout, where the SRCI server initiates a checkout directly. This is not currently supported. 2. Allows SRCI server to fetch the transaction credentials of a checkout transaction initiated via DCF. This is the typical use case. 

### Example

```javascript
import CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi from 'checkout_save_card_on_file_delete_saved_card_on_file_and_confirmations_api';

let apiInstance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutApi();
let xOpenapiClientid = "3f34bev5-55dc-4c2d-a971-3ec37175364k"; // String | Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the SRC Client ID present in the request body.
let checkoutTransactionRequest = {"dpaTransactionOptions":{"transactionAmount":{"transactionAmount":100.0,"transactionCurrencyCode":"USD"},"paymentOptions":[{"dynamicDataType":"CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM"}]},"srcDpaId":"6a41eb84-6286-4e3e-81ea-03ea07077f4f","checkoutType":"GUEST_CHECKOUT_TOKENIZATION","checkoutReference":{"type":"ENCRYPTED_CARD","data":{"encryptedCard":"eyJraWQiOiIyMDIyMTIxNDIyNDUxMC1tdGYtbWMtc3JjaS1jYXJkLWVuY3J5cHRpb24tbXRmLXNyY2ktbWFzdGVyY2FyZC1pbnQiLCJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMTI4R0NNIn0.QxkkWyWnT3ItXYQQTY2qBPAr56RwgmNs6O43PccfVzL_I-6xh000Lba_UFtf8MwDtaig9iMgLb3I2lzP5NyH3Tnz8OXWf9VCUr-IECsa64Tb3aGOyGfW0LDtmmn6-l4Qh5RR7NGAU-39Led4JVStIOChyv1R25tMTeYRF05-qHxczUdX-655SklvREnjtMMDZGOZvWq5X4cdOhYSqoVptxR70Co8sdCXhzXy8K2b0OkGSVfD0yNih35pYgKWfyqZJSLPn8bpcPH_HikEMyWpkNS2WMyH32HaSrGyLvwmlrGmgMbSa-_59s_9a2VF-QfTFEO31WEkPzErH6fvuO-glg.bmmNPxThFaIE-w1x.-QxL2a0K-QlmyN2uRcWPTe54OMWFDFB2xWK3aT66EDysjDVVAkx2P4oLRqtuxfuIunFkjNw09-P5vc-KGzhu-XsrcShZBN6f3G7IkriKdLRM6VUhepbRqSBmFxHToqngKUtrQ89JXYB3MugaO8mOej9FDLB9gp_K7t083h1copw.oUJeSNTJ721BnTafpPGb6w"}}}; // CheckoutRequest | 
let opts = {
  'xSrcCxFlowId': "34F4A04B.B9EF8486-E8C1-44F3-88DC-D4F516A354DC.1587777300" // String | The X-Src-Cx-Flow-Id helps in routing and session affinity. Usage of X-Src-Cx-Flow-Id in requests ensures requests by the same client are directed to the same server. When you make your initial API call, use the X-Src-Cx-Flow-Id, returned in one of the client-side calls checkoutWithNewCard() or checkoutWitCard(). If you do not send X-Src-Cx-Flow-Id in your request or if the field is empty, the Click to Pay system generates one and responds with the X-Src-Cx-Flow-Id in the header. The X-Src-Cx-Flow-Id returned in the response must be used in subsequent calls to ensure that these calls are directed to the same server that returned the initial response. Failure to do so will result in call failures.
};
apiInstance.checkout(xOpenapiClientid, checkoutTransactionRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOpenapiClientid** | **String**| Open API key to make the server to server call to Mastercard SRCI. This ID is provided to the client during the onboarding process to make OAuth1.0 based signed requests. The value MUST match the SRC Client ID present in the request body. | 
 **checkoutTransactionRequest** | [**CheckoutRequest**](CheckoutRequest.md)|  | 
 **xSrcCxFlowId** | **String**| The X-Src-Cx-Flow-Id helps in routing and session affinity. Usage of X-Src-Cx-Flow-Id in requests ensures requests by the same client are directed to the same server. When you make your initial API call, use the X-Src-Cx-Flow-Id, returned in one of the client-side calls checkoutWithNewCard() or checkoutWitCard(). If you do not send X-Src-Cx-Flow-Id in your request or if the field is empty, the Click to Pay system generates one and responds with the X-Src-Cx-Flow-Id in the header. The X-Src-Cx-Flow-Id returned in the response must be used in subsequent calls to ensure that these calls are directed to the same server that returned the initial response. Failure to do so will result in call failures. | [optional] 

### Return type

[**CheckoutResponse**](CheckoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

