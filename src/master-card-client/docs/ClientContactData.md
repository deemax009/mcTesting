# MastercardProcessingCoreApi.ClientContactData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Client&#39;s email address. The MP&#39;s CMS will verify if the value contains the \&quot;@\&quot; character and will return an error if it does not. Requests without the \&quot;@\&quot; character in the &#x60;email&#x60; field will be rejected.  | [optional] 
**fax** | **String** | Fax number.  Note: The pattern for this field is configured in the MP&#39;s API during the onboarding process.  | [optional] 
**faxHome** | **String** | Home fax number.  Note: The pattern for this field is configured in the MP&#39;s API during the onboarding process.  | [optional] 
**phoneNumberHome** | **String** | Home phone number.  Note: The pattern for this field is configured in the MP&#39;s API during the onboarding process.  | [optional] 
**phoneNumberMobile** | **String** | Mobile phone number (i.e. used for SMS notifications).  Note: The pattern for this field is configured in the MP&#39;s API during the onboarding process.  | [optional] 
**phoneNumberWork** | **String** | Work phone number.  Note: The pattern for this field is configured in the MP&#39;s API during the onboarding process.  | [optional] 


