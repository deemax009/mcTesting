# MastercardProcessingCoreApi.AuthenticationMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationParameters** | [**[AuthenticationParameter]**](AuthenticationParameter.md) | The list of &#x60;AuthenticationParameter&#x60;.  The list can contain only those parameters which are required. The others will be created automatically with the default value (if it is set) or without value.  To update the parameter value for the authentication method which has already been set to contract it is required to put only those pairs of parameters and values which are to be updated.  To reset the authentication method parameter value it is required to put only the parameter name to the &#x60;authenticationParameter&#x60; list.  | [optional] 
**authenticationTypeCode** | **String** | Contract authentication type code.  | 
**authenticationTypeName** | **String** | Contract authentication type name.  | [optional] 


