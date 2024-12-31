# MastercardProcessingCoreApi.SecurityApi

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicRsaKey**](SecurityApi.md#getPublicRsaKey) | **GET** /public-keys | Retrieves MP&#39;s public RSA key.



## getPublicRsaKey

> PublicRsaKeyData getPublicRsaKey(dataTypeToSecure)

Retrieves MP&#39;s public RSA key.

Operation name: &#x60;getPublicRsaKey&#x60;  Operation is used to request a public RSA key information from the MP. In the response to the request, MP will return the MP&#39;s public RSA key and its index.  Operation is used for PIN Block asymmetric encryption in &#x60;setPin&#x60; and &#x60;verifyPin&#x60; operations. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.SecurityApi();
let dataTypeToSecure = "PIN_BLOCK"; // String | Definition specifying what type of sensitive data an RSA key data will be used for.  | **Possible values**  | **Description**           | |--------------------- |-------------------------- | | PIN_BLOCK            | For PIN block encryption  | 
apiInstance.getPublicRsaKey(dataTypeToSecure, (error, data, response) => {
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
 **dataTypeToSecure** | **String**| Definition specifying what type of sensitive data an RSA key data will be used for.  | **Possible values**  | **Description**           | |--------------------- |-------------------------- | | PIN_BLOCK            | For PIN block encryption  |  | 

### Return type

[**PublicRsaKeyData**](PublicRsaKeyData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

