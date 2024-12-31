# MastercardProcessingCoreApi.AccountContractStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeDate** | **Date** | The date and time of setting the status (YYYY-MM-DDThh:mm:ssZ format).  | [optional] 
**externalStatusCode** | **String** | Contract status code agreed with the Issuer according to the external system requirements. The MP&#39;s CMS configuration allows many external status codes to be assigned to the same &#x60;statusCode&#x60;.  | [optional] 
**externalStatusName** | **String** | External status name.  | [optional] 
**officerId** | **Number** | The system user ID assigned the status value.  | [optional] 
**officerName** | **String** | The system user name who assigned the status value.  | [optional] 
**previousStatusCode** | **String** | Previous status code. The full list will be defined by the Issuer and MP during the onboarding process as they must be configured in the CMS.  The generic solution allows the following account contract statuses: | **Possible values**  | **Description**                                                                      | |--------------------- |------------------------------------------------------------------------------------- | | 00                   | Account contract is active and ready for use                                         | | 00c                  | Account contract closure procedure was initiated and is ongoing (transition period)  | | 14                   | Final stats of account contract&#39;s lifecycle. Set automatically by the CMS            |  *Disclaimer: please contact the MP representative should other codes be necessary.*  | [optional] 
**previousStatusName** | **String** | Previous status name. | [optional] 
**statusChangeReason** | **String** | The reason comment for status change.  | [optional] 
**statusCode** | **String** | Current status code. The full list will be defined by the Issuer and MP during the onboarding process as they must be configured in the CMS.  The generic solution allows the following account contract statuses: | **Possible values**  | **Description**                                                                      | |--------------------- |------------------------------------------------------------------------------------- | | 00                   | Account contract is active and ready for use                                         | | 00c                  | Account contract closure procedure was initiated and is ongoing (transition period)  | | 14                   | Final stats of account contract&#39;s lifecycle. Set automatically by the CMS            |  *Disclaimer: please contact the MP representative should other codes be necessary.*  | [optional] 
**statusName** | **String** | Account contract status name. Name assigned in the CMS system to the &#x60;statusCode&#x60;.  | [optional] 


