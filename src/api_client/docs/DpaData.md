# MastercardCheckoutSolutionsMerchantRegistrationApi.DpaData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dpaPresentationName** | **String** | The name of the Merchant that the Cardholder will see when checking out with the Digital Payment Application (DPA).  Conditional: Required for Guest Checkout Tokenization (GCT) and SQR programs.  | [optional] 
**dpaAddress** | [**Address**](Address.md) |  | [optional] 
**dpaName** | **String** | Legal name of Merchant (which may differ from dpaPresentationName). | [optional] 
**dpaLogoUri** | **String** | URI for the logo displayed to Cardholders during C2P checkout. | [optional] 
**dpaUri** | **String** | Digital Payment Application (DPA) identifier. This field may contain the DPA website URI, a mobile application identifier, or another unique identifier (UUID, URL, APK package name, etc.). | [optional] 


