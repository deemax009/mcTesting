# MastercardProcessingCoreApi.EncryptedPin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryptedCardContractNumber** | **String** | Card contract number - PAN encrypted with &#x60;Customer-Public-Rsa-Key&#x60;.  | 
**encryptedPinBlock** | **String** | PIN block encrypted with ZPK (Zone PIN Key) returned in &#x60;encryptedZpk&#x60;.  | 
**encryptedZpk** | **String** | Hex-encoded Zone PIN Key encrypted with &#x60;Customer-Public-Rsa-Key&#x60;.  Before encrypting with &#x60;Customer-Public-Rsa-Key&#x60;, ZPK is wrapped under Standard Key Block type.  The standard key block format is a TLV (Type-Length-Value) encoding scheme with length as represented in Hexadecimal.  | 


