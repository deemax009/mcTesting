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
import CurrentUsage from './CurrentUsage';

/**
 * The UsageLimit model module.
 * @module model/UsageLimit
 * @version 1.0.0
 */
class UsageLimit {
    /**
     * Constructs a new <code>UsageLimit</code>.
     * @alias module:model/UsageLimit
     * @param status {String} Usage limit status.  | **Possible values**  | |--------------------- | | Active               | | Closed               | | Temporarily Active   | | Temporarily Closed   | | Expired              | | Template Closed      | | Service Deactivated  | | Redefined            | 
     * @param usageLimitCode {String} The code of usage limit configured in the MP's CMS. Usage limit code defines the type of usage limit. 
     */
    constructor(status, usageLimitCode) { 
        
        UsageLimit.initialize(this, status, usageLimitCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, usageLimitCode) { 
        obj['status'] = status;
        obj['usageLimitCode'] = usageLimitCode;
    }

    /**
     * Constructs a <code>UsageLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsageLimit} obj Optional instance to populate.
     * @return {module:model/UsageLimit} The populated <code>UsageLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsageLimit();

            if (data.hasOwnProperty('activityPeriodStartDate')) {
                obj['activityPeriodStartDate'] = ApiClient.convertToType(data['activityPeriodStartDate'], 'Date');
            }
            if (data.hasOwnProperty('activityPeriodEndDate')) {
                obj['activityPeriodEndDate'] = ApiClient.convertToType(data['activityPeriodEndDate'], 'Date');
            }
            if (data.hasOwnProperty('addInfo')) {
                obj['addInfo'] = ApiClient.convertToType(data['addInfo'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyNumericCode')) {
                obj['currencyNumericCode'] = ApiClient.convertToType(data['currencyNumericCode'], 'String');
            }
            if (data.hasOwnProperty('currentUsage')) {
                obj['currentUsage'] = CurrentUsage.constructFromObject(data['currentUsage']);
            }
            if (data.hasOwnProperty('maxAmount')) {
                obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxNumber')) {
                obj['maxNumber'] = ApiClient.convertToType(data['maxNumber'], 'Number');
            }
            if (data.hasOwnProperty('maxPercent')) {
                obj['maxPercent'] = ApiClient.convertToType(data['maxPercent'], 'Number');
            }
            if (data.hasOwnProperty('maxSingleAmount')) {
                obj['maxSingleAmount'] = ApiClient.convertToType(data['maxSingleAmount'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('usageLimitCode')) {
                obj['usageLimitCode'] = ApiClient.convertToType(data['usageLimitCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsageLimit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsageLimit</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsageLimit.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['addInfo'] && !(typeof data['addInfo'] === 'string' || data['addInfo'] instanceof String)) {
            throw new Error("Expected the field `addInfo` to be a primitive type in the JSON string but got " + data['addInfo']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['currencyNumericCode'] && !(typeof data['currencyNumericCode'] === 'string' || data['currencyNumericCode'] instanceof String)) {
            throw new Error("Expected the field `currencyNumericCode` to be a primitive type in the JSON string but got " + data['currencyNumericCode']);
        }
        // validate the optional field `currentUsage`
        if (data['currentUsage']) { // data not null
          CurrentUsage.validateJSON(data['currentUsage']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['usageLimitCode'] && !(typeof data['usageLimitCode'] === 'string' || data['usageLimitCode'] instanceof String)) {
            throw new Error("Expected the field `usageLimitCode` to be a primitive type in the JSON string but got " + data['usageLimitCode']);
        }

        return true;
    }


}

UsageLimit.RequiredProperties = ["status", "usageLimitCode"];

/**
 * Effective date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} activityPeriodStartDate
 */
UsageLimit.prototype['activityPeriodStartDate'] = undefined;

/**
 * Expiration date and time of the usage limit (YYYY-MM-DDThh:mm:ssZ format). Date must be greater or equal to `activityPeriodStartDateDate`. 
 * @member {Date} activityPeriodEndDate
 */
UsageLimit.prototype['activityPeriodEndDate'] = undefined;

/**
 * Additional Information (TAG=VALUE; format). 
 * @member {String} addInfo
 */
UsageLimit.prototype['addInfo'] = undefined;

/**
 * The currency of the maximum total amount of all transactions (`maxAmount`) and of a single transaction (`maxSingleAmount`) (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
UsageLimit.prototype['currency'] = undefined;

/**
 * The currency of the maximum total amount of all transactions (`maxAmount`) and of a single transaction (`maxSingleAmount`) (format according to ISO 4217, numeric code). 
 * @member {String} currencyNumericCode
 */
UsageLimit.prototype['currencyNumericCode'] = undefined;

/**
 * @member {module:model/CurrentUsage} currentUsage
 */
UsageLimit.prototype['currentUsage'] = undefined;

/**
 * Maximum transaction amount permitted for the specific limit period. Zero amount indicates no restrictions.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} maxAmount
 */
UsageLimit.prototype['maxAmount'] = undefined;

/**
 * Maximum number of transactions permitted for the specific limit period. 
 * @member {Number} maxNumber
 */
UsageLimit.prototype['maxNumber'] = undefined;

/**
 * This field (if it is filled in) is used in calculating threshold values for the amount or number of transactions, depending on the value of the Algorithm field. For example, for algorithms related to calculating the average or total value for the amount of transactions, the limit is calculated as a set percentage of the average or total calculated amount of transactions. If the algorithm is related to calculating the average or total number of transactions, a set percentage is applied to the calculated number of transactions. For the 'Fixed' algorithm, a percentage is only applied to the `maxAmount` amount. I.e. if this field is filled in, the value received with it redefines the value of the `maxAmount` or `maxNumber` field (depending on the algorithm). For a specific balance type, this field determines the maximum permissible total transaction amount for a set period, as a percentage of the available funds (amount available) of the corresponding balance type. If the balance type for a limiter is not specified, the maximum permissible transaction amount is calculated as a percentage of the contract credit limit.  A null value in this field means that no limits are set.  The field can contain values up to 2 decimal places. A dot is used as a decimal separator. 
 * @member {Number} maxPercent
 */
UsageLimit.prototype['maxPercent'] = undefined;

/**
 * Maximum amount permitted for one transaction. Zero amount indicates no restrictions.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} maxSingleAmount
 */
UsageLimit.prototype['maxSingleAmount'] = undefined;

/**
 * Usage limit status.  | **Possible values**  | |--------------------- | | Active               | | Closed               | | Temporarily Active   | | Temporarily Closed   | | Expired              | | Template Closed      | | Service Deactivated  | | Redefined            | 
 * @member {String} status
 */
UsageLimit.prototype['status'] = undefined;

/**
 * The code of usage limit configured in the MP's CMS. Usage limit code defines the type of usage limit. 
 * @member {String} usageLimitCode
 */
UsageLimit.prototype['usageLimitCode'] = undefined;






export default UsageLimit;

