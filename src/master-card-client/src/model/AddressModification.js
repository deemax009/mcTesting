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
import BaseAddress from './BaseAddress';

/**
 * The AddressModification model module.
 * @module model/AddressModification
 * @version 1.0.0
 */
class AddressModification {
    /**
     * Constructs a new <code>AddressModification</code>.
     * @alias module:model/AddressModification
     * @implements module:model/BaseAddress
     */
    constructor() { 
        BaseAddress.initialize(this);
        AddressModification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressModification} obj Optional instance to populate.
     * @return {module:model/AddressModification} The populated <code>AddressModification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressModification();
            BaseAddress.constructFromObject(data, obj);

            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
            }
            if (data.hasOwnProperty('addressLine4')) {
                obj['addressLine4'] = ApiClient.convertToType(data['addressLine4'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressModification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressModification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
            throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
        }
        // ensure the json data is a string
        if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
            throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
        }
        // ensure the json data is a string
        if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
            throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
        }
        // ensure the json data is a string
        if (data['addressLine4'] && !(typeof data['addressLine4'] === 'string' || data['addressLine4'] instanceof String)) {
            throw new Error("Expected the field `addressLine4` to be a primitive type in the JSON string but got " + data['addressLine4']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
            throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}



/**
 * First address line. 
 * @member {String} addressLine1
 */
AddressModification.prototype['addressLine1'] = undefined;

/**
 * Second address line. 
 * @member {String} addressLine2
 */
AddressModification.prototype['addressLine2'] = undefined;

/**
 * Third address line. 
 * @member {String} addressLine3
 */
AddressModification.prototype['addressLine3'] = undefined;

/**
 * Fourth address line. 
 * @member {String} addressLine4
 */
AddressModification.prototype['addressLine4'] = undefined;

/**
 * City. 
 * @member {String} city
 */
AddressModification.prototype['city'] = undefined;

/**
 * Three-letter country code (format according to ISO-3166, alpha-3 specification). 
 * @member {String} country
 */
AddressModification.prototype['country'] = undefined;

/**
 * Client's email address. The MP's CMS will verify if the value contains the \"@\" character and will return an error if it does not. Requests without the \"@\" character in the `email` field will be rejected. 
 * @member {String} email
 */
AddressModification.prototype['email'] = undefined;

/**
 * First name. 
 * @member {String} firstName
 */
AddressModification.prototype['firstName'] = undefined;

/**
 * Last name. 
 * @member {String} lastName
 */
AddressModification.prototype['lastName'] = undefined;

/**
 * Postal code. The MP's CMS will not validate the correctness of the postal code. 
 * @member {String} postalCode
 */
AddressModification.prototype['postalCode'] = undefined;

/**
 * State. The MP's CMS will not validate the correctness of the state name. 
 * @member {String} state
 */
AddressModification.prototype['state'] = undefined;

/**
 * Flag informing about the status of the address. The address can be enabled or disabled. 
 * @member {Boolean} enabled
 */
AddressModification.prototype['enabled'] = undefined;


// Implement BaseAddress interface:
/**
 * First address line. 
 * @member {String} addressLine1
 */
BaseAddress.prototype['addressLine1'] = undefined;
/**
 * Second address line. 
 * @member {String} addressLine2
 */
BaseAddress.prototype['addressLine2'] = undefined;
/**
 * Third address line. 
 * @member {String} addressLine3
 */
BaseAddress.prototype['addressLine3'] = undefined;
/**
 * Fourth address line. 
 * @member {String} addressLine4
 */
BaseAddress.prototype['addressLine4'] = undefined;
/**
 * City. 
 * @member {String} city
 */
BaseAddress.prototype['city'] = undefined;
/**
 * Three-letter country code (format according to ISO-3166, alpha-3 specification). 
 * @member {String} country
 */
BaseAddress.prototype['country'] = undefined;
/**
 * Client's email address. The MP's CMS will verify if the value contains the \"@\" character and will return an error if it does not. Requests without the \"@\" character in the `email` field will be rejected. 
 * @member {String} email
 */
BaseAddress.prototype['email'] = undefined;
/**
 * First name. 
 * @member {String} firstName
 */
BaseAddress.prototype['firstName'] = undefined;
/**
 * Last name. 
 * @member {String} lastName
 */
BaseAddress.prototype['lastName'] = undefined;
/**
 * Postal code. The MP's CMS will not validate the correctness of the postal code. 
 * @member {String} postalCode
 */
BaseAddress.prototype['postalCode'] = undefined;
/**
 * State. The MP's CMS will not validate the correctness of the state name. 
 * @member {String} state
 */
BaseAddress.prototype['state'] = undefined;




export default AddressModification;

