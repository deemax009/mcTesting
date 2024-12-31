# MastercardProcessingCoreApi.Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **String** | First address line.  | [optional] 
**addressLine2** | **String** | Second address line.  | [optional] 
**addressLine3** | **String** | Third address line.  | [optional] 
**addressLine4** | **String** | Fourth address line.  | [optional] 
**city** | **String** | City.  | [optional] 
**country** | **String** | Three-letter country code (format according to ISO-3166, alpha-3 specification).  | [optional] 
**email** | **String** | Client&#39;s email address. The MP&#39;s CMS will verify if the value contains the \&quot;@\&quot; character and will return an error if it does not. Requests without the \&quot;@\&quot; character in the &#x60;email&#x60; field will be rejected.  | [optional] 
**firstName** | **String** | First name.  | [optional] 
**lastName** | **String** | Last name.  | [optional] 
**postalCode** | **String** | Postal code. The MP&#39;s CMS will not validate the correctness of the postal code.  | [optional] 
**state** | **String** | State. The MP&#39;s CMS will not validate the correctness of the state name.  | [optional] 
**addressType** | **String** | Address type. Additional addresses allow to store any address related to the client or the contract (account contract or card contract).  | **Default possible values**  | **Description**              | |----------------------------- |----------------------------- | | PIN                          | PIN mailer delivery address  | | STMT                         | Statement delivery address   | *Disclaimer: Possible values which can be sent must be defined by MP and Issuer during the onboarding process as they are configured in the CMS system.*  | 
**enabled** | **Boolean** | Flag informing about the status of the address. The address can be enabled or disabled.  | 

