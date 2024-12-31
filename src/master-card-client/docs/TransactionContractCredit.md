# MastercardProcessingCoreApi.TransactionContractCredit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Transaction amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | 
**currency** | **String** | Transaction currency (format according to ISO 4217, alphanumeric code).  | 
**customData** | [**[TransactionCustomData]**](TransactionCustomData.md) | The Field allows passing additional information to the created transaction record. Should be sent as: TAG_01&#x3D;TAG_01_VALUE;TAG_02&#x3D;TAG_02_VALUE;  Max length of tag name: 32, max length of tag value: 32. Total max length: 255 The tag name and the tag value should not contain characters [&#39;&#x3D;&#39;, &#39;;&#39;, &#39; &#39;].  | [optional] 
**description** | **String** | Transaction description. In the CMS system stored and exported as merchant name.  | 
**feeCode** | **String** | Fee code of the fee which should be applied for transaction.  *Disclaimer: Fee code which can be used must be configured in the MP&#39;s CMS.*  | [optional] 
**postingDate** | **Date** | Transaction posting date (YYYY-MM-DD format). If not filled the sysdate will be placed in the field.  | [optional] 
**transactionTypeCode** | **String** | Transaction type code which can be used must be configured in the MP&#39;s CMS.  | 
**transactionTypeExtension** | **String** | Transaction type extensions make it possible to more exactly determine the service that should be used to process a transaction. Transaction type extension is defined on transaction type configuration.  | [optional] 
**uniqueReferenceNumber** | **String** | Unique reference number for the transaction. If filled system will check the uniqueness of this value. It will not be possible to create two records with the same value. Exported as SRN (Source Reference Number).  | [optional] 


