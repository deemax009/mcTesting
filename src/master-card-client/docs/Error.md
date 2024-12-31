# MastercardProcessingCoreApi.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **String** | The application/component that generated this error. | [optional] 
**reasonCode** | **String** | Reason code is a unique constant identifying the error case encountered during the request processing.  | [optional] 
**description** | **String** | User-friendly short description of the reasonCode.  | [optional] 
**details** | **String** | Optional detailed description provides information about the data received and calculated during the request processing, to help the user with diagnosing errors.  | [optional] 
**recoverable** | **Boolean** | Recoverable flag indicates whether this error will always be returned for this request or if retrying could change the outcome.  | [optional] 


