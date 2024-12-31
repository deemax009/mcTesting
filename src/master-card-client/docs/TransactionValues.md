# MastercardProcessingCoreApi.TransactionValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interchangeFee** | **Number** | Amount of interchange fee.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**interchangeFeeCurrency** | **String** | Interchange fee currency (format according to ISO 4217, alphanumeric code).  | [optional] 
**interchangeFeeCurrencyNumericCode** | **String** | Interchange fee currency (format according to ISO 4217, numeric code).  | [optional] 
**reconciliationAmount** | **Number** | Transaction amount in the currency specified in the &#x60;reconciliationCurrency&#x60; field.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**reconciliationCurrency** | **String** | Currency used by the source bank to present transaction data to the payment scheme (format according to ISO 4217, alphanumeric code).  | [optional] 
**reconciliationCurrencyNumericCode** | **String** | Currency code defining currency of the amount in the field &#x60;reconciliationAmount&#x60; (format according to ISO 4217, numeric code).  | [optional] 
**settlementAmount** | **Number** | Transaction settlement amount if present or otherwise transaction cardholder billing amount.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**settlementCurrency** | **String** | Currency code defining currency of the amount in the field &#x60;settlementAmount&#x60; (format according to ISO 4217, alphanumeric code).  | [optional] 
**settlementCurrencyNumericCode** | **String** | Currency code defining currency of the amount in the field &#x60;settlementAmount&#x60; (format according to ISO 4217, numeric code).  | [optional] 
**sourceAmount** | **Number** | Amount of transaction in original currency.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**sourceCurrency** | **String** | Currency code defining currency of the amount in the field &#x60;sourceAmount&#x60; (format according to ISO 4217, alphanumeric code).  | [optional] 
**sourceCurrencyNumericCode** | **String** | Currency code defining currency of the amount in the field &#x60;sourceAmount&#x60; (format according to ISO 4217, numeric code).  | [optional] 
**transactionFeeAmount** | **Number** | Amount of any additional fee transaction related in account currency. Fees applied by the MP.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**transactionFeeCurrency** | **String** | Currency code defining currency of the fee in the field &#x60;transactionFeeAmount&#x60; (format according to ISO 4217, alphanumeric code).  | [optional] 
**transactionFeeCurrencyNumericCode** | **String** | Currency code defining currency of the fee in the field &#x60;transactionFeeAmount&#x60; (format according to ISO 4217, numeric code).  | [optional] 


