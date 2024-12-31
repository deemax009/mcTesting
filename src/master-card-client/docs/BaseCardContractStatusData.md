# MastercardProcessingCoreApi.BaseCardContractStatusData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalStatusCode** | **String** | Contract status code agreed with the Issuer according to the external system requirements. The MP&#39;s CMS configuration allows many external status codes to be assigned to the same &#x60;statusCode&#x60;.  | [optional] 
**externalStatusName** | **String** | External status name.  | [optional] 
**statusCode** | **String** | Card contract status code. The codes are configured in the MP&#39;s CMS for each Issuer.  Generic solution allows the following codes: | **Possible values**  | **Description**                                                                   | |--------------------- |---------------------------------------------------------------------------------- | | 00                   | Card is active and ready for use                                                  | | 04                   | Used for cards blocked due to Issuer&#39;s reasons (permanent status)                 | | 05                   | Card does not honour (temporary status)                                           | | 14                   | Final state of card&#39;s lifecycle (permanent status). Set automatically by the CMS  | | 41                   | Card was lost (permanent status)                                                  | | 43                   | Card was stolen (permanent status)                                                | | 57                   | Card was deactivated on Issuer&#39;s request (permanent status)                       | | 59                   | Suspected fraud (temporary status). Usually set on Issuer&#39;s request               |  *Disclaimer: please contact the MP representative should other codes be necessary.*  | [optional] 
**statusName** | **String** | Card contract status name. Name assigned in the CMS system to the &#x60;statusCode&#x60;.  | [optional] 

