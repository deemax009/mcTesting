/**
 * Mastercard Processing Core API
 * OpenAPI Specification for MP (Mastercard Processing) **Core**.  This documentation describes what functionalities are exposed by the MP's CMS (Card Management System) and are available to be used by the Issuer. The Issuer is the primary actor who executes the operations. Whenever the Issuer wishes to onboard its customers to the card program, they may use API to:  * create and manage **client**  * create and manage **contracts**, there are two types of contracts in the MP's CMS:    * **account contract**    * **card contract**  Later, during the card lifecycle, the Issuer can also manage other objects related to the client and the contract (account or card):  * manage **card plastic**  * create, manage and retrieve **additional addresses** (for the client and the contract)  * manage and retrieve **classifiers** (for the client and the contract)  * manage and retrieve **custom data** (for the client and the contract)  * manage and retrieve **parameters** (for the contract)  * set or retrieve **service limit tariff** (for the contract)  * post or retrieve **transactions** (for the contract)  * manage and retrieve **usage limits** (for the contract)  *** API uses RESTful protocol via HTTP to execute POST, PUT, GET and PATCH operations sent to given endpoints, e.g. `/clients`.  API uses JSON Web Encryption compact serialization for payload encryption for all API operations. *** External documentation:   * [ISO 4217 - Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)   * [ISO 3166 - Country Codes](https://www.iso.org/iso-3166-country-codes.html)   * [Internet Engineering Task Force (IETF) BCP 47 standard](https://tools.ietf.org/html/bcp47#appendix-A)   * [JSON Web Encryption](https://developer.mastercard.com/platform/documentation/security-and-authentication/securing-sensitive-data-using-payload-encryption/#jwe-encryption)   * [Internet Engineering Task Force (IETF) RFC7232](https://datatracker.ietf.org/doc/html/rfc7232)   * [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) *** 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CardContractDetailsVerification model module.
 * @module model/CardContractDetailsVerification
 * @version 1.0.0
 */
class CardContractDetailsVerification {
    /**
     * Constructs a new <code>CardContractDetailsVerification</code>.
     * @alias module:model/CardContractDetailsVerification
     * @param cardContractNumber {String} A card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit. 
     */
    constructor(cardContractNumber) { 
        
        CardContractDetailsVerification.initialize(this, cardContractNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cardContractNumber) { 
        obj['cardContractNumber'] = cardContractNumber;
    }

    /**
     * Constructs a <code>CardContractDetailsVerification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardContractDetailsVerification} obj Optional instance to populate.
     * @return {module:model/CardContractDetailsVerification} The populated <code>CardContractDetailsVerification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardContractDetailsVerification();

            if (data.hasOwnProperty('cardContractNumber')) {
                obj['cardContractNumber'] = ApiClient.convertToType(data['cardContractNumber'], 'String');
            }
            if (data.hasOwnProperty('cardExpiryDate')) {
                obj['cardExpiryDate'] = ApiClient.convertToType(data['cardExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('cardVerificationCode')) {
                obj['cardVerificationCode'] = ApiClient.convertToType(data['cardVerificationCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardContractDetailsVerification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardContractDetailsVerification</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CardContractDetailsVerification.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cardContractNumber'] && !(typeof data['cardContractNumber'] === 'string' || data['cardContractNumber'] instanceof String)) {
            throw new Error("Expected the field `cardContractNumber` to be a primitive type in the JSON string but got " + data['cardContractNumber']);
        }
        // ensure the json data is a string
        if (data['cardExpiryDate'] && !(typeof data['cardExpiryDate'] === 'string' || data['cardExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `cardExpiryDate` to be a primitive type in the JSON string but got " + data['cardExpiryDate']);
        }
        // ensure the json data is a string
        if (data['cardVerificationCode'] && !(typeof data['cardVerificationCode'] === 'string' || data['cardVerificationCode'] instanceof String)) {
            throw new Error("Expected the field `cardVerificationCode` to be a primitive type in the JSON string but got " + data['cardVerificationCode']);
        }

        return true;
    }


}

CardContractDetailsVerification.RequiredProperties = ["cardContractNumber"];

/**
 * A card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit. 
 * @member {String} cardContractNumber
 */
CardContractDetailsVerification.prototype['cardContractNumber'] = undefined;

/**
 * Card expiry date (YYMM format). 
 * @member {String} cardExpiryDate
 */
CardContractDetailsVerification.prototype['cardExpiryDate'] = undefined;

/**
 * Card Verification Code 2 (CVC2), known also as a Card Security Code (CSC) or a Card Verification Value 2 (CVV2). 
 * @member {String} cardVerificationCode
 */
CardContractDetailsVerification.prototype['cardVerificationCode'] = undefined;






export default CardContractDetailsVerification;

