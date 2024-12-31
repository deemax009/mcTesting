# MastercardProcessingCoreApi.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Fee amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**currency** | **String** | Currency of the fee (format according to ISO 4217, alphanumeric code).  | [optional] 
**currencyNumericCode** | **String** | Currency of the fee (format according to ISO 4217, numeric code).  | [optional] 
**feeCode** | **String** | Fee code of the fee which should be applied for the transaction. The fee code which can be used must be configured in the MP&#39;s CMS.  | 
**feeId** | **Number** | Fee record id from the CMS system.  | 
**feeName** | **String** | Name of the fee from the CMS system.  | [optional] 
**transactionId** | **Number** | Transaction record id to which the given fee was generated.  | 


