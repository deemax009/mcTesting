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
 * The CheckoutToken model module.
 * @module model/CheckoutToken
 * @version 1.3.2
 */
class CheckoutToken {
    /**
     * Constructs a new <code>CheckoutToken</code>.
     * @alias module:model/CheckoutToken
     * @param paymentToken {String} Payment Token. ISO/IEC 7812 format 
     */
    constructor(paymentToken) { 
        
        CheckoutToken.initialize(this, paymentToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentToken) { 
        obj['paymentToken'] = paymentToken;
    }

    /**
     * Constructs a <code>CheckoutToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckoutToken} obj Optional instance to populate.
     * @return {module:model/CheckoutToken} The populated <code>CheckoutToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutToken();

            if (data.hasOwnProperty('paymentToken')) {
                obj['paymentToken'] = ApiClient.convertToType(data['paymentToken'], 'String');
            }
            if (data.hasOwnProperty('tokenExpirationMonth')) {
                obj['tokenExpirationMonth'] = ApiClient.convertToType(data['tokenExpirationMonth'], 'String');
            }
            if (data.hasOwnProperty('tokenExpirationYear')) {
                obj['tokenExpirationYear'] = ApiClient.convertToType(data['tokenExpirationYear'], 'String');
            }
            if (data.hasOwnProperty('paymentAccountReference')) {
                obj['paymentAccountReference'] = ApiClient.convertToType(data['paymentAccountReference'], 'String');
            }
            if (data.hasOwnProperty('cardholderFullName')) {
                obj['cardholderFullName'] = ApiClient.convertToType(data['cardholderFullName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckoutToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckoutToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckoutToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['paymentToken'] && !(typeof data['paymentToken'] === 'string' || data['paymentToken'] instanceof String)) {
            throw new Error("Expected the field `paymentToken` to be a primitive type in the JSON string but got " + data['paymentToken']);
        }
        // ensure the json data is a string
        if (data['tokenExpirationMonth'] && !(typeof data['tokenExpirationMonth'] === 'string' || data['tokenExpirationMonth'] instanceof String)) {
            throw new Error("Expected the field `tokenExpirationMonth` to be a primitive type in the JSON string but got " + data['tokenExpirationMonth']);
        }
        // ensure the json data is a string
        if (data['tokenExpirationYear'] && !(typeof data['tokenExpirationYear'] === 'string' || data['tokenExpirationYear'] instanceof String)) {
            throw new Error("Expected the field `tokenExpirationYear` to be a primitive type in the JSON string but got " + data['tokenExpirationYear']);
        }
        // ensure the json data is a string
        if (data['paymentAccountReference'] && !(typeof data['paymentAccountReference'] === 'string' || data['paymentAccountReference'] instanceof String)) {
            throw new Error("Expected the field `paymentAccountReference` to be a primitive type in the JSON string but got " + data['paymentAccountReference']);
        }
        // ensure the json data is a string
        if (data['cardholderFullName'] && !(typeof data['cardholderFullName'] === 'string' || data['cardholderFullName'] instanceof String)) {
            throw new Error("Expected the field `cardholderFullName` to be a primitive type in the JSON string but got " + data['cardholderFullName']);
        }

        return true;
    }


}

CheckoutToken.RequiredProperties = ["paymentToken"];

/**
 * Payment Token. ISO/IEC 7812 format 
 * @member {String} paymentToken
 */
CheckoutToken.prototype['paymentToken'] = undefined;

/**
 * Two-digit expiry month (MM) Conditionality- Supplied when specified for the Payment Token. 
 * @member {String} tokenExpirationMonth
 */
CheckoutToken.prototype['tokenExpirationMonth'] = undefined;

/**
 * Four-digit expiry year (YYYY) Conditionality- Supplied when specified for the Payment Token 
 * @member {String} tokenExpirationYear
 */
CheckoutToken.prototype['tokenExpirationYear'] = undefined;

/**
 * A non-financial reference assigned to each unique PAN and used to link a Payment Account represented by that PAN to affiliated Payment Tokens. 
 * @member {String} paymentAccountReference
 */
CheckoutToken.prototype['paymentAccountReference'] = undefined;

/**
 * Cardholder Full Name
 * @member {String} cardholderFullName
 */
CheckoutToken.prototype['cardholderFullName'] = undefined;






export default CheckoutToken;

