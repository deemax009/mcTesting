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
 * The ServiceLimitTariff model module.
 * @module model/ServiceLimitTariff
 * @version 1.0.0
 */
class ServiceLimitTariff {
    /**
     * Constructs a new <code>ServiceLimitTariff</code>.
     * @alias module:model/ServiceLimitTariff
     * @param tariffCode {String} Tariff code from the CMS system. Uniquely identify service limit tariff which must be defined in the CMS during the onboarding process. 
     */
    constructor(tariffCode) { 
        
        ServiceLimitTariff.initialize(this, tariffCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tariffCode) { 
        obj['tariffCode'] = tariffCode;
    }

    /**
     * Constructs a <code>ServiceLimitTariff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceLimitTariff} obj Optional instance to populate.
     * @return {module:model/ServiceLimitTariff} The populated <code>ServiceLimitTariff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceLimitTariff();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('floorLimit')) {
                obj['floorLimit'] = ApiClient.convertToType(data['floorLimit'], 'Number');
            }
            if (data.hasOwnProperty('minTransactionAmount')) {
                obj['minTransactionAmount'] = ApiClient.convertToType(data['minTransactionAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxTransactionAmount')) {
                obj['maxTransactionAmount'] = ApiClient.convertToType(data['maxTransactionAmount'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('tariffCode')) {
                obj['tariffCode'] = ApiClient.convertToType(data['tariffCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceLimitTariff</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceLimitTariff</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceLimitTariff.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['tariffCode'] && !(typeof data['tariffCode'] === 'string' || data['tariffCode'] instanceof String)) {
            throw new Error("Expected the field `tariffCode` to be a primitive type in the JSON string but got " + data['tariffCode']);
        }

        return true;
    }


}

ServiceLimitTariff.RequiredProperties = ["tariffCode"];

/**
 * Tariff's currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
ServiceLimitTariff.prototype['currency'] = undefined;

/**
 * Tariff's end date (YYYY-MM-DD format). 
 * @member {Date} endDate
 */
ServiceLimitTariff.prototype['endDate'] = undefined;

/**
 * The maximum amount of a transaction that can be made without authorization.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator. 
 * @member {Number} floorLimit
 */
ServiceLimitTariff.prototype['floorLimit'] = undefined;

/**
 * Minimum allowed transaction amount or account balance or minimum threshold value of an Event related to balance type value changes. A zero value in the field means that there are no limitations.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator. 
 * @member {Number} minTransactionAmount
 */
ServiceLimitTariff.prototype['minTransactionAmount'] = undefined;

/**
 * Maximum allowed transaction amount or account balance, or maximum threshold value of an Event related to balance type value changes. A zero value in the field means that there are no limitations.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator. 
 * @member {Number} maxTransactionAmount
 */
ServiceLimitTariff.prototype['maxTransactionAmount'] = undefined;

/**
 * Tariff's effective date (YYYY-MM-DD format).  If the value is not transmitted in the request the local date is used. 
 * @member {Date} startDate
 */
ServiceLimitTariff.prototype['startDate'] = undefined;

/**
 * Tariff code from the CMS system. Uniquely identify service limit tariff which must be defined in the CMS during the onboarding process. 
 * @member {String} tariffCode
 */
ServiceLimitTariff.prototype['tariffCode'] = undefined;






export default ServiceLimitTariff;

