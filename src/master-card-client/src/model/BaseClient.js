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
import ClientBaseAddressData from './ClientBaseAddressData';
import ClientCompanyData from './ClientCompanyData';
import ClientContactData from './ClientContactData';
import ClientIdentificationData from './ClientIdentificationData';
import ClientPersonalData from './ClientPersonalData';
import EmbossedData from './EmbossedData';

/**
 * The BaseClient model module.
 * @module model/BaseClient
 * @version 1.0.0
 */
class BaseClient {
    /**
     * Constructs a new <code>BaseClient</code>.
     * @alias module:model/BaseClient
     */
    constructor() { 
        
        BaseClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseClient} obj Optional instance to populate.
     * @return {module:model/BaseClient} The populated <code>BaseClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseClient();

            if (data.hasOwnProperty('additionalDate01')) {
                obj['additionalDate01'] = ApiClient.convertToType(data['additionalDate01'], 'Date');
            }
            if (data.hasOwnProperty('additionalDate02')) {
                obj['additionalDate02'] = ApiClient.convertToType(data['additionalDate02'], 'Date');
            }
            if (data.hasOwnProperty('clientBaseAddressData')) {
                obj['clientBaseAddressData'] = ClientBaseAddressData.constructFromObject(data['clientBaseAddressData']);
            }
            if (data.hasOwnProperty('clientCompanyData')) {
                obj['clientCompanyData'] = ClientCompanyData.constructFromObject(data['clientCompanyData']);
            }
            if (data.hasOwnProperty('clientContactData')) {
                obj['clientContactData'] = ClientContactData.constructFromObject(data['clientContactData']);
            }
            if (data.hasOwnProperty('clientIdentificationData')) {
                obj['clientIdentificationData'] = ClientIdentificationData.constructFromObject(data['clientIdentificationData']);
            }
            if (data.hasOwnProperty('clientPersonalData')) {
                obj['clientPersonalData'] = ClientPersonalData.constructFromObject(data['clientPersonalData']);
            }
            if (data.hasOwnProperty('clientExpiryDate')) {
                obj['clientExpiryDate'] = ApiClient.convertToType(data['clientExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('embossedData')) {
                obj['embossedData'] = EmbossedData.constructFromObject(data['embossedData']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseClient</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseClient</code>.
     */
    static validateJSON(data) {
        // validate the optional field `clientBaseAddressData`
        if (data['clientBaseAddressData']) { // data not null
          ClientBaseAddressData.validateJSON(data['clientBaseAddressData']);
        }
        // validate the optional field `clientCompanyData`
        if (data['clientCompanyData']) { // data not null
          ClientCompanyData.validateJSON(data['clientCompanyData']);
        }
        // validate the optional field `clientContactData`
        if (data['clientContactData']) { // data not null
          ClientContactData.validateJSON(data['clientContactData']);
        }
        // validate the optional field `clientIdentificationData`
        if (data['clientIdentificationData']) { // data not null
          ClientIdentificationData.validateJSON(data['clientIdentificationData']);
        }
        // validate the optional field `clientPersonalData`
        if (data['clientPersonalData']) { // data not null
          ClientPersonalData.validateJSON(data['clientPersonalData']);
        }
        // validate the optional field `embossedData`
        if (data['embossedData']) { // data not null
          EmbossedData.validateJSON(data['embossedData']);
        }

        return true;
    }


}



/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate01
 */
BaseClient.prototype['additionalDate01'] = undefined;

/**
 * Additional date to meet the Issuer's individual needs. It can be any date which the Issuer wants to store on the client record - for example, the date when the client signed the agreement. (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} additionalDate02
 */
BaseClient.prototype['additionalDate02'] = undefined;

/**
 * @member {module:model/ClientBaseAddressData} clientBaseAddressData
 */
BaseClient.prototype['clientBaseAddressData'] = undefined;

/**
 * @member {module:model/ClientCompanyData} clientCompanyData
 */
BaseClient.prototype['clientCompanyData'] = undefined;

/**
 * @member {module:model/ClientContactData} clientContactData
 */
BaseClient.prototype['clientContactData'] = undefined;

/**
 * @member {module:model/ClientIdentificationData} clientIdentificationData
 */
BaseClient.prototype['clientIdentificationData'] = undefined;

/**
 * @member {module:model/ClientPersonalData} clientPersonalData
 */
BaseClient.prototype['clientPersonalData'] = undefined;

/**
 * Date of client expiration (YYYY-MM-DD format). When the date is met in the MP's CMS, the Issuer will not be able to create new account contracts or new cards for the client. 
 * @member {Date} clientExpiryDate
 */
BaseClient.prototype['clientExpiryDate'] = undefined;

/**
 * @member {module:model/EmbossedData} embossedData
 */
BaseClient.prototype['embossedData'] = undefined;






export default BaseClient;

