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
import DynamicDataType from './DynamicDataType';

/**
 * The DynamicData model module.
 * @module model/DynamicData
 * @version 1.3.2
 */
class DynamicData {
    /**
     * Constructs a new <code>DynamicData</code>.
     * @alias module:model/DynamicData
     * @param dynamicDataType {module:model/DynamicDataType} 
     */
    constructor(dynamicDataType) { 
        
        DynamicData.initialize(this, dynamicDataType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dynamicDataType) { 
        obj['dynamicDataType'] = dynamicDataType;
    }

    /**
     * Constructs a <code>DynamicData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicData} obj Optional instance to populate.
     * @return {module:model/DynamicData} The populated <code>DynamicData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicData();

            if (data.hasOwnProperty('dynamicDataValue')) {
                obj['dynamicDataValue'] = ApiClient.convertToType(data['dynamicDataValue'], 'String');
            }
            if (data.hasOwnProperty('dynamicDataType')) {
                obj['dynamicDataType'] = DynamicDataType.constructFromObject(data['dynamicDataType']);
            }
            if (data.hasOwnProperty('dynamicDataExpiration')) {
                obj['dynamicDataExpiration'] = ApiClient.convertToType(data['dynamicDataExpiration'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dynamicDataValue'] && !(typeof data['dynamicDataValue'] === 'string' || data['dynamicDataValue'] instanceof String)) {
            throw new Error("Expected the field `dynamicDataValue` to be a primitive type in the JSON string but got " + data['dynamicDataValue']);
        }
        // ensure the json data is a string
        if (data['dynamicDataExpiration'] && !(typeof data['dynamicDataExpiration'] === 'string' || data['dynamicDataExpiration'] instanceof String)) {
            throw new Error("Expected the field `dynamicDataExpiration` to be a primitive type in the JSON string but got " + data['dynamicDataExpiration']);
        }

        return true;
    }


}

DynamicData.RequiredProperties = ["dynamicDataType"];

/**
 * Value of the dynamic data. String or Array[String] based on scheme. See below.  FPAN Payloads: <table> <tr> <td>Mastercard</td> <td>Object</td> </tr><tr> <td>VISA</td> <td>Array</td> </tr><tr> <td>Amex</td> <td>Object</td> </tr><tr> <td>Discover</td> <td>Array</td> </tr> </table>  Token Payloads: <table> <tr> <td>Mastercard</td> <td>Object</td> </tr><tr> <td>VISA</td> <td>Array</td> </tr><tr> <td>Amex</td> <td>Array</td> </tr><tr> <td>Discover</td> <td>Array</td> </tr> </table> 
 * @member {String} dynamicDataValue
 */
DynamicData.prototype['dynamicDataValue'] = undefined;

/**
 * @member {module:model/DynamicDataType} dynamicDataType
 */
DynamicData.prototype['dynamicDataType'] = undefined;

/**
 * Expiry period of the dynamic data. Format = UTC 
 * @member {String} dynamicDataExpiration
 */
DynamicData.prototype['dynamicDataExpiration'] = undefined;






export default DynamicData;

