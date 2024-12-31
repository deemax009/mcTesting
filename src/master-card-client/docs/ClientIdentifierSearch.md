# MastercardProcessingCoreApi.ClientIdentifierSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientIdentifier** | **String** | This field must contain an identifier value according to the type specified by &#x60;clientIdentifierType&#x60; field (&#x60;clientNumber&#x60;, &#x60;identificationDocumentNumber&#x60;, &#x60;socialNumber&#x60; or &#x60;taxpayerIdentifier&#x60;).  | 
**clientIdentifierType** | **String** | Type of client identifier, corresponding to the value sent in clientIdentifier field.  | **Possible values**             | **Description**                                                  | |-------------------------------- |----------------------------------------------------------------- | | CLIENT_NUMBER                   | Search will be executed based on Client Number                   | | IDENTIFICATION_DOCUMENT_NUMBER  | Search will be executed based on registration Number             | | SOCIAL_NUMBER                   | Search will be executed based on Social Number                   | | TAXPAYER_IDENTIFIER            | Search will be executed based on Taxpayer Identification Number  |  | 



## Enum: ClientIdentifierTypeEnum


* `CLIENT_NUMBER` (value: `"CLIENT_NUMBER"`)

* `IDENTIFICATION_DOCUMENT_NUMBER` (value: `"IDENTIFICATION_DOCUMENT_NUMBER"`)

* `SOCIAL_NUMBER` (value: `"SOCIAL_NUMBER"`)

* `TAXPAYER_IDENTIFIER` (value: `"TAXPAYER_IDENTIFIER"`)




