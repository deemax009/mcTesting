/**
 * Mastercard Checkout Solutions Merchant Registration API
 * Registration APIs for Mastercard Checkout Solutions to submit new DPA data or check status of an existing uploaded batch
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
 * The ThreeDSDefaultData model module.
 * @module model/ThreeDSDefaultData
 * @version 1.0.0
 */
class ThreeDSDefaultData {
    /**
     * Constructs a new <code>ThreeDSDefaultData</code>.
     * Enables a Merchant to supply their existing 3-D Secure (3DS) integration details at the time of Digital Payment Application (DPA) registration.
     * @alias module:model/ThreeDSDefaultData
     */
    constructor() { 
        
        ThreeDSDefaultData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThreeDSDefaultData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThreeDSDefaultData} obj Optional instance to populate.
     * @return {module:model/ThreeDSDefaultData} The populated <code>ThreeDSDefaultData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThreeDSDefaultData();

            if (data.hasOwnProperty('defaultAcquirerBin')) {
                obj['defaultAcquirerBin'] = ApiClient.convertToType(data['defaultAcquirerBin'], 'String');
            }
            if (data.hasOwnProperty('defaultAcquirerMerchantId')) {
                obj['defaultAcquirerMerchantId'] = ApiClient.convertToType(data['defaultAcquirerMerchantId'], 'String');
            }
            if (data.hasOwnProperty('defaultMerchantCountryCode')) {
                obj['defaultMerchantCountryCode'] = ApiClient.convertToType(data['defaultMerchantCountryCode'], 'String');
            }
            if (data.hasOwnProperty('defaultMerchantCategoryCode')) {
                obj['defaultMerchantCategoryCode'] = ApiClient.convertToType(data['defaultMerchantCategoryCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThreeDSDefaultData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThreeDSDefaultData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['defaultAcquirerBin'] && !(typeof data['defaultAcquirerBin'] === 'string' || data['defaultAcquirerBin'] instanceof String)) {
            throw new Error("Expected the field `defaultAcquirerBin` to be a primitive type in the JSON string but got " + data['defaultAcquirerBin']);
        }
        // ensure the json data is a string
        if (data['defaultAcquirerMerchantId'] && !(typeof data['defaultAcquirerMerchantId'] === 'string' || data['defaultAcquirerMerchantId'] instanceof String)) {
            throw new Error("Expected the field `defaultAcquirerMerchantId` to be a primitive type in the JSON string but got " + data['defaultAcquirerMerchantId']);
        }
        // ensure the json data is a string
        if (data['defaultMerchantCountryCode'] && !(typeof data['defaultMerchantCountryCode'] === 'string' || data['defaultMerchantCountryCode'] instanceof String)) {
            throw new Error("Expected the field `defaultMerchantCountryCode` to be a primitive type in the JSON string but got " + data['defaultMerchantCountryCode']);
        }
        // ensure the json data is a string
        if (data['defaultMerchantCategoryCode'] && !(typeof data['defaultMerchantCategoryCode'] === 'string' || data['defaultMerchantCategoryCode'] instanceof String)) {
            throw new Error("Expected the field `defaultMerchantCategoryCode` to be a primitive type in the JSON string but got " + data['defaultMerchantCategoryCode']);
        }

        return true;
    }


}



/**
 * Allows a Merchant to set a default Acquirer. An Acquirer BIN is an identifier assigned by Mastercard to an Acquirer.  If this field is not defined and acquirerData has only one entry, this field will be populated with the value from acquirerBin. 
 * @member {String} defaultAcquirerBin
 */
ThreeDSDefaultData.prototype['defaultAcquirerBin'] = undefined;

/**
 * An identifier assigned to the Merchant by their Acquirer. If this field is not populated and acquirerData has only one entry, this field will be populated with the value from acquirerMerchantId.
 * @member {String} defaultAcquirerMerchantId
 */
ThreeDSDefaultData.prototype['defaultAcquirerMerchantId'] = undefined;

/**
 * Allows a Merchant to set a default Merchant Country Code (CC).  A Merchant CC is a two-character code indicating the country the Merchant is doing business in. 
 * @member {String} defaultMerchantCountryCode
 */
ThreeDSDefaultData.prototype['defaultMerchantCountryCode'] = undefined;

/**
 * Allows a Merchant to set a default Merchant Category Code (MCC).  An MCC is a four-character code assigned by Mastercard to the Merchant that indicates the type of business, service, or product provided by the Merchant.  Note: MCC's may be assigned differently across payment networks. To avoid errors, be sure to use your assigned Mastercard MCC. This code is required for 3-D Secure (3DS) and risk profiling. If the Merchant has more than one MCC, the code most relevant to their business should be used. 
 * @member {String} defaultMerchantCategoryCode
 */
ThreeDSDefaultData.prototype['defaultMerchantCategoryCode'] = undefined;






export default ThreeDSDefaultData;

