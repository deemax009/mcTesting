# MastercardProcessingCoreApi.CustomDataApi

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClientCustomData**](CustomDataApi.md#getClientCustomData) | **GET** /clients/{client_id}/custom-data/{tag_name} | Retrieves selected custom data for a client
[**getContractCustomData**](CustomDataApi.md#getContractCustomData) | **GET** /contracts/{contract_id}/custom-data/{tag_name} | Retrieves selected custom data for a specified contract (account contract or card contract)
[**setClientCustomData**](CustomDataApi.md#setClientCustomData) | **POST** /clients/{client_id}/custom-data | Sets up a custom data for a client
[**setContractCustomData**](CustomDataApi.md#setContractCustomData) | **POST** /contracts/{contract_id}/custom-data | Sets up a custom data for a specified contract (account contract or card contract)



## getClientCustomData

> ClientCustomDataTagValues getClientCustomData(clientId, tagName)

Retrieves selected custom data for a client

Operation name: &#x60;getClientCustomData&#x60;  Operation is used to retrieve selected custom data of the client object. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.CustomDataApi();
let clientId = 40000; // Number | Unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (`POST /clients`, field `clientId`). 
let tagName = "TAG_01"; // String | Tag name 
apiInstance.getClientCustomData(clientId, tagName, (error, data, response) => {
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
 **clientId** | **Number**| Unique technical client identifier, generated by the MP&#39;s CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (&#x60;POST /clients&#x60;, field &#x60;clientId&#x60;).  | 
 **tagName** | **String**| Tag name  | 

### Return type

[**ClientCustomDataTagValues**](ClientCustomDataTagValues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## getContractCustomData

> ContractCustomDataTagValues getContractCustomData(contractId, tagName)

Retrieves selected custom data for a specified contract (account contract or card contract)

Operation name: &#x60;getContractCustomData&#x60;  Operation is used to retrieve selected custom data of the specified contract (**account contract** or **card contract**). 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.CustomDataApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let tagName = "TAG_01"; // String | Tag name 
apiInstance.getContractCustomData(contractId, tagName, (error, data, response) => {
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
 **contractId** | **Number**| Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (&#x60;POST /accounts&#x60;, field: &#x60;accountContractId&#x60;).   * card contract creation response (&#x60;POST /cards&#x60;, field: &#x60;cardContractId&#x60;).  | 
 **tagName** | **String**| Tag name  | 

### Return type

[**ContractCustomDataTagValues**](ContractCustomDataTagValues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## setClientCustomData

> setClientCustomData(clientId, customDataTag, opts)

Sets up a custom data for a client

Operation name: &#x60;setClientCustomData&#x60;  Operation is used to manage custom data of the client object:   * add   * update   * remove  Client custom data allow the Issuer to store specific client-related information on client record in the MP&#39;s CMS. The tags may represent Issuer-specific field names and values, not available as separate, dedicated fields on client record. The Issuer can specify the tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in TAG&#x3D;VALUE; format (for example: CATEGORY&#x3D;A;GROUP&#x3D;G1;).  Each container has length of 3900 characters. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.CustomDataApi();
let clientId = 40000; // Number | Unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (`POST /clients`, field `clientId`). 
let customDataTag = [new MastercardProcessingCoreApi.CustomDataTag()]; // [CustomDataTag] | 
let opts = {
  'idempotencyKey': "7da7a728-f910-11e6-942a-68f728c1ba70" // String | Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
};
apiInstance.setClientCustomData(clientId, customDataTag, opts, (error, data, response) => {
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
 **clientId** | **Number**| Unique technical client identifier, generated by the MP&#39;s CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (&#x60;POST /clients&#x60;, field &#x60;clientId&#x60;).  | 
 **customDataTag** | [**[CustomDataTag]**](CustomDataTag.md)|  | 
 **idempotencyKey** | **String**| Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## setContractCustomData

> setContractCustomData(contractId, customDataTag, opts)

Sets up a custom data for a specified contract (account contract or card contract)

Operation name: &#x60;setContractCustomData&#x60;  Operation is used to manage custom data of the contract (**account contract** or **card contract**):   * add   * update   * remove  Account contract custom data allow the Issuer to store specific contract-related information on a contract record in the MP&#39;s CMS. The tags may represent the Issuer-specific field names and values, not available as separate, dedicated fields on the contract record. The Issuer can specify the tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in TAG&#x3D;VALUE; format (for example: CATEGORY&#x3D;A;GROUP&#x3D;G1;).  Each container has length of 255 characters. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.CustomDataApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let customDataTag = [new MastercardProcessingCoreApi.CustomDataTag()]; // [CustomDataTag] | 
let opts = {
  'idempotencyKey': "7da7a728-f910-11e6-942a-68f728c1ba70" // String | Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
};
apiInstance.setContractCustomData(contractId, customDataTag, opts, (error, data, response) => {
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
 **contractId** | **Number**| Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (&#x60;POST /accounts&#x60;, field: &#x60;accountContractId&#x60;).   * card contract creation response (&#x60;POST /cards&#x60;, field: &#x60;cardContractId&#x60;).  | 
 **customDataTag** | [**[CustomDataTag]**](CustomDataTag.md)|  | 
 **idempotencyKey** | **String**| Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

