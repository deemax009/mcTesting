# MastercardProcessingCoreApi.TransactionMerchantInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcc** | **String** | Merchant category code according to Visa rules (Merchant Category Code, MCC) or Mastercard rules (Standard Industry Code, SIC).  MCC consists of four digits and it&#39;s listed in ISO 18245 for retail financial services. Merchant Category Code (MCC) is used to classify merchants in types (i.e. one MCC is for hotels, one for automated fuel dispensers) or more specifically by merchant name (i.e. car rentals or airlines).  | [optional] 
**mccDescription** | **String** | Merchant category description according to Visa rules (Merchant Category Code, MCC) or MasterCard rules (Standard Industry Code, SIC).  | [optional] 
**merchantCountry** | **String** | Three-letter country code (format according to ISO-3166, alpha-3 specification).  | [optional] 
**merchantLocation** | **String** | Terminal city, in other case value is null.  | [optional] 
**merchantName** | **String** | Name of the retail outlet where the transaction was performed.  | [optional] 


