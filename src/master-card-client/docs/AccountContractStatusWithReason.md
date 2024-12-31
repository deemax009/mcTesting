# MastercardProcessingCoreApi.AccountContractStatusWithReason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Free text describing the reason for status change.  | [optional] 
**statusCode** | **String** | Account contract status. The full list will be defined by the Issuer and MP during the onboarding process as they must be configured in the CMS.  The generic solution allows the following account contract statuses: | **Possible values**  | **Description**                                                                      | |--------------------- |------------------------------------------------------------------------------------- | | 00                   | Account contract is active and ready for use                                         | | 00c                  | Account contract closure procedure was initiated and is ongoing (transition period)  |  | 


