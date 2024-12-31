# MastercardProcessingCoreApi.UsageLimitApi

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUsageLimitStatus**](UsageLimitApi.md#changeUsageLimitStatus) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/status | Changes specified usage limit status for a given contract (account contract or card contract)
[**getUsageLimits**](UsageLimitApi.md#getUsageLimits) | **GET** /contracts/{contract_id}/usage-limits | Retrieves a list of usage limits for a contract (account contract or card contract)
[**resetUsageLimitCounters**](UsageLimitApi.md#resetUsageLimitCounters) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/resetting-counters | Resets counters for a specified usage limit for a given contract (account contract or card contract)
[**restoreUsageLimitOriginalValues**](UsageLimitApi.md#restoreUsageLimitOriginalValues) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/original-values | Restores original values of a usage limit for a given contract (account contract or card contract)
[**setUsageLimit**](UsageLimitApi.md#setUsageLimit) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code} | Adds or updates a usage limit for a given contract (account contract or card contract)



## changeUsageLimitStatus

> changeUsageLimitStatus(contractId, usageLimitCode, usageLimitStatus)

Changes specified usage limit status for a given contract (account contract or card contract)

Operation name: &#x60;changeUsageLimitStatus&#x60;  Operation is used to manage the activity of the specified usage limit on a given contract (**account contract** or **card contract**).  The Issuer is able to:   * switch off usage limit   * switch on usage limit  Additionally, activity period can be provided (start and end timestamp).    * For switch off (SUSPEND):     * activation date must be greater than the deactivation date     * activation date must be greater than the system date    * For switch on (ACTIVE):     * deactivation date must be greater than the activation date     * deactivation date must be greater than the system date  Available usage limits in the standard product. In the standard product usage limits are defined in the Parametrization Workbook (PPW), in the worksheet 4 *Usage Limits* and in the worksheet 5 *Top-up* (in case of dedicated usage limits for prepaid).   | &#x60;usageLimitCode&#x60;       | **Contract   level**  | **Description**                                                          | **Product applicability**  |   |----------------------- |---------------------- |------------------------------------------------------------------------- |--------------------------- |   | BILLING_ATM            | Card contract         | Billing ATM withdrawal transactions                                      | Credit                     |   | BILLING_CASH           | Card contract         | Billing ATM withdrawal and Cash advance transactions                     | Credit                     |   | BILLING_ECOMM          | Card contract         | Billing e-commerce transactions                                          | Credit                     |   | BILLING_MOTO           | Card contract         | Billing MOTO transactions                                                | Credit                     |   | BILLING_RETAIL         | Card contract         | Billing Retail (POS, e-commerce, MOTO and other payments) transactions   | Credit                     |   | BILLING_TOTAL          | Card contract         | Billing all types of transactions                                        | Credit                     |   | DAILY_ATM              | Card contract         | Daily ATM withdrawal transactions                                        | Any product                |   | DAILY_CASH             | Card contract         | Daily ATM withdrawal and Cash advance transactions                       | Any product                |   | DAILY_ECOMM            | Card contract         | Daily e-commerce transactions                                            | Any product                |   | DAILY_MOTO             | Card contract         | Daily MOTO transactions                                                  | Any product                |   | DAILY_RETAIL           | Card contract         | Daily Retail (POS, e-commerce, MOTO and other payments) transactions     | Any product                |   | DAILY_TOP_UP           | Account contract      | Cumulative daily top-up limit                                            | Prepaid                    |   | DAILY_TOTAL            | Card contract         | Daily all types of transactions                                          | Any product                |   | MONTHLY_ATM            | Card contract         | Monthly ATM withdrawal transactions                                      | Any product                |   | MONTHLY_CASH           | Card contract         | Monthly ATM withdrawal and Cash advance transactions                     | Any product                |   | MONTHLY_ECOMM          | Card contract         | Monthly e-commerce transactions                                          | Any product                |   | MONTHLY_MOTO           | Card contract         | Monthly MOTO transactions                                                | Any product                |   | MONTHLY_RETAIL         | Card contract         | Monthly Retail  (POS, e-commerce, MOTO and other payments) transactions  | Any product                |   | MONTHLY_TOP_UP         | Account contract      | Cumulative monthly top-up limit                                          | Prepaid                    |   | MONTHLY_TOTAL          | Card contract         | Monthly all types of transactions                                        | Any product                |   | PREPAID_BALANCE_LIMIT  | Account contract      | Prepaid Balance Limit                                                    | Prepaid                    |   | YEARLY_TOP_UP          | Account contract      | Cumulative yearly top-up limit                                           | Prepaid                    |             

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.UsageLimitApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let usageLimitCode = "DAILY_TOTAL"; // String | Unique usage limit code which defines the contract's usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
let usageLimitStatus = new MastercardProcessingCoreApi.UsageLimitStatus(); // UsageLimitStatus | 
apiInstance.changeUsageLimitStatus(contractId, usageLimitCode, usageLimitStatus, (error, data, response) => {
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
 **usageLimitCode** | **String**| Unique usage limit code which defines the contract&#39;s usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 
 **usageLimitStatus** | [**UsageLimitStatus**](UsageLimitStatus.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## getUsageLimits

> UsageLimits getUsageLimits(contractId, usageLimitCodes)

Retrieves a list of usage limits for a contract (account contract or card contract)

Operation name: &#x60;getUsageLimits&#x60;  Operation is used to retrieve specified usage limits for a given contract (**account contract** or **card contract**).  The response will contain only specified usage limits. If the request doesn&#39;t contain any limit code value then the response will be empty.  Note: Operation retrieves only the current (at the time of query) state of the limit.  Available usage limits in the standard product. In the standard product usage limits are defined in the Parametrization Workbook (PPW), in the worksheet 4 *Usage Limits* and in the worksheet 5 *Top-up* (in case of dedicated usage limits for prepaid).   | &#x60;usageLimitCode&#x60;       | **Contract   level**  | **Description**                                                          | **Product applicability**  |   |----------------------- |---------------------- |------------------------------------------------------------------------- |--------------------------- |   | BILLING_ATM            | Card contract         | Billing ATM withdrawal transactions                                      | Credit                     |   | BILLING_CASH           | Card contract         | Billing ATM withdrawal and Cash advance transactions                     | Credit                     |   | BILLING_ECOMM          | Card contract         | Billing e-commerce transactions                                          | Credit                     |   | BILLING_MOTO           | Card contract         | Billing MOTO transactions                                                | Credit                     |   | BILLING_RETAIL         | Card contract         | Billing Retail (POS, e-commerce, MOTO and other payments) transactions   | Credit                     |   | BILLING_TOTAL          | Card contract         | Billing all types of transactions                                        | Credit                     |   | DAILY_ATM              | Card contract         | Daily ATM withdrawal transactions                                        | Any product                |   | DAILY_CASH             | Card contract         | Daily ATM withdrawal and Cash advance transactions                       | Any product                |   | DAILY_ECOMM            | Card contract         | Daily e-commerce transactions                                            | Any product                |   | DAILY_MOTO             | Card contract         | Daily MOTO transactions                                                  | Any product                |   | DAILY_RETAIL           | Card contract         | Daily Retail (POS, e-commerce, MOTO and other payments) transactions     | Any product                |   | DAILY_TOP_UP           | Account contract      | Cumulative daily top-up limit                                            | Prepaid                    |   | DAILY_TOTAL            | Card contract         | Daily all types of transactions                                          | Any product                |   | MONTHLY_ATM            | Card contract         | Monthly ATM withdrawal transactions                                      | Any product                |   | MONTHLY_CASH           | Card contract         | Monthly ATM withdrawal and Cash advance transactions                     | Any product                |   | MONTHLY_ECOMM          | Card contract         | Monthly e-commerce transactions                                          | Any product                |   | MONTHLY_MOTO           | Card contract         | Monthly MOTO transactions                                                | Any product                |   | MONTHLY_RETAIL         | Card contract         | Monthly Retail  (POS, e-commerce, MOTO and other payments) transactions  | Any product                |   | MONTHLY_TOP_UP         | Account contract      | Cumulative monthly top-up limit                                          | Prepaid                    |   | MONTHLY_TOTAL          | Card contract         | Monthly all types of transactions                                        | Any product                |   | PREPAID_BALANCE_LIMIT  | Account contract      | Prepaid Balance Limit                                                    | Prepaid                    |   | YEARLY_TOP_UP          | Account contract      | Cumulative yearly top-up limit                                           | Prepaid                    |         

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.UsageLimitApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let usageLimitCodes = ["DAILY_TOTAL"]; // [String] | The list of usage limit codes which should be returned.  Note: Response will contain only specified limit codes that does exist in the CMS. If none exists or a list does not contain any value then the response will not return any data (HTTP 200 will be returned with an empty array `[]`).  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
apiInstance.getUsageLimits(contractId, usageLimitCodes, (error, data, response) => {
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
 **usageLimitCodes** | [**[String]**](String.md)| The list of usage limit codes which should be returned.  Note: Response will contain only specified limit codes that does exist in the CMS. If none exists or a list does not contain any value then the response will not return any data (HTTP 200 will be returned with an empty array &#x60;[]&#x60;).  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 

### Return type

[**UsageLimits**](UsageLimits.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## resetUsageLimitCounters

> resetUsageLimitCounters(contractId, usageLimitCode, usageLimitResetting)

Resets counters for a specified usage limit for a given contract (account contract or card contract)

Operation name: &#x60;resetUsageLimitCounters&#x60;  Operation is used to reset counters for a specified usage limit for the contract (**account contract** or **card contract**).  Available usage limits in the standard product. In the standard product usage limits are defined in the Parametrization Workbook (PPW), in the worksheet 4 *Usage Limits* and in the worksheet 5 *Top-up* (in case of dedicated usage limits for prepaid).   | &#x60;usageLimitCode&#x60;       | **Contract   level**  | **Description**                                                          | **Product applicability**  |   |----------------------- |---------------------- |------------------------------------------------------------------------- |--------------------------- |   | BILLING_ATM            | Card contract         | Billing ATM withdrawal transactions                                      | Credit                     |   | BILLING_CASH           | Card contract         | Billing ATM withdrawal and Cash advance transactions                     | Credit                     |   | BILLING_ECOMM          | Card contract         | Billing e-commerce transactions                                          | Credit                     |   | BILLING_MOTO           | Card contract         | Billing MOTO transactions                                                | Credit                     |   | BILLING_RETAIL         | Card contract         | Billing Retail (POS, e-commerce, MOTO and other payments) transactions   | Credit                     |   | BILLING_TOTAL          | Card contract         | Billing all types of transactions                                        | Credit                     |   | DAILY_ATM              | Card contract         | Daily ATM withdrawal transactions                                        | Any product                |   | DAILY_CASH             | Card contract         | Daily ATM withdrawal and Cash advance transactions                       | Any product                |   | DAILY_ECOMM            | Card contract         | Daily e-commerce transactions                                            | Any product                |   | DAILY_MOTO             | Card contract         | Daily MOTO transactions                                                  | Any product                |   | DAILY_RETAIL           | Card contract         | Daily Retail (POS, e-commerce, MOTO and other payments) transactions     | Any product                |   | DAILY_TOP_UP           | Account contract      | Cumulative daily top-up limit                                            | Prepaid                    |   | DAILY_TOTAL            | Card contract         | Daily all types of transactions                                          | Any product                |   | MONTHLY_ATM            | Card contract         | Monthly ATM withdrawal transactions                                      | Any product                |   | MONTHLY_CASH           | Card contract         | Monthly ATM withdrawal and Cash advance transactions                     | Any product                |   | MONTHLY_ECOMM          | Card contract         | Monthly e-commerce transactions                                          | Any product                |   | MONTHLY_MOTO           | Card contract         | Monthly MOTO transactions                                                | Any product                |   | MONTHLY_RETAIL         | Card contract         | Monthly Retail  (POS, e-commerce, MOTO and other payments) transactions  | Any product                |   | MONTHLY_TOP_UP         | Account contract      | Cumulative monthly top-up limit                                          | Prepaid                    |   | MONTHLY_TOTAL          | Card contract         | Monthly all types of transactions                                        | Any product                |   | PREPAID_BALANCE_LIMIT  | Account contract      | Prepaid Balance Limit                                                    | Prepaid                    |   | YEARLY_TOP_UP          | Account contract      | Cumulative yearly top-up limit                                           | Prepaid                    |         

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.UsageLimitApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let usageLimitCode = "DAILY_TOTAL"; // String | Unique usage limit code which defines the contract's usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
let usageLimitResetting = new MastercardProcessingCoreApi.UsageLimitResetting(); // UsageLimitResetting | 
apiInstance.resetUsageLimitCounters(contractId, usageLimitCode, usageLimitResetting, (error, data, response) => {
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
 **usageLimitCode** | **String**| Unique usage limit code which defines the contract&#39;s usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 
 **usageLimitResetting** | [**UsageLimitResetting**](UsageLimitResetting.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## restoreUsageLimitOriginalValues

> restoreUsageLimitOriginalValues(contractId, usageLimitCode, usageLimitOriginalValue)

Restores original values of a usage limit for a given contract (account contract or card contract)

Operation name: &#x60;restoreUsageLimitOriginalValues&#x60;  Operation is used to restore usage limit default parameters specified in the CMS (Service Package) for the contract (**account contract** or **card contract**).  Available usage limits in the standard product. In the standard product usage limits are defined in the Parametrization Workbook (PPW), in the worksheet 4 *Usage Limits* and in the worksheet 5 *Top-up* (in case of dedicated usage limits for prepaid).   | &#x60;usageLimitCode&#x60;       | **Contract   level**  | **Description**                                                          | **Product applicability**  |   |----------------------- |---------------------- |------------------------------------------------------------------------- |--------------------------- |   | BILLING_ATM            | Card contract         | Billing ATM withdrawal transactions                                      | Credit                     |   | BILLING_CASH           | Card contract         | Billing ATM withdrawal and Cash advance transactions                     | Credit                     |   | BILLING_ECOMM          | Card contract         | Billing e-commerce transactions                                          | Credit                     |   | BILLING_MOTO           | Card contract         | Billing MOTO transactions                                                | Credit                     |   | BILLING_RETAIL         | Card contract         | Billing Retail (POS, e-commerce, MOTO and other payments) transactions   | Credit                     |   | BILLING_TOTAL          | Card contract         | Billing all types of transactions                                        | Credit                     |   | DAILY_ATM              | Card contract         | Daily ATM withdrawal transactions                                        | Any product                |   | DAILY_CASH             | Card contract         | Daily ATM withdrawal and Cash advance transactions                       | Any product                |   | DAILY_ECOMM            | Card contract         | Daily e-commerce transactions                                            | Any product                |   | DAILY_MOTO             | Card contract         | Daily MOTO transactions                                                  | Any product                |   | DAILY_RETAIL           | Card contract         | Daily Retail (POS, e-commerce, MOTO and other payments) transactions     | Any product                |   | DAILY_TOP_UP           | Account contract      | Cumulative daily top-up limit                                            | Prepaid                    |   | DAILY_TOTAL            | Card contract         | Daily all types of transactions                                          | Any product                |   | MONTHLY_ATM            | Card contract         | Monthly ATM withdrawal transactions                                      | Any product                |   | MONTHLY_CASH           | Card contract         | Monthly ATM withdrawal and Cash advance transactions                     | Any product                |   | MONTHLY_ECOMM          | Card contract         | Monthly e-commerce transactions                                          | Any product                |   | MONTHLY_MOTO           | Card contract         | Monthly MOTO transactions                                                | Any product                |   | MONTHLY_RETAIL         | Card contract         | Monthly Retail  (POS, e-commerce, MOTO and other payments) transactions  | Any product                |   | MONTHLY_TOP_UP         | Account contract      | Cumulative monthly top-up limit                                          | Prepaid                    |   | MONTHLY_TOTAL          | Card contract         | Monthly all types of transactions                                        | Any product                |   | PREPAID_BALANCE_LIMIT  | Account contract      | Prepaid Balance Limit                                                    | Prepaid                    |   | YEARLY_TOP_UP          | Account contract      | Cumulative yearly top-up limit                                           | Prepaid                    |         

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.UsageLimitApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let usageLimitCode = "DAILY_TOTAL"; // String | Unique usage limit code which defines the contract's usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
let usageLimitOriginalValue = new MastercardProcessingCoreApi.UsageLimitOriginalValue(); // UsageLimitOriginalValue | 
apiInstance.restoreUsageLimitOriginalValues(contractId, usageLimitCode, usageLimitOriginalValue, (error, data, response) => {
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
 **usageLimitCode** | **String**| Unique usage limit code which defines the contract&#39;s usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 
 **usageLimitOriginalValue** | [**UsageLimitOriginalValue**](UsageLimitOriginalValue.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## setUsageLimit

> setUsageLimit(contractId, usageLimitCode, usageLimitModification)

Adds or updates a usage limit for a given contract (account contract or card contract)

Operation name: &#x60;setUsageLimit&#x60;  Operation is used to add or update a new usage limit for the contract (**account contract** or **card contract**).  MP API does not provide an option to create a new usage limit. Usage limits are defined during the setup phase of the product (card product). Each usage limit has default values stored on CMS configuration (Service Pack). Operation &#x60;setUsageLimit&#x60; allows to update those default values of a given usage limit for the specified contract. The updated values are immediately used in authorization checks.  Specifics of a combination of limit properties (&#x60;maxNumber&#x60;, &#x60;maxAmount&#x60;, &#x60;maxSingleAmount&#x60;) parameters:   * Limit could be active (after overriding by &#x60;setUsageLimit&#x60;) with all 0 which means that all transactions belonging     to this limit will be declined. If all three fields have zero values, all transactions are prohibited.   * If at least one property is set to non-zero, the limit will allow transactions up to that number or amount respectively.   * If at least one property is set to a big number (ex. &#x60;maxNumber&#x60; set to 999999999 which is unlikely to reach in normal circumstances),     it will serve the same purpose as disabling limit.  **Examples:** 1.  *&#x60;maxNumber&#x60;&#x3D;0, &#x60;maxAmount&#x60;&#x3D;1000, &#x60;maxSingleAmount&#x60;&#x3D;200*      In this configuration, no limit is set on the total number of transactions (maxNumber) on a contract for a period.     The total transaction amount for a period (maxAmount) and single transaction amount (maxSingleAmount) are limited.  2.  *&#x60;maxNumber&#x60;&#x3D;10, &#x60;maxAmount&#x60;&#x3D;0, &#x60;maxSingleAmount&#x60;&#x3D;200*      In this configuration, the total number of transactions on a contract for a period and single transaction amount are limited.     No limit is set on the total transaction amount for a period.  3.  *&#x60;maxNumber&#x60;&#x3D;10, &#x60;maxAmount&#x60;&#x3D;1000, &#x60;maxSingleAmount&#x60;&#x3D;0*      In this configuration, the total number of transactions on a contract and the total transaction amount for a period are limited.     No limit is set on the single transaction amount.  Note: If limiter parameters were changed several times, and the effective periods of the redefined parameters overlap, the system remembers the changed values in the overlapping time periods. For example:   * On 01.10.2009 a card was opened for a client. A limit of 300 USD was set on this card for operations at ATMs.   * The client requested that for a period of one month, beginning 05.10.2009, the limit on his card be increased from 300 USD to 600 USD.   * On 10.10.2009 the client asked to increase the limit on his card from 600 USD to 900 USD for one day.   * Therefore, from 01.10.2009 to 04.10.2009 the limit will be 300 USD, from 05.10.2009 to 09.10.2009 it will increase to 600 USD,     on 10.10.2009 it will be 900 USD, and from 11.10.2009 to 05.11.2009 the limit will be 600 USD again. After 05.11.2009 the limit will return to 300 USD.  Available usage limits in the standard product. In the standard product usage limits are defined in the Parametrization Workbook (PPW), in the worksheet 4 *Usage Limits* and in the worksheet 5 *Top-up* (in case of dedicated usage limits for prepaid).   | &#x60;usageLimitCode&#x60;       | **Contract   level**  | **Description**                                                          | **Product applicability**  |   |----------------------- |---------------------- |------------------------------------------------------------------------- |--------------------------- |   | BILLING_ATM            | Card contract         | Billing ATM withdrawal transactions                                      | Credit                     |   | BILLING_CASH           | Card contract         | Billing ATM withdrawal and Cash advance transactions                     | Credit                     |   | BILLING_ECOMM          | Card contract         | Billing e-commerce transactions                                          | Credit                     |   | BILLING_MOTO           | Card contract         | Billing MOTO transactions                                                | Credit                     |   | BILLING_RETAIL         | Card contract         | Billing Retail (POS, e-commerce, MOTO and other payments) transactions   | Credit                     |   | BILLING_TOTAL          | Card contract         | Billing all types of transactions                                        | Credit                     |   | DAILY_ATM              | Card contract         | Daily ATM withdrawal transactions                                        | Any product                |   | DAILY_CASH             | Card contract         | Daily ATM withdrawal and Cash advance transactions                       | Any product                |   | DAILY_ECOMM            | Card contract         | Daily e-commerce transactions                                            | Any product                |   | DAILY_MOTO             | Card contract         | Daily MOTO transactions                                                  | Any product                |   | DAILY_RETAIL           | Card contract         | Daily Retail (POS, e-commerce, MOTO and other payments) transactions     | Any product                |   | DAILY_TOP_UP           | Account contract      | Cumulative daily top-up limit                                            | Prepaid                    |   | DAILY_TOTAL            | Card contract         | Daily all types of transactions                                          | Any product                |   | MONTHLY_ATM            | Card contract         | Monthly ATM withdrawal transactions                                      | Any product                |   | MONTHLY_CASH           | Card contract         | Monthly ATM withdrawal and Cash advance transactions                     | Any product                |   | MONTHLY_ECOMM          | Card contract         | Monthly e-commerce transactions                                          | Any product                |   | MONTHLY_MOTO           | Card contract         | Monthly MOTO transactions                                                | Any product                |   | MONTHLY_RETAIL         | Card contract         | Monthly Retail  (POS, e-commerce, MOTO and other payments) transactions  | Any product                |   | MONTHLY_TOP_UP         | Account contract      | Cumulative monthly top-up limit                                          | Prepaid                    |   | MONTHLY_TOTAL          | Card contract         | Monthly all types of transactions                                        | Any product                |   | PREPAID_BALANCE_LIMIT  | Account contract      | Prepaid Balance Limit                                                    | Prepaid                    |   | YEARLY_TOP_UP          | Account contract      | Cumulative yearly top-up limit                                           | Prepaid                    | 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.UsageLimitApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let usageLimitCode = "DAILY_TOTAL"; // String | Unique usage limit code which defines the contract's usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.* 
let usageLimitModification = new MastercardProcessingCoreApi.UsageLimitModification(); // UsageLimitModification | 
apiInstance.setUsageLimit(contractId, usageLimitCode, usageLimitModification, (error, data, response) => {
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
 **usageLimitCode** | **String**| Unique usage limit code which defines the contract&#39;s usage limit for which action should be executed.  *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process.*  | 
 **usageLimitModification** | [**UsageLimitModification**](UsageLimitModification.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

