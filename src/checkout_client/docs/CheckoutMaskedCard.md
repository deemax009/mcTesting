# CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutMaskedCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**srcDigitalCardId** | **String** | Unique Identifier of the Card. Reference representing the PAN or Payment Token that enables a non-SRCPI entity to identify the underlying PAN. A single PAN can have one or more SRC Digital Card Reference Identifiers. Digital Card information can be accompanied with SRC Digital Card Reference Identifier. It is associated with the SRC Profile to which the Digital Card belongs and is unique within an SRC System.  | 
**panBin** | **String** | First significant digits of the PAN included in an unmasked form. | 
**panLastFour** | **String** | Attribute of the Payment Card that represents the Last four digits of the PAN included in an unmasked form. | 
**digitalCardData** | [**CheckoutDigitalCardData**](CheckoutDigitalCardData.md) |  | 
**panExpirationMonth** | **String** | Expiration month of the Payment Card expressed as a two-digit calendar month used for presentation purposes. | [optional] 
**panExpirationYear** | **String** | Expiration year of the Payment Card expressed as four-digit calendar year, used for presentation purposes. | [optional] 
**maskedCardholderFullName** | **String** | Masked cardholder Full Name. | [optional] 
**maskedCardholderFirstName** | **String** | Masked cardholder First Name. | [optional] 
**maskedCardholderLastName** | **String** | Masked cardholder Last Name. | [optional] 
**paymentCardDescriptor** | **String** | Conveys the card brand, and will be a free-form string, to be defined within an SRC Programme. | [optional] 
**paymentCardType** | **String** | Conveys the card type. For example:CREDIT, DEBIT, PREPAID, COMBO, FLEX. Note:COMBO and FLEX for applicable regions only. | [optional] 
**digitalCardFeatures** | [**[DigitalCardFeature]**](DigitalCardFeature.md) | Card benefits associated with a Digital Card to be presented to the Consumer at the time of checkout. | [optional] 
**maskedBillingAddress** | [**MaskedAddress**](MaskedAddress.md) |  | [optional] 


