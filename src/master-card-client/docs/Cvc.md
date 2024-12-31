# MastercardProcessingCoreApi.Cvc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardVerificationCode** | **String** | Card Verification Code 2 (CVC2), known also as a Card Security Code (CSC) or a Card Verification Value 2 (CVV2).  Field is returned if &#x60;Customer-Public-Rsa-Key&#x60; header is empty.  | [optional] 
**encryptedCardVerificationCode** | **String** | Card verification code encrypted with the &#x60;Customer-Public-Rsa-Key&#x60;.  Field is returned if &#x60;Customer-Public-Rsa-Key&#x60; header is not empty.  | [optional] 


