# MastercardProcessingCoreApi.ChargeFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount to charge a fee. If the field is not passed in the request, the amount is taken from the tariff level.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**currency** | **String** | Transaction currency (format according to ISO 4217, alphanumeric code).  | [optional] 
**feeTypeId** | **String** | Identifier of the fee type in the MP&#39;s CMS system.  | 
**postingDate** | **Date** | Posting date (YYYY-MM-DD format). If empty, current banking date will be used. If future date, fee record will stay in &#x60;Waiting&#x60; status and will be posted only when banking date reaches defined &#x60;postingDate&#x60;. Past date not recommended.  | [optional] 
**uniqueReferenceNumber** | **String** | Unique reference number for fee transaction record. If filled system will check the uniqueness of this value. It will not be possible to create two records with the same value. Exported as SRN (Source Reference Number).  | 


