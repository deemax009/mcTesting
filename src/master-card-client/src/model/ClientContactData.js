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
 * The ClientContactData model module.
 * @module model/ClientContactData
 * @version 1.0.0
 */
class ClientContactData {
    /**
     * Constructs a new <code>ClientContactData</code>.
     * Client&#39;s contact data. 
     * @alias module:model/ClientContactData
     */
    constructor() { 
        
        ClientContactData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientContactData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientContactData} obj Optional instance to populate.
     * @return {module:model/ClientContactData} The populated <code>ClientContactData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientContactData();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('faxHome')) {
                obj['faxHome'] = ApiClient.convertToType(data['faxHome'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberHome')) {
                obj['phoneNumberHome'] = ApiClient.convertToType(data['phoneNumberHome'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberMobile')) {
                obj['phoneNumberMobile'] = ApiClient.convertToType(data['phoneNumberMobile'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberWork')) {
                obj['phoneNumberWork'] = ApiClient.convertToType(data['phoneNumberWork'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClientContactData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClientContactData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['fax'] && !(typeof data['fax'] === 'string' || data['fax'] instanceof String)) {
            throw new Error("Expected the field `fax` to be a primitive type in the JSON string but got " + data['fax']);
        }
        // ensure the json data is a string
        if (data['faxHome'] && !(typeof data['faxHome'] === 'string' || data['faxHome'] instanceof String)) {
            throw new Error("Expected the field `faxHome` to be a primitive type in the JSON string but got " + data['faxHome']);
        }
        // ensure the json data is a string
        if (data['phoneNumberHome'] && !(typeof data['phoneNumberHome'] === 'string' || data['phoneNumberHome'] instanceof String)) {
            throw new Error("Expected the field `phoneNumberHome` to be a primitive type in the JSON string but got " + data['phoneNumberHome']);
        }
        // ensure the json data is a string
        if (data['phoneNumberMobile'] && !(typeof data['phoneNumberMobile'] === 'string' || data['phoneNumberMobile'] instanceof String)) {
            throw new Error("Expected the field `phoneNumberMobile` to be a primitive type in the JSON string but got " + data['phoneNumberMobile']);
        }
        // ensure the json data is a string
        if (data['phoneNumberWork'] && !(typeof data['phoneNumberWork'] === 'string' || data['phoneNumberWork'] instanceof String)) {
            throw new Error("Expected the field `phoneNumberWork` to be a primitive type in the JSON string but got " + data['phoneNumberWork']);
        }

        return true;
    }


}



/**
 * Client's email address. The MP's CMS will verify if the value contains the \"@\" character and will return an error if it does not. Requests without the \"@\" character in the `email` field will be rejected. 
 * @member {String} email
 */
ClientContactData.prototype['email'] = undefined;

/**
 * Fax number.  Note: The pattern for this field is configured in the MP's API during the onboarding process. 
 * @member {String} fax
 */
ClientContactData.prototype['fax'] = undefined;

/**
 * Home fax number.  Note: The pattern for this field is configured in the MP's API during the onboarding process. 
 * @member {String} faxHome
 */
ClientContactData.prototype['faxHome'] = undefined;

/**
 * Home phone number.  Note: The pattern for this field is configured in the MP's API during the onboarding process. 
 * @member {String} phoneNumberHome
 */
ClientContactData.prototype['phoneNumberHome'] = undefined;

/**
 * Mobile phone number (i.e. used for SMS notifications).  Note: The pattern for this field is configured in the MP's API during the onboarding process. 
 * @member {String} phoneNumberMobile
 */
ClientContactData.prototype['phoneNumberMobile'] = undefined;

/**
 * Work phone number.  Note: The pattern for this field is configured in the MP's API during the onboarding process. 
 * @member {String} phoneNumberWork
 */
ClientContactData.prototype['phoneNumberWork'] = undefined;






export default ClientContactData;

