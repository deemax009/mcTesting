# mastercard_processing_core_api

MastercardProcessingCoreApi - JavaScript client for mastercard_processing_core_api
OpenAPI Specification for MP (Mastercard Processing) **Core**.

This documentation describes what functionalities are exposed by the MP's CMS (Card Management System) and are available to be used by the Issuer.
The Issuer is the primary actor who executes the operations. Whenever the Issuer wishes to onboard its customers to the card program, they may use API to:
 * create and manage **client**
 * create and manage **contracts**, there are two types of contracts in the MP's CMS:
   * **account contract**
   * **card contract**

Later, during the card lifecycle, the Issuer can also manage other objects related to the client and the contract (account or card):
 * manage **card plastic**
 * create, manage and retrieve **additional addresses** (for the client and the contract)
 * manage and retrieve **classifiers** (for the client and the contract)
 * manage and retrieve **custom data** (for the client and the contract)
 * manage and retrieve **parameters** (for the contract)
 * set or retrieve **service limit tariff** (for the contract)
 * post or retrieve **transactions** (for the contract)
 * manage and retrieve **usage limits** (for the contract)

***
API uses RESTful protocol via HTTP to execute POST, PUT, GET and PATCH operations sent to given endpoints, e.g. `/clients`.

API uses JSON Web Encryption compact serialization for payload encryption for all API operations.
***
External documentation:
  * [ISO 4217 - Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)
  * [ISO 3166 - Country Codes](https://www.iso.org/iso-3166-country-codes.html)
  * [Internet Engineering Task Force (IETF) BCP 47 standard](https://tools.ietf.org/html/bcp47#appendix-A)
  * [JSON Web Encryption](https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/#jwe-encryption)
  * [Internet Engineering Task Force (IETF) RFC7232](https://datatracker.ietf.org/doc/html/rfc7232)
  * [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386)
***

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://developer.mastercard.com/support](https://developer.mastercard.com/support)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mastercard_processing_core_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your mastercard_processing_core_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MastercardProcessingCoreApi = require('mastercard_processing_core_api');


var api = new MastercardProcessingCoreApi.AccountContractApi()
var accountContractId = 60001; // {Number} Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when account contract creation finishes successfully and is returned in an account contract creation response (`POST /accounts`). 
var clientIdentifierWithRelinkType = new MastercardProcessingCoreApi.ClientIdentifierWithRelinkType(); // {ClientIdentifierWithRelinkType} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.changeAccountContractClient(accountContractId, clientIdentifierWithRelinkType, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.mastercard.com/global-processing/core*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MastercardProcessingCoreApi.AccountContractApi* | [**changeAccountContractClient**](docs/AccountContractApi.md#changeAccountContractClient) | **PUT** /accounts/{account_contract_id}/client-identifier | Relinks an account contract to another client
*MastercardProcessingCoreApi.AccountContractApi* | [**changeAccountContractStatus**](docs/AccountContractApi.md#changeAccountContractStatus) | **PUT** /accounts/{account_contract_id}/status | Changes an account contract status
*MastercardProcessingCoreApi.AccountContractApi* | [**createAccountContract**](docs/AccountContractApi.md#createAccountContract) | **POST** /accounts | Creates an account contract
*MastercardProcessingCoreApi.AccountContractApi* | [**getAccountContract**](docs/AccountContractApi.md#getAccountContract) | **GET** /accounts/{account_contract_id} | Retrieves an account contract
*MastercardProcessingCoreApi.AccountContractApi* | [**getAccountContractStatus**](docs/AccountContractApi.md#getAccountContractStatus) | **GET** /accounts/{account_contract_id}/statuses | Retrieves account contract status.
*MastercardProcessingCoreApi.AccountContractApi* | [**getCardContractsByAccount**](docs/AccountContractApi.md#getCardContractsByAccount) | **GET** /accounts/{account_contract_id}/card-contracts | Retrieves a list of card contracts for a specified account contract
*MastercardProcessingCoreApi.AccountContractApi* | [**getSubAccountContracts**](docs/AccountContractApi.md#getSubAccountContracts) | **GET** /accounts/{account_contract_id}/sub-accounts | Retrieves a list of subaccount contracts for a specified account contract.
*MastercardProcessingCoreApi.AccountContractApi* | [**updateAccountContract**](docs/AccountContractApi.md#updateAccountContract) | **PATCH** /accounts/{account_contract_id} | Updates an account contract
*MastercardProcessingCoreApi.AddressApi* | [**addClientAddress**](docs/AddressApi.md#addClientAddress) | **POST** /clients/{client_id}/addresses | Creates an address for a client
*MastercardProcessingCoreApi.AddressApi* | [**addContractAddress**](docs/AddressApi.md#addContractAddress) | **POST** /contracts/{contract_id}/addresses | Creates an address for the contract (account contract or card contract)
*MastercardProcessingCoreApi.AddressApi* | [**getClientAddresses**](docs/AddressApi.md#getClientAddresses) | **GET** /clients/{client_id}/addresses | Retrieves a list of addresses for the client
*MastercardProcessingCoreApi.AddressApi* | [**getContractAddresses**](docs/AddressApi.md#getContractAddresses) | **GET** /contracts/{contract_id}/addresses | Retrieves a list of addresses for the contract (account contract or card contract)
*MastercardProcessingCoreApi.AddressApi* | [**updateClientAddress**](docs/AddressApi.md#updateClientAddress) | **PUT** /clients/{client_id}/addresses/{address_type} | Updates an address of a selected type for the client
*MastercardProcessingCoreApi.AddressApi* | [**updateContractAddress**](docs/AddressApi.md#updateContractAddress) | **PUT** /contracts/{contract_id}/addresses/{address_type} | Updates an address of a selected type for the contract (account contract or card contract)
*MastercardProcessingCoreApi.CardContractApi* | [**changeCardContractClient**](docs/CardContractApi.md#changeCardContractClient) | **PUT** /cards/{card_contract_id}/client-identifier | Relinks a card contract to another client
*MastercardProcessingCoreApi.CardContractApi* | [**changeCardContractMainContract**](docs/CardContractApi.md#changeCardContractMainContract) | **PUT** /cards/{card_contract_id}/main-contract | Relinks a card contract to another account contract
*MastercardProcessingCoreApi.CardContractApi* | [**changeCardContractStatus**](docs/CardContractApi.md#changeCardContractStatus) | **PUT** /cards/{card_contract_id}/status | Set new status for the card contract
*MastercardProcessingCoreApi.CardContractApi* | [**clearOnlinePinAttempts**](docs/CardContractApi.md#clearOnlinePinAttempts) | **PUT** /cards/{card_contract_id}/online-pin-attempts-counter | Resets Online PIN Try Counter
*MastercardProcessingCoreApi.CardContractApi* | [**createCardContract**](docs/CardContractApi.md#createCardContract) | **POST** /cards | Creates a card contract
*MastercardProcessingCoreApi.CardContractApi* | [**getCardContract**](docs/CardContractApi.md#getCardContract) | **GET** /cards/{card_contract_id} | Retrieves a card contract
*MastercardProcessingCoreApi.CardContractApi* | [**getCardContractStatus**](docs/CardContractApi.md#getCardContractStatus) | **GET** /cards/{card_contract_id}/statuses | Retrieves card contract status.
*MastercardProcessingCoreApi.CardContractApi* | [**updateCardContract**](docs/CardContractApi.md#updateCardContract) | **PATCH** /cards/{card_contract_id} | Updates a card contract
*MastercardProcessingCoreApi.CardContractApi* | [**verifyCardDetails**](docs/CardContractApi.md#verifyCardDetails) | **POST** /cards/details-verifications | Verifies card details
*MastercardProcessingCoreApi.CardPlasticApi* | [**activateCard**](docs/CardPlasticApi.md#activateCard) | **PUT** /cards/{card_contract_id}/active | Activates a card plastic and unlocks the card for transaction use.
*MastercardProcessingCoreApi.CardPlasticApi* | [**getCardPlastics**](docs/CardPlasticApi.md#getCardPlastics) | **GET** /cards/{card_contract_id}/plastics | Retrieves information about all card plastics for a specified card contract
*MastercardProcessingCoreApi.CardPlasticApi* | [**getCvc**](docs/CardPlasticApi.md#getCvc) | **POST** /cards/{card_contract_id}/card-verification-codes/searches | Retrieves a CVC2 for a card plastic
*MastercardProcessingCoreApi.CardPlasticApi* | [**getPin**](docs/CardPlasticApi.md#getPin) | **POST** /cards/{card_contract_id}/pins/searches | Retrieves a PIN for a card plastic
*MastercardProcessingCoreApi.CardPlasticApi* | [**reissueCard**](docs/CardPlasticApi.md#reissueCard) | **POST** /cards/{card_contract_id}/plastics | Reissues a card
*MastercardProcessingCoreApi.CardPlasticApi* | [**setPin**](docs/CardPlasticApi.md#setPin) | **PUT** /cards/{card_contract_id}/pin | Sets up new PIN for a card plastic
*MastercardProcessingCoreApi.CardPlasticApi* | [**verifyCvc**](docs/CardPlasticApi.md#verifyCvc) | **POST** /cards/{card_contract_id}/card-verification-codes/verifications | Verifies a CVC2 of specific card plastic
*MastercardProcessingCoreApi.CardPlasticApi* | [**verifyPin**](docs/CardPlasticApi.md#verifyPin) | **POST** /cards/{card_contract_id}/pins/verifications | Verifies a PIN
*MastercardProcessingCoreApi.ClassifierApi* | [**getClientClassifiers**](docs/ClassifierApi.md#getClientClassifiers) | **GET** /clients/{client_id}/classifiers | Retrieves a client classifier
*MastercardProcessingCoreApi.ClassifierApi* | [**getContractClassifiers**](docs/ClassifierApi.md#getContractClassifiers) | **GET** /contracts/{contract_id}/classifiers | Retrieves contract&#39;s (account contract&#39;s or card contract&#39;s) classifier
*MastercardProcessingCoreApi.ClassifierApi* | [**setClientClassifier**](docs/ClassifierApi.md#setClientClassifier) | **PUT** /clients/{client_id}/classifiers/{classifier_code} | Sets up a client classifier
*MastercardProcessingCoreApi.ClassifierApi* | [**setContractClassifier**](docs/ClassifierApi.md#setContractClassifier) | **PUT** /contracts/{contract_id}/classifiers/{classifier_code} | Sets up a contract&#39;s (account contract&#39;s or card contract&#39;s) classifier
*MastercardProcessingCoreApi.ClientApi* | [**clearOnlinePinAttemptsForClient**](docs/ClientApi.md#clearOnlinePinAttemptsForClient) | **PUT** /clients/{client_id}/online-pin-attempts-counter | Resets Online PIN Try Counter
*MastercardProcessingCoreApi.ClientApi* | [**createClient**](docs/ClientApi.md#createClient) | **POST** /clients | Creates a client
*MastercardProcessingCoreApi.ClientApi* | [**getAccountContractsByClient**](docs/ClientApi.md#getAccountContractsByClient) | **GET** /clients/{client_id}/account-contracts | Retrieves a list of account contracts for a specified client
*MastercardProcessingCoreApi.ClientApi* | [**getCardContractsByClient**](docs/ClientApi.md#getCardContractsByClient) | **GET** /clients/{client_id}/card-contracts | Retrieves a list of card contracts for a specified client
*MastercardProcessingCoreApi.ClientApi* | [**getClient**](docs/ClientApi.md#getClient) | **GET** /clients/{client_id} | Retrieves a client
*MastercardProcessingCoreApi.ClientApi* | [**updateClient**](docs/ClientApi.md#updateClient) | **PATCH** /clients/{client_id} | Updates a client
*MastercardProcessingCoreApi.ContractApi* | [**changeContractMainContract**](docs/ContractApi.md#changeContractMainContract) | **PUT** /contracts/{contract_id}/main-contract | Relinks a subaccount or card contract to another account contract
*MastercardProcessingCoreApi.ContractApi* | [**getAuthenticationParameterValue**](docs/ContractApi.md#getAuthenticationParameterValue) | **GET** /contracts/{contract_id}/authentication-parameter-values | Retrieves the value of a given authentication parameter for a specified contract.
*MastercardProcessingCoreApi.ContractApi* | [**getContractBalances**](docs/ContractApi.md#getContractBalances) | **GET** /contracts/{contract_id}/balances | Retrieves information about balances for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.ContractApi* | [**getContractFinancials**](docs/ContractApi.md#getContractFinancials) | **GET** /contracts/{contract_id}/financials | Retrieves contract&#39;s (account contract&#39;s or card contract&#39;s) financial information
*MastercardProcessingCoreApi.ContractApi* | [**getContractTreeSummary**](docs/ContractApi.md#getContractTreeSummary) | **GET** /contracts/{contract_id}/tree-summaries | Retrieves summary of the contracts for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.ContractApi* | [**getTechnicalAccounts**](docs/ContractApi.md#getTechnicalAccounts) | **GET** /contracts/{contract_id}/technical-accounts | Retrieves information about technical accounts for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.ContractApi* | [**openEvent**](docs/ContractApi.md#openEvent) | **POST** /contracts/{contract_id}/events | Opens an event for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.ContractApi* | [**setAuthenticationMethod**](docs/ContractApi.md#setAuthenticationMethod) | **PUT** /contracts/{contract_id}/authentication-method | Sets up a contract (account contract or card contract) authentication method.
*MastercardProcessingCoreApi.CustomDataApi* | [**getClientCustomData**](docs/CustomDataApi.md#getClientCustomData) | **GET** /clients/{client_id}/custom-data/{tag_name} | Retrieves selected custom data for a client
*MastercardProcessingCoreApi.CustomDataApi* | [**getContractCustomData**](docs/CustomDataApi.md#getContractCustomData) | **GET** /contracts/{contract_id}/custom-data/{tag_name} | Retrieves selected custom data for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.CustomDataApi* | [**setClientCustomData**](docs/CustomDataApi.md#setClientCustomData) | **POST** /clients/{client_id}/custom-data | Sets up a custom data for a client
*MastercardProcessingCoreApi.CustomDataApi* | [**setContractCustomData**](docs/CustomDataApi.md#setContractCustomData) | **POST** /contracts/{contract_id}/custom-data | Sets up a custom data for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.ParameterApi* | [**getContractParameters**](docs/ParameterApi.md#getContractParameters) | **GET** /contracts/{contract_id}/parameters | Retrieves information about contract (account contract or card contract) parameter(s).
*MastercardProcessingCoreApi.ParameterApi* | [**setContractParameter**](docs/ParameterApi.md#setContractParameter) | **PUT** /contracts/{contract_id}/parameters/{parameter_code} | Sets up or changes a contract&#39;s parameter value.
*MastercardProcessingCoreApi.SearchApi* | [**getAccountContractId**](docs/SearchApi.md#getAccountContractId) | **POST** /accounts/searches | Returns accountContractId assigned to a given account identifier.
*MastercardProcessingCoreApi.SearchApi* | [**getCardContractId**](docs/SearchApi.md#getCardContractId) | **POST** /cards/searches | Returns cardContractId assigned to a given card contract identifier.
*MastercardProcessingCoreApi.SearchApi* | [**getClientId**](docs/SearchApi.md#getClientId) | **POST** /clients/searches | Returns clientId assigned to a given client identifier.
*MastercardProcessingCoreApi.SecurityApi* | [**getPublicRsaKey**](docs/SecurityApi.md#getPublicRsaKey) | **GET** /public-keys | Retrieves MP&#39;s public RSA key.
*MastercardProcessingCoreApi.TariffApi* | [**getContractTariffData**](docs/TariffApi.md#getContractTariffData) | **GET** /contracts/{contract_id}/tariff-data | Retrieves information about tariff configuration for a contract (account contract or card contract)
*MastercardProcessingCoreApi.TariffApi* | [**setServiceLimitTariff**](docs/TariffApi.md#setServiceLimitTariff) | **POST** /contracts/{contract_id}/service-limit-tariffs | Sets up an individual service limit tariff for the contract (account contract or card contract)
*MastercardProcessingCoreApi.TransactionApi* | [**chargeFee**](docs/TransactionApi.md#chargeFee) | **POST** /contracts/{contract_id}/charge-fees | Charges specified contract (account contract or card contract) with a fee configured in the MP&#39;s CMS
*MastercardProcessingCoreApi.TransactionApi* | [**creditContract**](docs/TransactionApi.md#creditContract) | **POST** /contracts/{contract_id}/credits | Posts credit transaction to a contract (account contract or card contract)
*MastercardProcessingCoreApi.TransactionApi* | [**debitContract**](docs/TransactionApi.md#debitContract) | **POST** /contracts/{contract_id}/debits | Posts debit transaction to a contract (account contract or card contract)
*MastercardProcessingCoreApi.TransactionApi* | [**getContractTransactionDocuments**](docs/TransactionApi.md#getContractTransactionDocuments) | **GET** /contracts/{contract_id}/transaction-documents | Retrieves transaction documents for a contract (account contract or card contract)
*MastercardProcessingCoreApi.TransactionApi* | [**getTransactionDocuments**](docs/TransactionApi.md#getTransactionDocuments) | **GET** /transaction-documents | Retrieves transaction documents by ID, ARN, RRN or SRN
*MastercardProcessingCoreApi.TransactionApi* | [**getTransactionFees**](docs/TransactionApi.md#getTransactionFees) | **GET** /transactions/{transaction_id}/fees | Retrieves fees generated for a transaction.
*MastercardProcessingCoreApi.TransactionApi* | [**getTransactions**](docs/TransactionApi.md#getTransactions) | **GET** /contracts/{contract_id}/transactions | Retrieves transactions for a specified contract (account contract or card contract)
*MastercardProcessingCoreApi.TransactionApi* | [**releaseBlockedFunds**](docs/TransactionApi.md#releaseBlockedFunds) | **PUT** /contracts/{contract_id}/transactions/{transaction_id}/releasing-blocked-funds | Releases funds of the pending transaction.
*MastercardProcessingCoreApi.TransactionApi* | [**reverseTransaction**](docs/TransactionApi.md#reverseTransaction) | **POST** /transactions/{transaction_id}/reversal | Reverses selected transaction made by the Issuer.
*MastercardProcessingCoreApi.UsageLimitApi* | [**changeUsageLimitStatus**](docs/UsageLimitApi.md#changeUsageLimitStatus) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/status | Changes specified usage limit status for a given contract (account contract or card contract)
*MastercardProcessingCoreApi.UsageLimitApi* | [**getUsageLimits**](docs/UsageLimitApi.md#getUsageLimits) | **GET** /contracts/{contract_id}/usage-limits | Retrieves a list of usage limits for a contract (account contract or card contract)
*MastercardProcessingCoreApi.UsageLimitApi* | [**resetUsageLimitCounters**](docs/UsageLimitApi.md#resetUsageLimitCounters) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/resetting-counters | Resets counters for a specified usage limit for a given contract (account contract or card contract)
*MastercardProcessingCoreApi.UsageLimitApi* | [**restoreUsageLimitOriginalValues**](docs/UsageLimitApi.md#restoreUsageLimitOriginalValues) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code}/original-values | Restores original values of a usage limit for a given contract (account contract or card contract)
*MastercardProcessingCoreApi.UsageLimitApi* | [**setUsageLimit**](docs/UsageLimitApi.md#setUsageLimit) | **PUT** /contracts/{contract_id}/usage-limits/{usage_limit_code} | Adds or updates a usage limit for a given contract (account contract or card contract)


## Documentation for Models

 - [MastercardProcessingCoreApi.AccountContract](docs/AccountContract.md)
 - [MastercardProcessingCoreApi.AccountContractBalances](docs/AccountContractBalances.md)
 - [MastercardProcessingCoreApi.AccountContractCardContracts](docs/AccountContractCardContracts.md)
 - [MastercardProcessingCoreApi.AccountContractClassifier](docs/AccountContractClassifier.md)
 - [MastercardProcessingCoreApi.AccountContractCreation](docs/AccountContractCreation.md)
 - [MastercardProcessingCoreApi.AccountContractData](docs/AccountContractData.md)
 - [MastercardProcessingCoreApi.AccountContractIdentifier](docs/AccountContractIdentifier.md)
 - [MastercardProcessingCoreApi.AccountContractIdentifierSearch](docs/AccountContractIdentifierSearch.md)
 - [MastercardProcessingCoreApi.AccountContractIdentifierWithClientIdentifier](docs/AccountContractIdentifierWithClientIdentifier.md)
 - [MastercardProcessingCoreApi.AccountContractModification](docs/AccountContractModification.md)
 - [MastercardProcessingCoreApi.AccountContractOwner](docs/AccountContractOwner.md)
 - [MastercardProcessingCoreApi.AccountContractParameter](docs/AccountContractParameter.md)
 - [MastercardProcessingCoreApi.AccountContractStatus](docs/AccountContractStatus.md)
 - [MastercardProcessingCoreApi.AccountContractStatusData](docs/AccountContractStatusData.md)
 - [MastercardProcessingCoreApi.AccountContractStatusWithReason](docs/AccountContractStatusWithReason.md)
 - [MastercardProcessingCoreApi.Address](docs/Address.md)
 - [MastercardProcessingCoreApi.AddressCreation](docs/AddressCreation.md)
 - [MastercardProcessingCoreApi.AddressModification](docs/AddressModification.md)
 - [MastercardProcessingCoreApi.AuthenticationMethod](docs/AuthenticationMethod.md)
 - [MastercardProcessingCoreApi.AuthenticationParameter](docs/AuthenticationParameter.md)
 - [MastercardProcessingCoreApi.AuthenticationParameterValue](docs/AuthenticationParameterValue.md)
 - [MastercardProcessingCoreApi.BaseAddress](docs/BaseAddress.md)
 - [MastercardProcessingCoreApi.BaseCardContractStatusData](docs/BaseCardContractStatusData.md)
 - [MastercardProcessingCoreApi.BaseClient](docs/BaseClient.md)
 - [MastercardProcessingCoreApi.BlockedFundsRelease](docs/BlockedFundsRelease.md)
 - [MastercardProcessingCoreApi.BlockedFundsReleaseResult](docs/BlockedFundsReleaseResult.md)
 - [MastercardProcessingCoreApi.CardContract](docs/CardContract.md)
 - [MastercardProcessingCoreApi.CardContractActivation](docs/CardContractActivation.md)
 - [MastercardProcessingCoreApi.CardContractCreation](docs/CardContractCreation.md)
 - [MastercardProcessingCoreApi.CardContractData](docs/CardContractData.md)
 - [MastercardProcessingCoreApi.CardContractDetailsVerification](docs/CardContractDetailsVerification.md)
 - [MastercardProcessingCoreApi.CardContractDetailsVerificationResult](docs/CardContractDetailsVerificationResult.md)
 - [MastercardProcessingCoreApi.CardContractIdentifier](docs/CardContractIdentifier.md)
 - [MastercardProcessingCoreApi.CardContractIdentifierSearch](docs/CardContractIdentifierSearch.md)
 - [MastercardProcessingCoreApi.CardContractModification](docs/CardContractModification.md)
 - [MastercardProcessingCoreApi.CardContractPlastics](docs/CardContractPlastics.md)
 - [MastercardProcessingCoreApi.CardContractReissue](docs/CardContractReissue.md)
 - [MastercardProcessingCoreApi.CardContractStatus](docs/CardContractStatus.md)
 - [MastercardProcessingCoreApi.CardContractStatusData](docs/CardContractStatusData.md)
 - [MastercardProcessingCoreApi.CardContractStatusWithReason](docs/CardContractStatusWithReason.md)
 - [MastercardProcessingCoreApi.CardContractSummary](docs/CardContractSummary.md)
 - [MastercardProcessingCoreApi.CardContractWithEncryptedCardContractNumber](docs/CardContractWithEncryptedCardContractNumber.md)
 - [MastercardProcessingCoreApi.ChargeFee](docs/ChargeFee.md)
 - [MastercardProcessingCoreApi.Classifier](docs/Classifier.md)
 - [MastercardProcessingCoreApi.ClassifierCreation](docs/ClassifierCreation.md)
 - [MastercardProcessingCoreApi.Client](docs/Client.md)
 - [MastercardProcessingCoreApi.ClientAccountContracts](docs/ClientAccountContracts.md)
 - [MastercardProcessingCoreApi.ClientAddresses](docs/ClientAddresses.md)
 - [MastercardProcessingCoreApi.ClientBaseAddressData](docs/ClientBaseAddressData.md)
 - [MastercardProcessingCoreApi.ClientCardContracts](docs/ClientCardContracts.md)
 - [MastercardProcessingCoreApi.ClientClassifiers](docs/ClientClassifiers.md)
 - [MastercardProcessingCoreApi.ClientCompanyData](docs/ClientCompanyData.md)
 - [MastercardProcessingCoreApi.ClientContactData](docs/ClientContactData.md)
 - [MastercardProcessingCoreApi.ClientCreation](docs/ClientCreation.md)
 - [MastercardProcessingCoreApi.ClientCustomDataTagValues](docs/ClientCustomDataTagValues.md)
 - [MastercardProcessingCoreApi.ClientIdentificationData](docs/ClientIdentificationData.md)
 - [MastercardProcessingCoreApi.ClientIdentifier](docs/ClientIdentifier.md)
 - [MastercardProcessingCoreApi.ClientIdentifierSearch](docs/ClientIdentifierSearch.md)
 - [MastercardProcessingCoreApi.ClientIdentifierWithRelinkType](docs/ClientIdentifierWithRelinkType.md)
 - [MastercardProcessingCoreApi.ClientModification](docs/ClientModification.md)
 - [MastercardProcessingCoreApi.ClientPersonalData](docs/ClientPersonalData.md)
 - [MastercardProcessingCoreApi.ContractAddresses](docs/ContractAddresses.md)
 - [MastercardProcessingCoreApi.ContractBalance](docs/ContractBalance.md)
 - [MastercardProcessingCoreApi.ContractBalances](docs/ContractBalances.md)
 - [MastercardProcessingCoreApi.ContractClassifiers](docs/ContractClassifiers.md)
 - [MastercardProcessingCoreApi.ContractCustomDataTagValues](docs/ContractCustomDataTagValues.md)
 - [MastercardProcessingCoreApi.ContractFinancial](docs/ContractFinancial.md)
 - [MastercardProcessingCoreApi.ContractParameter](docs/ContractParameter.md)
 - [MastercardProcessingCoreApi.ContractParameters](docs/ContractParameters.md)
 - [MastercardProcessingCoreApi.ContractSummary](docs/ContractSummary.md)
 - [MastercardProcessingCoreApi.ContractSummaryTree](docs/ContractSummaryTree.md)
 - [MastercardProcessingCoreApi.ContractTariff](docs/ContractTariff.md)
 - [MastercardProcessingCoreApi.ContractTariffs](docs/ContractTariffs.md)
 - [MastercardProcessingCoreApi.CreditData](docs/CreditData.md)
 - [MastercardProcessingCoreApi.CurrentUsage](docs/CurrentUsage.md)
 - [MastercardProcessingCoreApi.CustomDataTag](docs/CustomDataTag.md)
 - [MastercardProcessingCoreApi.CustomDataTagValue](docs/CustomDataTagValue.md)
 - [MastercardProcessingCoreApi.Cvc](docs/Cvc.md)
 - [MastercardProcessingCoreApi.CvcSearchCriteria](docs/CvcSearchCriteria.md)
 - [MastercardProcessingCoreApi.CvcVerification](docs/CvcVerification.md)
 - [MastercardProcessingCoreApi.CvcVerificationResult](docs/CvcVerificationResult.md)
 - [MastercardProcessingCoreApi.EmbossedData](docs/EmbossedData.md)
 - [MastercardProcessingCoreApi.EncryptedPin](docs/EncryptedPin.md)
 - [MastercardProcessingCoreApi.Error](docs/Error.md)
 - [MastercardProcessingCoreApi.ErrorWrapper](docs/ErrorWrapper.md)
 - [MastercardProcessingCoreApi.Errors](docs/Errors.md)
 - [MastercardProcessingCoreApi.Event](docs/Event.md)
 - [MastercardProcessingCoreApi.LiabilityContract](docs/LiabilityContract.md)
 - [MastercardProcessingCoreApi.OnlinePinAttemptsClearance](docs/OnlinePinAttemptsClearance.md)
 - [MastercardProcessingCoreApi.OnlinePinAttemptsClearanceForClient](docs/OnlinePinAttemptsClearanceForClient.md)
 - [MastercardProcessingCoreApi.ParameterModification](docs/ParameterModification.md)
 - [MastercardProcessingCoreApi.PinCreation](docs/PinCreation.md)
 - [MastercardProcessingCoreApi.PinSearchCriteria](docs/PinSearchCriteria.md)
 - [MastercardProcessingCoreApi.PinVerification](docs/PinVerification.md)
 - [MastercardProcessingCoreApi.PinVerificationResult](docs/PinVerificationResult.md)
 - [MastercardProcessingCoreApi.Plastic](docs/Plastic.md)
 - [MastercardProcessingCoreApi.PublicRsaKeyData](docs/PublicRsaKeyData.md)
 - [MastercardProcessingCoreApi.ReissuedCardContract](docs/ReissuedCardContract.md)
 - [MastercardProcessingCoreApi.ReverseTransactionId](docs/ReverseTransactionId.md)
 - [MastercardProcessingCoreApi.ReverseTransactionReason](docs/ReverseTransactionReason.md)
 - [MastercardProcessingCoreApi.ServiceLimitTariff](docs/ServiceLimitTariff.md)
 - [MastercardProcessingCoreApi.SubAccountContracts](docs/SubAccountContracts.md)
 - [MastercardProcessingCoreApi.TagContainer](docs/TagContainer.md)
 - [MastercardProcessingCoreApi.TechnicalAccount](docs/TechnicalAccount.md)
 - [MastercardProcessingCoreApi.TechnicalAccounts](docs/TechnicalAccounts.md)
 - [MastercardProcessingCoreApi.Transaction](docs/Transaction.md)
 - [MastercardProcessingCoreApi.TransactionAddInfo](docs/TransactionAddInfo.md)
 - [MastercardProcessingCoreApi.TransactionBaseInfo](docs/TransactionBaseInfo.md)
 - [MastercardProcessingCoreApi.TransactionContractCredit](docs/TransactionContractCredit.md)
 - [MastercardProcessingCoreApi.TransactionContractDebit](docs/TransactionContractDebit.md)
 - [MastercardProcessingCoreApi.TransactionCustomData](docs/TransactionCustomData.md)
 - [MastercardProcessingCoreApi.TransactionDocument](docs/TransactionDocument.md)
 - [MastercardProcessingCoreApi.TransactionDocuments](docs/TransactionDocuments.md)
 - [MastercardProcessingCoreApi.TransactionFee](docs/TransactionFee.md)
 - [MastercardProcessingCoreApi.TransactionFees](docs/TransactionFees.md)
 - [MastercardProcessingCoreApi.TransactionId](docs/TransactionId.md)
 - [MastercardProcessingCoreApi.TransactionIdentifiers](docs/TransactionIdentifiers.md)
 - [MastercardProcessingCoreApi.TransactionMerchantInfo](docs/TransactionMerchantInfo.md)
 - [MastercardProcessingCoreApi.TransactionTypeInfo](docs/TransactionTypeInfo.md)
 - [MastercardProcessingCoreApi.TransactionValues](docs/TransactionValues.md)
 - [MastercardProcessingCoreApi.Transactions](docs/Transactions.md)
 - [MastercardProcessingCoreApi.UsageLimit](docs/UsageLimit.md)
 - [MastercardProcessingCoreApi.UsageLimitModification](docs/UsageLimitModification.md)
 - [MastercardProcessingCoreApi.UsageLimitOriginalValue](docs/UsageLimitOriginalValue.md)
 - [MastercardProcessingCoreApi.UsageLimitResetting](docs/UsageLimitResetting.md)
 - [MastercardProcessingCoreApi.UsageLimitStatus](docs/UsageLimitStatus.md)
 - [MastercardProcessingCoreApi.UsageLimits](docs/UsageLimits.md)


## Documentation for Authorization

Endpoints do not require authorization.

