# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.VerificationData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verificationType** | [**VerificationType**](VerificationType.md) |  | 
**verificationEntity** | **String** | Entity performing the verification. | 
**verificationMethod** | **String** | Method of verification based on type of authentication. &lt;br/&gt; \&quot;01\&quot; - 3D Secure (3DS) &lt;br/&gt; \&quot;04\&quot; – A shared secret between the Card Issuer and the Cardholder such as One Time Passcode (OTP), activation code &lt;br/&gt; \&quot;07\&quot; – FIDO2 authentication &lt;br/&gt; \&quot;24\&quot; - Mastercard authentication with device binding and passive authentication &lt;br/&gt;  | 
**verificationResults** | **String** | Result of the verification. | 
**verificationTimestamp** | **String** | Date and time when the verification was conducted. UTC time in Unix epoch format | 
**additionalData** | **String** | Data related to the verification performed. | [optional] 
**verificationEvents** | **[String]** | &lt;p&gt;Event that prompted the Cardholder authentication (e.g., Payment Transaction &#x3D; \&quot;01\&quot;).&lt;/p&gt; &lt;p&gt;For verificationType CARDHOLDER, valid values are:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;\&quot;01\&quot; - Payment Transaction&lt;/li&gt;   &lt;li&gt;\&quot;02\&quot; - Add Card/Card Enrollment&lt;/li&gt; | [optional] 


