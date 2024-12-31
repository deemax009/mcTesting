# MastercardProcessingCoreApi.AccountContractModification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountContractName** | **String** | Account contract name set by the Issuer.  | [optional] 
**cbsNumber** | **String** | Contract identifier (for an account contract or a card contract) generated on the Issuer&#39;s side and passed to the MP&#39;s CMS in the contract creation request. (&#x60;POST /accounts&#x60; or &#x60;POST /cards&#x60;).  | [optional] 
**customData** | [**[CustomDataTag]**](CustomDataTag.md) | Contract custom data allow the Issuer to pass specific contract tags during the creation request. The tags may represent Issuer-specific field names and values, not available as separate, dedicated fields. The Issuer can specify the tag name and its value.  Custom data tags are stored in fixed containers (four containers are available) in TAG&#x3D;VALUE; format (for example: CATEGORY&#x3D;A;GROUP&#x3D;G1;).  Each container has length 255 characters.  | [optional] 


