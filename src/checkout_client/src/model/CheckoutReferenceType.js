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
* Enum class CheckoutReferenceType.
* @enum {}
* @readonly
*/
export default class CheckoutReferenceType {
    
        /**
         * value: "MERCHANT_CARD_ID"
         * @const
         */
        "MERCHANT_CARD_ID" = "MERCHANT_CARD_ID";

    
        /**
         * value: "MERCHANT_TRANSACTION_ID"
         * @const
         */
        "MERCHANT_TRANSACTION_ID" = "MERCHANT_TRANSACTION_ID";

    
        /**
         * value: "ENCRYPTED_CARD"
         * @const
         */
        "ENCRYPTED_CARD" = "ENCRYPTED_CARD";

    

    /**
    * Returns a <code>CheckoutReferenceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CheckoutReferenceType} The enum <code>CheckoutReferenceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

