# MastercardProcessingCoreApi.TransactionContractDebit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Transaction amount to be deducted from the contract’s balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  Note: For some specific &#x60;transactionTypeCode&#x60; values (for example, &#x60;APSF&#x60; - paper statement fee) transaction amount is taken from the tariff level configured in the CMS (the &#x60;amount&#x60; value from the request is ignored, and cannot override the amount defined in the CMS for the tariff).  | 
**currency** | **String** | Transaction currency (format according to ISO 4217, alphanumeric code).  | 
**customData** | [**[TransactionCustomData]**](TransactionCustomData.md) | An array that allows passing additional information to the created transaction record. Maximum length of all &#x60;tagName&#x60; and &#x60;tagValue&#x60; amounts to 255 characters.  | [optional] 
**description** | **String** | Transaction description.  | 
**feeCode** | **String** | Fee code of the fee which should be applied for the transaction. The fee code which can be used must be configured in the MP&#39;s CMS.  | [optional] 
**postingDate** | **Date** | Transaction posting date (YYYY-MM-DD format). If not filled the sysdate will be placed in the field.  | [optional] 
**transactionTypeCode** | **String** | Transaction type code. Transaction type code which can be used must be configured in the MP&#39;s CMS.  | 
**transactionTypeExtension** | **String** | Transaction type extensions make it possible to more exactly determine the service that should be used to process a transaction. Transaction type extension is defined on transaction type configuration.  | [optional] 
**uniqueReferenceNumber** | **String** | Unique reference number for the transaction. If filled system will check the uniqueness of this value. It will not be possible to create two records with the same value. Exported as SRN (Source Reference Number).  | [optional] 


