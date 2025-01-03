# MastercardProcessingCoreApi.CardContractDetailsVerificationResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardContractId** | **Number** | Unique technical card contract identifier generated by the MP&#39;s CMS. The identifier is generated when card contract creation finishes successfully and is returned in a card contract creation response (&#x60;POST /cards&#x60;).  | [optional] 
**cardContractNumberVerificationResult** | **String** | Card contract number verification result.  | **Possible values**  | |--------------------- | | PAN_CORRECT          | | PAN_CANCELLED        |  | 
**cardExpiryDateVerificationResult** | **String** | Expiry date verification result.  | **Possible values**       | |-------------------------- | | EXPIRY_DATE_CORRECT       | | EXPIRY_DATE_NOT_CORRECT   | | EXPIRY_DATE_NOT_PROVIDED  |  | 
**cbsNumber** | **String** | Contract identifier (for an account contract or a card contract) generated on the Issuer&#39;s side and passed to the MP&#39;s CMS in the contract creation request. (&#x60;POST /accounts&#x60; or &#x60;POST /cards&#x60;).  | [optional] 
**cvc2VerificationResult** | **String** | CVC2 verification result.  | **Possible values**  | |--------------------- | | CVC2_CORRECT         | | CVC2_NOT_CORRECT     | | CVC2_NOT_PROVIDED    |  | 


