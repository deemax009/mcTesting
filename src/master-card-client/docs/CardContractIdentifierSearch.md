# MastercardProcessingCoreApi.CardContractIdentifierSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardContractIdentifier** | **String** | This field must contain an identifier value according to the type specified by &#x60;cardContractIdentifierType&#x60; field (&#x60;CARD_CONTRACT_NUMBER&#x60; or &#x60;CBS_NUMBER&#x60;).  | 
**cardContractIdentifierType** | **String** | Type of card contract identifier, corresponding to the value sent in &#x60;cardContractIdentifier&#x60; field.  | **Possible values**    | **Description**                                                                                                               | |----------------------- |------------------------------------------------------------------------------------------------------------------------------ | | CBS_NUMBER             | Search will be executed based on the CBS Number (Core Banking System Number)                                                  | | CARD_CONTRACT_NUMBER   | Search will be executed based on the card contract number assigned by the Issuer during the card creation (&#x60;POST /cards&#x60;)    |  | 



## Enum: CardContractIdentifierTypeEnum


* `CBS_NUMBER` (value: `"CBS_NUMBER"`)

* `CARD_CONTRACT_NUMBER` (value: `"CARD_CONTRACT_NUMBER"`)




