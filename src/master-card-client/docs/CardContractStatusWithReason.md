# MastercardProcessingCoreApi.CardContractStatusWithReason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Free text describing the reason for status change.  | [optional] 
**statusCode** | **String** | Card status code. The codes are configured in the MP&#39;s CMS for each Issuer.  | **Possible values**  | **Description**                                                                   | |--------------------- |---------------------------------------------------------------------------------- | | 00                   | Card is active and ready for use                                                  | | 04                   | Used for cards blocked due to Issuer&#39;s reasons (permanent status)                 | | 05                   | Card does not honour (temporary status)                                           | | 41                   | Card was lost (permanent status)                                                  | | 43                   | Card was stolen (permanent status)                                                | | 57                   | Card was deactivated on Issuer&#39;s request (permanent status)                       | | 59                   | Suspected fraud (temporary status). Usually set on Issuer&#39;s request               |   *Disclaimer: Please contact the MP representative in case other status codes are necessary.*  | 


