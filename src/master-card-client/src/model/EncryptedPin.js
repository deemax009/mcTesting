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
 * The EncryptedPin model module.
 * @module model/EncryptedPin
 * @version 1.0.0
 */
class EncryptedPin {
    /**
     * Constructs a new <code>EncryptedPin</code>.
     * @alias module:model/EncryptedPin
     * @param encryptedCardContractNumber {String} Card contract number - PAN encrypted with `Customer-Public-Rsa-Key`. 
     * @param encryptedPinBlock {String} PIN block encrypted with ZPK (Zone PIN Key) returned in `encryptedZpk`. 
     * @param encryptedZpk {String} Hex-encoded Zone PIN Key encrypted with `Customer-Public-Rsa-Key`.  Before encrypting with `Customer-Public-Rsa-Key`, ZPK is wrapped under Standard Key Block type.  The standard key block format is a TLV (Type-Length-Value) encoding scheme with length as represented in Hexadecimal. 
     */
    constructor(encryptedCardContractNumber, encryptedPinBlock, encryptedZpk) { 
        
        EncryptedPin.initialize(this, encryptedCardContractNumber, encryptedPinBlock, encryptedZpk);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, encryptedCardContractNumber, encryptedPinBlock, encryptedZpk) { 
        obj['encryptedCardContractNumber'] = encryptedCardContractNumber;
        obj['encryptedPinBlock'] = encryptedPinBlock;
        obj['encryptedZpk'] = encryptedZpk;
    }

    /**
     * Constructs a <code>EncryptedPin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptedPin} obj Optional instance to populate.
     * @return {module:model/EncryptedPin} The populated <code>EncryptedPin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptedPin();

            if (data.hasOwnProperty('encryptedCardContractNumber')) {
                obj['encryptedCardContractNumber'] = ApiClient.convertToType(data['encryptedCardContractNumber'], 'String');
            }
            if (data.hasOwnProperty('encryptedPinBlock')) {
                obj['encryptedPinBlock'] = ApiClient.convertToType(data['encryptedPinBlock'], 'String');
            }
            if (data.hasOwnProperty('encryptedZpk')) {
                obj['encryptedZpk'] = ApiClient.convertToType(data['encryptedZpk'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptedPin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptedPin</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EncryptedPin.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['encryptedCardContractNumber'] && !(typeof data['encryptedCardContractNumber'] === 'string' || data['encryptedCardContractNumber'] instanceof String)) {
            throw new Error("Expected the field `encryptedCardContractNumber` to be a primitive type in the JSON string but got " + data['encryptedCardContractNumber']);
        }
        // ensure the json data is a string
        if (data['encryptedPinBlock'] && !(typeof data['encryptedPinBlock'] === 'string' || data['encryptedPinBlock'] instanceof String)) {
            throw new Error("Expected the field `encryptedPinBlock` to be a primitive type in the JSON string but got " + data['encryptedPinBlock']);
        }
        // ensure the json data is a string
        if (data['encryptedZpk'] && !(typeof data['encryptedZpk'] === 'string' || data['encryptedZpk'] instanceof String)) {
            throw new Error("Expected the field `encryptedZpk` to be a primitive type in the JSON string but got " + data['encryptedZpk']);
        }

        return true;
    }


}

EncryptedPin.RequiredProperties = ["encryptedCardContractNumber", "encryptedPinBlock", "encryptedZpk"];

/**
 * Card contract number - PAN encrypted with `Customer-Public-Rsa-Key`. 
 * @member {String} encryptedCardContractNumber
 */
EncryptedPin.prototype['encryptedCardContractNumber'] = undefined;

/**
 * PIN block encrypted with ZPK (Zone PIN Key) returned in `encryptedZpk`. 
 * @member {String} encryptedPinBlock
 */
EncryptedPin.prototype['encryptedPinBlock'] = undefined;

/**
 * Hex-encoded Zone PIN Key encrypted with `Customer-Public-Rsa-Key`.  Before encrypting with `Customer-Public-Rsa-Key`, ZPK is wrapped under Standard Key Block type.  The standard key block format is a TLV (Type-Length-Value) encoding scheme with length as represented in Hexadecimal. 
 * @member {String} encryptedZpk
 */
EncryptedPin.prototype['encryptedZpk'] = undefined;






export default EncryptedPin;

