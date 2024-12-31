# MastercardProcessingCoreApi.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount parameter for the event. Only one of 2 options: (&#x60;amount&#x60; and &#x60;currency&#x60;) or (&#x60;parameterString&#x60;) may be input in &#x60;POST /contracts/{contract_id}/events&#x60;.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator.  | [optional] 
**currency** | **String** | The currency parameter for the event (format according to ISO 4217, alphanumeric code). Only one of 2 options: (&#x60;amount&#x60; and &#x60;currency&#x60;) or (&#x60;parameterString&#x60;) may be input in &#x60;POST /contracts/{contract_id}/events&#x60;.  | [optional] 
**endDate** | **Date** | Event closing date (YYYY-MM-DD format).  | [optional] 
**eventCode** | **String** | Event code which will be executed in the MP&#39;s CMS. A list of possible codes will be defined by the MP during the project based on Issuer requirements.  | 
**parameterString** | **String** | The parameter string for the event. Only one of 2 options: (&#x60;amount&#x60; and &#x60;currency&#x60;) or (&#x60;parameterString&#x60;) may be input in &#x60;POST /contracts/{contract_id}/events&#x60;.  | [optional] 
**reason** | **String** | Reason of the Event.  | [optional] 
**startDate** | **Date** | Event opening date (YYYY-MM-DD format).  | [optional] 


