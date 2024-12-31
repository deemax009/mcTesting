# MastercardProcessingCoreApi.AccountContractIdentifierSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountContractIdentifier** | **String** | This field must contain an identifier value according to the type specified by &#x60;accountContractIdentifierType&#x60; field (&#x60;ACCOUNT_CONTRACT_NUMBER&#x60; or &#x60;CBS_NUMBER&#x60;).  | 
**accountContractIdentifierType** | **String** | Type of account contract identifier, corresponding to the value sent in &#x60;accountContractIdentifier&#x60; field.  | **Possible values**       | **Description**                                                                                                                     | |-------------------------- |------------------------------------------------------------------------------------------------------------------------------------ | | CBS_NUMBER                | Search will be executed based on the CBS Number (Core Banking System Number)                                                        | | ACCOUNT_CONTRACT_NUMBER   | Search will be executed based on the account contract number assigned by the Issuer during the account creation (&#x60;POST /accounts&#x60;)  |  | 



## Enum: AccountContractIdentifierTypeEnum


* `CBS_NUMBER` (value: `"CBS_NUMBER"`)

* `ACCOUNT_CONTRACT_NUMBER` (value: `"ACCOUNT_CONTRACT_NUMBER"`)




