# MastercardProcessingCoreApi.PinVerification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardExpiryDate** | **String** | Card expiry date (YYMM format).  | 
**cardSequenceNumber** | **String** | The sequence number of a &#x60;Plastic&#x60;, created under the given card contract. Every new &#x60;Plastic&#x60; created has the next number in a sequence following previous card plastics.  | [optional] 
**pinBlock** | **String** | PIN block in encrypted form. The Issuer is allowed to use only the following formats of the PIN block:   * ISO-0 format   * ISO-1 format  If the PIN block is encrypted with asymmetric encryption using a public RSA key then:   * Key-Index field must be provided   * MP must configure in API the ISO format used by the Issuer.  If the PIN block is encrypted with symmetric encryption using ZPK (Zone Pin Key) then:   * Key-Index field shouldn&#39;t be provided   * only ISO-0 format is allowed.  | 


