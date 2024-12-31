# MastercardProcessingCoreApi.PinCreation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardExpiryDate** | **String** | Card expiry date (YYMM format).  | 
**cardSequenceNumber** | **String** | The sequence number of a &#x60;Plastic&#x60;, created under the given card contract. Every new &#x60;Plastic&#x60; created has the next number in a sequence following previous card plastics.  | [optional] 
**newPinBlock** | **String** | PIN block in encrypted form. The Issuer is allowed to use only the following formats of the PIN block:   * ISO-0 format   * ISO-1 format  If the PIN block is encrypted with asymmetric encryption using a public RSA key, then:   * &#x60;Key-Index&#x60; field must be provided   * The MP must configure in an API configuration the ISO format used by the Issuer.  If the PIN block is encrypted with symmetric encryption using a ZPK (Zone Pin Key), then:   * The &#x60;Key-Index&#x60; field should not be provided.   * Only the ISO-0 format is allowed.  | 


