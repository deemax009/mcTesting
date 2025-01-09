# MastercardCheckoutSolutionsMerchantRegistrationApi.MerchantRegistrationApi

All URIs are relative to *https://sandbox.api.mastercard.com/src/onboarding*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkAddUpdateDpa**](MerchantRegistrationApi.md#bulkAddUpdateDpa) | **POST** /srci/{src-client-id}/dpas/batch | Asynchronous - DPA bulk Add/Update/Delete
[**getDpaBatchStatus**](MerchantRegistrationApi.md#getDpaBatchStatus) | **GET** /srci/{src-client-id}/dpas/batch/status/{batch-id} | Get status of the DPA Add/Update async (batch) job by Batch ID.



## bulkAddUpdateDpa

> DpaAddUpdateResponse bulkAddUpdateDpa(correlationId, srcClientId, dpaAddUpdateRequest)

Asynchronous - DPA bulk Add/Update/Delete

This is a composite API and performs the following functions in a single call.   * ADD -- Add the DPA record.  * UPDATE -- Update the DPA record.  * DELETE --Delete the DPA record   Additionally, this request can be used to generate serviceIds in Commerce Platform use cases.   A Digital Payment Application (DPA) is a website, web or mobile application operated by a Merchant, marketplace, or other service provider where a consumer can purchase goods or services.   A ServiceId is a unique identifier assigned by Mastercard for which tokens are created uniquely for the entity onboarded. A serviceId can have multiple associated DPAs.  This request must contain the following values, for detail please refer to the Body Model description::     * items    * action    * programType   The contents of the DPA items will vary based on the operation requested.  Notes:  * For UPDATE operations, only DPA data are updated. Once registered, a DPA cannot be associated with a new serviceId or programType. A new DPA will need to be ADDed for each programType/serviceId. * It is recommended to provide **either** ADD **or** UPDATE across different items within the same batch of DPA Registration API. 

### Example

```javascript
import MastercardCheckoutSolutionsMerchantRegistrationApi from 'mastercard_checkout_solutions_merchant_registration_api';

let apiInstance = new MastercardCheckoutSolutionsMerchantRegistrationApi.MerchantRegistrationApi();
let correlationId = "0000016e0364631b-e4cefc"; // String | A unique identifier that correlates a series of two or more requests to a single session of activity. Mastercard Checkout Solutions (MCS) will return a new srcCorrelationId in each response by default, but Integrators may choose to populate previously used srcCorrelationIds in subsequent requests to correlate their activity under a single ID. This can be done by providing a Mastercard generated srcCorrelationId in the request, or by generating your own ID in the same format. SrcCorrelationId is used for tracking and troubleshooting purposes within Mastercard's ecosystem.
let srcClientId = "5e0d4b84-189d-4c86-822d-590602f62062"; // String | A unique identifier assigned by Mastercard during onboarding which signifies the responsible party Integrating to Mastercard Checkout Solutions (MCS).
let dpaAddUpdateRequest = {"items":[{"action":"ADD","programType":"SRC","programName":"myShop*pay","dpas":[{"srcDpaId":"src_dpa_56068","dpaData":{"dpaAddress":{"name":"Ecom Online Store","line1":"100 Avenue Lane Street","line2":"Address line 2","line3":"Address line 3","city":"Metropolis","state":"MH","countryCode":"US","zip":"41321"},"dpaName":"Ecom Holdings Online Inc","dpaLogoUri":"https://example.com/ecom-online-ltd/images/ecom-logo.png","dpaUri":"https://example.com/ecom-online-ltd/basket.html","dpaPresentationName":"FieldTestDpa01_update12"},"debitTokenRequested":false,"merchantCategoryCodes":["0020"],"threeDSDefaultdata":{"defaultAcquirerBin":"A123456","defaultAcquirerMerchantId":"M123456","defaultMerchantCountryCode":"US"},"acquirerData":[{"acquirerIca":"12345","acquirerBin":"112233","acquirerMerchantId":"MC1234567891234"},{"acquirerIca":"23432","acquirerBin":"876543","acquirerMerchantId":"X32123564A4"}]}]}]}; // DpaAddUpdateRequest | DPA asynchronous/bulk Registration Request
apiInstance.bulkAddUpdateDpa(correlationId, srcClientId, dpaAddUpdateRequest, (error, data, response) => {
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
 **correlationId** | **String**| A unique identifier that correlates a series of two or more requests to a single session of activity. Mastercard Checkout Solutions (MCS) will return a new srcCorrelationId in each response by default, but Integrators may choose to populate previously used srcCorrelationIds in subsequent requests to correlate their activity under a single ID. This can be done by providing a Mastercard generated srcCorrelationId in the request, or by generating your own ID in the same format. SrcCorrelationId is used for tracking and troubleshooting purposes within Mastercard&#39;s ecosystem. | 
 **srcClientId** | **String**| A unique identifier assigned by Mastercard during onboarding which signifies the responsible party Integrating to Mastercard Checkout Solutions (MCS). | 
 **dpaAddUpdateRequest** | [**DpaAddUpdateRequest**](DpaAddUpdateRequest.md)| DPA asynchronous/bulk Registration Request | 

### Return type

[**DpaAddUpdateResponse**](DpaAddUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDpaBatchStatus

> DpaBatchStatus getDpaBatchStatus(correlationId, srcClientId, batchId)

Get status of the DPA Add/Update async (batch) job by Batch ID.

The GET Status API allows the SRC Initiator to retrieve the status of a DPA Registration request submitted earlier.

### Example

```javascript
import MastercardCheckoutSolutionsMerchantRegistrationApi from 'mastercard_checkout_solutions_merchant_registration_api';

let apiInstance = new MastercardCheckoutSolutionsMerchantRegistrationApi.MerchantRegistrationApi();
let correlationId = "0000016e0364631b-e4cefc"; // String | A unique identifier that correlates a series of two or more requests to a single session of activity. Mastercard Checkout Solutions (MCS) will return a new srcCorrelationId in each response by default, but Integrators may choose to populate previously used srcCorrelationIds in subsequent requests to correlate their activity under a single ID. This can be done by providing a Mastercard generated srcCorrelationId in the request, or by generating your own ID in the same format. SrcCorrelationId is used for tracking and troubleshooting purposes within Mastercard's ecosystem.
let srcClientId = "5e0d4b84-189d-4c86-822d-590602f62062"; // String | A unique identifier assigned by Mastercard during onboarding which signifies the responsible party Integrating to Mastercard Checkout Solutions (MCS).
let batchId = "1c9d3e43-f232-44a1-9552-7da22aaf5590"; // String | A unique identifier associated with the submitted Digital Payment Application (DPA) batch. The Batch ID can be used to retrieve the status of the batch by calling GET DPA status endpoint.
apiInstance.getDpaBatchStatus(correlationId, srcClientId, batchId, (error, data, response) => {
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
 **correlationId** | **String**| A unique identifier that correlates a series of two or more requests to a single session of activity. Mastercard Checkout Solutions (MCS) will return a new srcCorrelationId in each response by default, but Integrators may choose to populate previously used srcCorrelationIds in subsequent requests to correlate their activity under a single ID. This can be done by providing a Mastercard generated srcCorrelationId in the request, or by generating your own ID in the same format. SrcCorrelationId is used for tracking and troubleshooting purposes within Mastercard&#39;s ecosystem. | 
 **srcClientId** | **String**| A unique identifier assigned by Mastercard during onboarding which signifies the responsible party Integrating to Mastercard Checkout Solutions (MCS). | 
 **batchId** | **String**| A unique identifier associated with the submitted Digital Payment Application (DPA) batch. The Batch ID can be used to retrieve the status of the batch by calling GET DPA status endpoint. | 

### Return type

[**DpaBatchStatus**](DpaBatchStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

