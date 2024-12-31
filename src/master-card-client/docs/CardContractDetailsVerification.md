# MastercardProcessingCoreApi.CardContractDetailsVerification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardContractNumber** | **String** | A card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  | 
**cardExpiryDate** | **String** | Card expiry date (YYMM format).  | [optional] 
**cardVerificationCode** | **String** | Card Verification Code 2 (CVC2), known also as a Card Security Code (CSC) or a Card Verification Value 2 (CVV2).  | [optional] 


