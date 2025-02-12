/**
 * Checkout, Save Card On File, Delete Saved Card On File And Confirmations API
 *  Click to Pay checkout used by Merchants to receive payload data from the Click to Pay System and send the results of transaction authorisation back to the Click to Pay System. Endpoints are available to retrieve payload data and send the outcome of a payment or checkout. 
 *
 * The version of the OpenAPI document: 1.3.2
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PlainCard model module.
 * @module model/PlainCard
 * @version 1.3.2
 */
class PlainCard {
    /**
     * Constructs a new <code>PlainCard</code>.
     * Card data associated with the PAN used for the purchase.
     * @alias module:model/PlainCard
     * @param primaryAccountNumber {String} Primary Account Number. A variable length, ISO/IEC 7812-compliant account number that is generated within account ranges associated with a BIN by a Card Issuer.
     * @param panExpirationMonth {String} Expiration month of the Card, expressed as a two-digit calendar month.
     * @param panExpirationYear {String} Expiration year of the Card, expressed as a four-digit calendar year.
     */
    constructor(primaryAccountNumber, panExpirationMonth, panExpirationYear) { 
        
        PlainCard.initialize(this, primaryAccountNumber, panExpirationMonth, panExpirationYear);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, primaryAccountNumber, panExpirationMonth, panExpirationYear) { 
        obj['primaryAccountNumber'] = primaryAccountNumber;
        obj['panExpirationMonth'] = panExpirationMonth;
        obj['panExpirationYear'] = panExpirationYear;
    }

    /**
     * Constructs a <code>PlainCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlainCard} obj Optional instance to populate.
     * @return {module:model/PlainCard} The populated <code>PlainCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlainCard();

            if (data.hasOwnProperty('primaryAccountNumber')) {
                obj['primaryAccountNumber'] = ApiClient.convertToType(data['primaryAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('panExpirationMonth')) {
                obj['panExpirationMonth'] = ApiClient.convertToType(data['panExpirationMonth'], 'String');
            }
            if (data.hasOwnProperty('panExpirationYear')) {
                obj['panExpirationYear'] = ApiClient.convertToType(data['panExpirationYear'], 'String');
            }
            if (data.hasOwnProperty('cardSecurityCode')) {
                obj['cardSecurityCode'] = ApiClient.convertToType(data['cardSecurityCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PlainCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PlainCard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PlainCard.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['primaryAccountNumber'] && !(typeof data['primaryAccountNumber'] === 'string' || data['primaryAccountNumber'] instanceof String)) {
            throw new Error("Expected the field `primaryAccountNumber` to be a primitive type in the JSON string but got " + data['primaryAccountNumber']);
        }
        // ensure the json data is a string
        if (data['panExpirationMonth'] && !(typeof data['panExpirationMonth'] === 'string' || data['panExpirationMonth'] instanceof String)) {
            throw new Error("Expected the field `panExpirationMonth` to be a primitive type in the JSON string but got " + data['panExpirationMonth']);
        }
        // ensure the json data is a string
        if (data['panExpirationYear'] && !(typeof data['panExpirationYear'] === 'string' || data['panExpirationYear'] instanceof String)) {
            throw new Error("Expected the field `panExpirationYear` to be a primitive type in the JSON string but got " + data['panExpirationYear']);
        }
        // ensure the json data is a string
        if (data['cardSecurityCode'] && !(typeof data['cardSecurityCode'] === 'string' || data['cardSecurityCode'] instanceof String)) {
            throw new Error("Expected the field `cardSecurityCode` to be a primitive type in the JSON string but got " + data['cardSecurityCode']);
        }

        return true;
    }


}

PlainCard.RequiredProperties = ["primaryAccountNumber", "panExpirationMonth", "panExpirationYear"];

/**
 * Primary Account Number. A variable length, ISO/IEC 7812-compliant account number that is generated within account ranges associated with a BIN by a Card Issuer.
 * @member {String} primaryAccountNumber
 */
PlainCard.prototype['primaryAccountNumber'] = undefined;

/**
 * Expiration month of the Card, expressed as a two-digit calendar month.
 * @member {String} panExpirationMonth
 */
PlainCard.prototype['panExpirationMonth'] = undefined;

/**
 * Expiration year of the Card, expressed as a four-digit calendar year.
 * @member {String} panExpirationYear
 */
PlainCard.prototype['panExpirationYear'] = undefined;

/**
 * Card security code (i.e. Card CVC).
 * @member {String} cardSecurityCode
 */
PlainCard.prototype['cardSecurityCode'] = undefined;






export default PlainCard;

