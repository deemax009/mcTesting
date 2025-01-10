# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.AccountReferenceData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryptedCard** | [**PlainCard**](PlainCard.md) |  | [optional] 
**cardSource** | **String** | Holds the Origin of Card Enrollment. Internally following mappings are applied: CARDHOLDER -&gt; CARD_ADDED_MANUALLY MERCHANT -&gt; CARD_ON_FILE | [optional] 



## Enum: CardSourceEnum


* `CARDHOLDER` (value: `"CARDHOLDER"`)

* `MERCHANT` (value: `"MERCHANT"`)




