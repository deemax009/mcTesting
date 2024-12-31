# MastercardProcessingCoreApi.ServiceLimitTariff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | Tariff&#39;s currency (format according to ISO 4217, alphanumeric code).  | [optional] 
**endDate** | **Date** | Tariff&#39;s end date (YYYY-MM-DD format).  | [optional] 
**floorLimit** | **Number** | The maximum amount of a transaction that can be made without authorization.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**minTransactionAmount** | **Number** | Minimum allowed transaction amount or account balance or minimum threshold value of an Event related to balance type value changes. A zero value in the field means that there are no limitations.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**maxTransactionAmount** | **Number** | Maximum allowed transaction amount or account balance, or maximum threshold value of an Event related to balance type value changes. A zero value in the field means that there are no limitations.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator.  | [optional] 
**startDate** | **Date** | Tariff&#39;s effective date (YYYY-MM-DD format).  If the value is not transmitted in the request the local date is used.  | [optional] 
**tariffCode** | **String** | Tariff code from the CMS system. Uniquely identify service limit tariff which must be defined in the CMS during the onboarding process.  | 


