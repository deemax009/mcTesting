# MastercardProcessingCoreApi.ContractApi

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeContractMainContract**](ContractApi.md#changeContractMainContract) | **PUT** /contracts/{contract_id}/main-contract | Relinks a subaccount or card contract to another account contract
[**getAuthenticationParameterValue**](ContractApi.md#getAuthenticationParameterValue) | **GET** /contracts/{contract_id}/authentication-parameter-values | Retrieves the value of a given authentication parameter for a specified contract.
[**getContractBalances**](ContractApi.md#getContractBalances) | **GET** /contracts/{contract_id}/balances | Retrieves information about balances for a specified contract (account contract or card contract)
[**getContractFinancials**](ContractApi.md#getContractFinancials) | **GET** /contracts/{contract_id}/financials | Retrieves contract&#39;s (account contract&#39;s or card contract&#39;s) financial information
[**getContractTreeSummary**](ContractApi.md#getContractTreeSummary) | **GET** /contracts/{contract_id}/tree-summaries | Retrieves summary of the contracts for a specified contract (account contract or card contract)
[**getTechnicalAccounts**](ContractApi.md#getTechnicalAccounts) | **GET** /contracts/{contract_id}/technical-accounts | Retrieves information about technical accounts for a specified contract (account contract or card contract)
[**openEvent**](ContractApi.md#openEvent) | **POST** /contracts/{contract_id}/events | Opens an event for a specified contract (account contract or card contract)
[**setAuthenticationMethod**](ContractApi.md#setAuthenticationMethod) | **PUT** /contracts/{contract_id}/authentication-method | Sets up a contract (account contract or card contract) authentication method.



## changeContractMainContract

> changeContractMainContract(contractId, accountContractIdentifierWithClientIdentifier)

Relinks a subaccount or card contract to another account contract

Operation name: &#x60;changeContractMainContract&#x60;  Operation is used to associate the subaccount or card contract with a different parent account contract. Optionally operation allows to also associate contract with a different client. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let accountContractIdentifierWithClientIdentifier = new MastercardProcessingCoreApi.AccountContractIdentifierWithClientIdentifier(); // AccountContractIdentifierWithClientIdentifier | 
apiInstance.changeContractMainContract(contractId, accountContractIdentifierWithClientIdentifier, (error, data, response) => {
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
 **accountContractIdentifierWithClientIdentifier** | [**AccountContractIdentifierWithClientIdentifier**](AccountContractIdentifierWithClientIdentifier.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## getAuthenticationParameterValue

> AuthenticationParameterValue getAuthenticationParameterValue(contractId, authenticationParameterName, authenticationTypeCode)

Retrieves the value of a given authentication parameter for a specified contract.

Operation name: &#x60;getAuthenticationParameterValue&#x60;  Operation is used to retrieve the value of a given authentication parameter for a specified contract. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let authenticationParameterName = "PHONE"; // String | Contract authentication parameter name. 
let authenticationTypeCode = "3DS_EXT_ENROLLMENT"; // String | Contract authentication type code. 
apiInstance.getAuthenticationParameterValue(contractId, authenticationParameterName, authenticationTypeCode, (error, data, response) => {
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
 **authenticationParameterName** | **String**| Contract authentication parameter name.  | 
 **authenticationTypeCode** | **String**| Contract authentication type code.  | 

### Return type

[**AuthenticationParameterValue**](AuthenticationParameterValue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## getContractBalances

> ContractBalances getContractBalances(contractId, balanceCodes)

Retrieves information about balances for a specified contract (account contract or card contract)

Operation name: &#x60;getContractBalances&#x60;  Operation is used to retrieve information about chosen contract balances. Operation can be used for (**account contract** or **card contract**).  The response will return information about specified balances.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  Available balances in the standard product:    | &#x60;balanceCode&#x60;  | **Description**                                                                                                      | **Product applicability**  | |--------------- |--------------------------------------------------------------------------------------------------------------------- |--------------------------- | | AVAILABLE      | Balance type reflecting contract&#39;s amount available                                                                  | Credit, Prepaid            | | BLOCKED        | Balance type reflecting amounts blocked after authorization                                                          | Credit, Prepaid            | | CR_LIMIT       | Balance type reflecting contract&#39;s credit limit and additional authorization limit                                   | Credit                     | | DEPOSIT        | Balance type reflecting a cardholder current balance                                                                 | Prepaid                    | | DUE            | Balance type calculated in latest cycle as cardholder due amount                                                     | Credit                     | | OUT_BALANCE    | Outstanding balance                                                                                                  | Prepaid                    | | OVL            | Balance type reflecting the difference between a contract&#39;s balance (&#x60;TOTAL_BALANCE&#x60;) and credit limit (&#x60;CR_LIMIT&#x60;)  | Credit                     | | PAST_DUE       | Sum of all overdue balances (from OVD_1 up to OVD_6)                                                                 | Credit                     | | STMT_BALANCE   | Balance type calculated at end of cycle                                                                              | Credit                     | | TOTAL_BALANCE  | Balance type reflecting contract&#39;s balance including balances of liability subcontracts                              | Credit, Prepaid            | | TOTAL_DUE      | SUM of &#x60;DUE&#x60; and &#x60;PAST_DUE&#x60; balances. This is the amount presented in the Statement as Minimum to Pay                | Credit                     | 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let balanceCodes = ["null"]; // [String] | List of balance codes. The response will return information about specified balances.  Note: Response will contain only specified balance codes that does exist in the CMS. If none exists or a list does not contain any value then the response will not return any data (HTTP 200 will be returned with an empty array `[]`).  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
apiInstance.getContractBalances(contractId, balanceCodes, (error, data, response) => {
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
 **balanceCodes** | [**[String]**](String.md)| List of balance codes. The response will return information about specified balances.  Note: Response will contain only specified balance codes that does exist in the CMS. If none exists or a list does not contain any value then the response will not return any data (HTTP 200 will be returned with an empty array &#x60;[]&#x60;).  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 

### Return type

[**ContractBalances**](ContractBalances.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## getContractFinancials

> ContractFinancial getContractFinancials(contractId)

Retrieves contract&#39;s (account contract&#39;s or card contract&#39;s) financial information

Operation name: &#x60;getContractFinancials&#x60;  Operation is used to retrieve financial information for the contract (**account contract** or **card contract**). 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
apiInstance.getContractFinancials(contractId, (error, data, response) => {
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

### Return type

[**ContractFinancial**](ContractFinancial.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## getContractTreeSummary

> ContractSummaryTree getContractTreeSummary(contractId, opts)

Retrieves summary of the contracts for a specified contract (account contract or card contract)

Operation name: &#x60;getContractTreeSummary&#x60;  Operation is used to retrieve summary of the contracts from the tree structure created in the MP&#39;s CMS for the specified contract (**account contract** or **card contract**).  The operation returns a summary of the contracts created under the specified contract and upper-level contracts from the tree structure created in the CMS. For example, if there is one account contract (top account contract) with one subaccount under which 3 card contracts have been created, then: * if the operation is used to retrieve tree summary for the top account contract then API returns 5 contracts (top account contract, subaccount contract and all 3 card contracts) * if the operation is used to retrieve tree summary for one of the card contracts then API returns 3 contracts (top account contract, subaccount contract and 1 card contract specified in the request) 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let opts = {
  'limit': 1, // Number | The number of items you want the list to be limited to. 
  'offset': 0 // Number | The number of items to offset the start of the list from. 
};
apiInstance.getContractTreeSummary(contractId, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of items you want the list to be limited to.  | [optional] [default to 10]
 **offset** | **Number**| The number of items to offset the start of the list from.  | [optional] [default to 0]

### Return type

[**ContractSummaryTree**](ContractSummaryTree.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## getTechnicalAccounts

> TechnicalAccounts getTechnicalAccounts(contractId, opts)

Retrieves information about technical accounts for a specified contract (account contract or card contract)

Operation name: &#x60;getTechnicalAccounts&#x60;  Operation is used to retrieve information about technical accounts configured for the contract (**account contract** or **card contract**).  Additional filtering can be applied:   * **Technical account code** - to retrieve only selected technical account  Notes:   * If a technical account code is not provided response will contain all technical accounts.   * Technical accounts are created for the contract during 1st transfer of funds from or to a given technical account.    Hence, right after contract creation response will not contain all possible technical accounts for the contract. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let opts = {
  'technicalAccountCode': "BF" // String | Code of the account, which is related to the given contract. 
};
apiInstance.getTechnicalAccounts(contractId, opts, (error, data, response) => {
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
 **technicalAccountCode** | **String**| Code of the account, which is related to the given contract.  | [optional] 

### Return type

[**TechnicalAccounts**](TechnicalAccounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## openEvent

> openEvent(contractId, event, opts)

Opens an event for a specified contract (account contract or card contract)

Operation name: &#x60;openEvent&#x60;  Operation is used to open event for a specified contract (**account contract** or **card contract**). 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let event = new MastercardProcessingCoreApi.Event(); // Event | 
let opts = {
  'idempotencyKey': "7da7a728-f910-11e6-942a-68f728c1ba70" // String | Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
};
apiInstance.openEvent(contractId, event, opts, (error, data, response) => {
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
 **event** | [**Event**](Event.md)|  | 
 **idempotencyKey** | **String**| Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## setAuthenticationMethod

> setAuthenticationMethod(contractId, authenticationMethod)

Sets up a contract (account contract or card contract) authentication method.

Operation name: &#x60;setAuthenticationMethod&#x60;  Operation is used to set up a contract (**account contract** or **card contract**) authentication method. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.ContractApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let authenticationMethod = new MastercardProcessingCoreApi.AuthenticationMethod(); // AuthenticationMethod | 
apiInstance.setAuthenticationMethod(contractId, authenticationMethod, (error, data, response) => {
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
 **authenticationMethod** | [**AuthenticationMethod**](AuthenticationMethod.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8
