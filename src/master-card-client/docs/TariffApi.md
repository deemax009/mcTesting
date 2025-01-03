# MastercardProcessingCoreApi.TariffApi

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContractTariffData**](TariffApi.md#getContractTariffData) | **GET** /contracts/{contract_id}/tariff-data | Retrieves information about tariff configuration for a contract (account contract or card contract)
[**setServiceLimitTariff**](TariffApi.md#setServiceLimitTariff) | **POST** /contracts/{contract_id}/service-limit-tariffs | Sets up an individual service limit tariff for the contract (account contract or card contract)



## getContractTariffData

> ContractTariffs getContractTariffData(contractId, opts)

Retrieves information about tariff configuration for a contract (account contract or card contract)

Operation name: &#x60;getContractTariffData&#x60;  Operation is used to retrieve information about tariff configuration for a given contract (**account contract** or **card contract**). 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.TariffApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let opts = {
  'limit': 1, // Number | The number of items you want the list to be limited to. 
  'offset': 0, // Number | The number of items to offset the start of the list from. 
  'personalisationType': "G", // String | Personalisation type.  | **Possible values**  |      **Description**       | |:-------------------: |:-------------------------: | |          G           |           Global           | |          P           |          Personal          | |          D           |        Personalised        | |          T           | Personal (Template Based)  | |          L           |          Template          | 
  'tariffCode': "MTP_CALC_RULE", // String | Tariff code. 
  'tariffDomainCode': "GL", // String | Tariff domain code. 
  'tariffRole': "AGEING", // String | Tariff role.    | **Possible values**  | **Description**             |   |--------------------- |---------------------------- |   | SERVICE              |  Service                    |   | SERVICE_LIMIT        |  Service Limit              |   | SERVICE_VD           |  Service Value Days         |   | INTEREST             |  Interest                   |   | AGEING               |  Ageing                     |   | USAGE                |  Usage                      |   | INTEREST_TAX         |  Interest Tax               |   | BILLING              |  Billing Scheme             |   | GL                   |  General Ledger Numeration  |   | INST_FEE             |  Installment Fee            |   | INSTALLMENT          |  Installment Scheme         |   | THRESHOLD            |  Threshold                  |   | TECHNICAL            |  Technical                  |   | FX                   |  Conversion                 |   | REDEFINITION         |  Redefinition               | 
  'tariffTypeCode': "MTP_CALC_RULE" // String | Tariff type code. 
};
apiInstance.getContractTariffData(contractId, opts, (error, data, response) => {
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
 **personalisationType** | **String**| Personalisation type.  | **Possible values**  |      **Description**       | |:-------------------: |:-------------------------: | |          G           |           Global           | |          P           |          Personal          | |          D           |        Personalised        | |          T           | Personal (Template Based)  | |          L           |          Template          |  | [optional] 
 **tariffCode** | **String**| Tariff code.  | [optional] 
 **tariffDomainCode** | **String**| Tariff domain code.  | [optional] 
 **tariffRole** | **String**| Tariff role.    | **Possible values**  | **Description**             |   |--------------------- |---------------------------- |   | SERVICE              |  Service                    |   | SERVICE_LIMIT        |  Service Limit              |   | SERVICE_VD           |  Service Value Days         |   | INTEREST             |  Interest                   |   | AGEING               |  Ageing                     |   | USAGE                |  Usage                      |   | INTEREST_TAX         |  Interest Tax               |   | BILLING              |  Billing Scheme             |   | GL                   |  General Ledger Numeration  |   | INST_FEE             |  Installment Fee            |   | INSTALLMENT          |  Installment Scheme         |   | THRESHOLD            |  Threshold                  |   | TECHNICAL            |  Technical                  |   | FX                   |  Conversion                 |   | REDEFINITION         |  Redefinition               |  | [optional] 
 **tariffTypeCode** | **String**| Tariff type code.  | [optional] 

### Return type

[**ContractTariffs**](ContractTariffs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## setServiceLimitTariff

> setServiceLimitTariff(contractId, serviceLimitTariff, opts)

Sets up an individual service limit tariff for the contract (account contract or card contract)

Operation name: &#x60;setServiceLimitTariff&#x60;  Operation is used to redefine individual Service Limit Tariff for a specified contract (**account contract** or **card contract**).  Service Tariff Role - is used to set up fee calculation rules in Services Service Limit Tariff Role - is used to set up Services for calculating the maximum and minimum transaction amount, or to specify account balance limitations, or to specify limitations related to Events that open or close when the value of a specific balance type changes. 

### Example

```javascript
import MastercardProcessingCoreApi from 'mastercard_processing_core_api';

let apiInstance = new MastercardProcessingCoreApi.TariffApi();
let contractId = 70001; // Number | Unique technical contract identifier generated by the CMS.  The identifier is generated when contract (account or card) creation finishes successfully and is returned in:   * account contract creation response (`POST /accounts`, field: `accountContractId`).   * card contract creation response (`POST /cards`, field: `cardContractId`). 
let serviceLimitTariff = new MastercardProcessingCoreApi.ServiceLimitTariff(); // ServiceLimitTariff | 
let opts = {
  'idempotencyKey': "7da7a728-f910-11e6-942a-68f728c1ba70" // String | Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again. 
};
apiInstance.setServiceLimitTariff(contractId, serviceLimitTariff, opts, (error, data, response) => {
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
 **serviceLimitTariff** | [**ServiceLimitTariff**](ServiceLimitTariff.md)|  | 
 **idempotencyKey** | **String**| Unique identifier generated by the issuer. Mastercard Processing uses this identifier to recognize subsequent retries of the same request and ensure idempotent behaviour by sending the same response without repeating the operation again.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

