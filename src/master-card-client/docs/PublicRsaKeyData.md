# MastercardProcessingCoreApi.PublicRsaKeyData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyIndex** | **String** | Index of a public RSA key. | 
**publicRsaKey** | **String** | Public RSA key generated by the MP. ASCII/UTF-8 string of characters 0-9,A-F (ASN.1 DER Public hex unpacked to string) or PEM concatenated Base64 without BEGIN and END lines. The Issuer should use this key to encrypt sensitive data which requires secure transfer to the MP.  | 

