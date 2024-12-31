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
import CardContract from './CardContract';
import CardContractStatusData from './CardContractStatusData';
import EmbossedData from './EmbossedData';

/**
 * The CardContractWithEncryptedCardContractNumber model module.
 * @module model/CardContractWithEncryptedCardContractNumber
 * @version 1.0.0
 */
class CardContractWithEncryptedCardContractNumber {
    /**
     * Constructs a new <code>CardContractWithEncryptedCardContractNumber</code>.
     * @alias module:model/CardContractWithEncryptedCardContractNumber
     * @implements module:model/CardContract
     * @param accountContractId {Number} Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
     * @param cardContractId {Number} Unique technical card contract identifier generated by the MP's CMS. The identifier is generated when card contract creation finishes successfully and is returned in a card contract creation response (`POST /cards`). 
     * @param cardContractNumber {String} The card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API) 
     * @param cardholderId {Number} Unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (`POST /clients`). When a client is assigned to a card contract in the card contract creation request, they become a cardholder and are authorized to perform transactions using the card. 
     */
    constructor(accountContractId, cardContractId, cardContractNumber, cardholderId) { 
        CardContract.initialize(this, accountContractId, cardContractId, cardContractNumber, cardholderId);
        CardContractWithEncryptedCardContractNumber.initialize(this, accountContractId, cardContractId, cardContractNumber, cardholderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountContractId, cardContractId, cardContractNumber, cardholderId) { 
        obj['accountContractId'] = accountContractId;
        obj['cardContractId'] = cardContractId;
        obj['cardContractNumber'] = cardContractNumber;
        obj['cardholderId'] = cardholderId;
    }

    /**
     * Constructs a <code>CardContractWithEncryptedCardContractNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardContractWithEncryptedCardContractNumber} obj Optional instance to populate.
     * @return {module:model/CardContractWithEncryptedCardContractNumber} The populated <code>CardContractWithEncryptedCardContractNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardContractWithEncryptedCardContractNumber();
            CardContract.constructFromObject(data, obj);

            if (data.hasOwnProperty('accountContractId')) {
                obj['accountContractId'] = ApiClient.convertToType(data['accountContractId'], 'Number');
            }
            if (data.hasOwnProperty('accountContractNumber')) {
                obj['accountContractNumber'] = ApiClient.convertToType(data['accountContractNumber'], 'String');
            }
            if (data.hasOwnProperty('amendmentDate')) {
                obj['amendmentDate'] = ApiClient.convertToType(data['amendmentDate'], 'Date');
            }
            if (data.hasOwnProperty('amendmentOfficerId')) {
                obj['amendmentOfficerId'] = ApiClient.convertToType(data['amendmentOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('amendmentOfficerName')) {
                obj['amendmentOfficerName'] = ApiClient.convertToType(data['amendmentOfficerName'], 'String');
            }
            if (data.hasOwnProperty('availableBalance')) {
                obj['availableBalance'] = ApiClient.convertToType(data['availableBalance'], 'Number');
            }
            if (data.hasOwnProperty('blockedAmount')) {
                obj['blockedAmount'] = ApiClient.convertToType(data['blockedAmount'], 'Number');
            }
            if (data.hasOwnProperty('branchCode')) {
                obj['branchCode'] = ApiClient.convertToType(data['branchCode'], 'String');
            }
            if (data.hasOwnProperty('branchName')) {
                obj['branchName'] = ApiClient.convertToType(data['branchName'], 'String');
            }
            if (data.hasOwnProperty('cardExpiryDate')) {
                obj['cardExpiryDate'] = ApiClient.convertToType(data['cardExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('cardContractId')) {
                obj['cardContractId'] = ApiClient.convertToType(data['cardContractId'], 'Number');
            }
            if (data.hasOwnProperty('cardContractName')) {
                obj['cardContractName'] = ApiClient.convertToType(data['cardContractName'], 'String');
            }
            if (data.hasOwnProperty('cardContractNumber')) {
                obj['cardContractNumber'] = ApiClient.convertToType(data['cardContractNumber'], 'String');
            }
            if (data.hasOwnProperty('cardContractStatusData')) {
                obj['cardContractStatusData'] = CardContractStatusData.constructFromObject(data['cardContractStatusData']);
            }
            if (data.hasOwnProperty('cardholderId')) {
                obj['cardholderId'] = ApiClient.convertToType(data['cardholderId'], 'Number');
            }
            if (data.hasOwnProperty('cardholderShortName')) {
                obj['cardholderShortName'] = ApiClient.convertToType(data['cardholderShortName'], 'String');
            }
            if (data.hasOwnProperty('cbsNumber')) {
                obj['cbsNumber'] = ApiClient.convertToType(data['cbsNumber'], 'String');
            }
            if (data.hasOwnProperty('creditLimit')) {
                obj['creditLimit'] = ApiClient.convertToType(data['creditLimit'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyNumericCode')) {
                obj['currencyNumericCode'] = ApiClient.convertToType(data['currencyNumericCode'], 'String');
            }
            if (data.hasOwnProperty('dateOpen')) {
                obj['dateOpen'] = ApiClient.convertToType(data['dateOpen'], 'Date');
            }
            if (data.hasOwnProperty('embossedData')) {
                obj['embossedData'] = EmbossedData.constructFromObject(data['embossedData']);
            }
            if (data.hasOwnProperty('liabilityCategory')) {
                obj['liabilityCategory'] = ApiClient.convertToType(data['liabilityCategory'], 'String');
            }
            if (data.hasOwnProperty('maxPinAttempts')) {
                obj['maxPinAttempts'] = ApiClient.convertToType(data['maxPinAttempts'], 'Number');
            }
            if (data.hasOwnProperty('parentProductCode')) {
                obj['parentProductCode'] = ApiClient.convertToType(data['parentProductCode'], 'String');
            }
            if (data.hasOwnProperty('pinAttemptsCounter')) {
                obj['pinAttemptsCounter'] = ApiClient.convertToType(data['pinAttemptsCounter'], 'Number');
            }
            if (data.hasOwnProperty('previousCardContractId')) {
                obj['previousCardContractId'] = ApiClient.convertToType(data['previousCardContractId'], 'Number');
            }
            if (data.hasOwnProperty('previousCardContractNumber')) {
                obj['previousCardContractNumber'] = ApiClient.convertToType(data['previousCardContractNumber'], 'String');
            }
            if (data.hasOwnProperty('productCode')) {
                obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('sequenceNumber')) {
                obj['sequenceNumber'] = ApiClient.convertToType(data['sequenceNumber'], 'String');
            }
            if (data.hasOwnProperty('encryptedCardContractNumber')) {
                obj['encryptedCardContractNumber'] = ApiClient.convertToType(data['encryptedCardContractNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardContractWithEncryptedCardContractNumber</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardContractWithEncryptedCardContractNumber</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CardContractWithEncryptedCardContractNumber.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accountContractNumber'] && !(typeof data['accountContractNumber'] === 'string' || data['accountContractNumber'] instanceof String)) {
            throw new Error("Expected the field `accountContractNumber` to be a primitive type in the JSON string but got " + data['accountContractNumber']);
        }
        // ensure the json data is a string
        if (data['amendmentOfficerName'] && !(typeof data['amendmentOfficerName'] === 'string' || data['amendmentOfficerName'] instanceof String)) {
            throw new Error("Expected the field `amendmentOfficerName` to be a primitive type in the JSON string but got " + data['amendmentOfficerName']);
        }
        // ensure the json data is a string
        if (data['branchCode'] && !(typeof data['branchCode'] === 'string' || data['branchCode'] instanceof String)) {
            throw new Error("Expected the field `branchCode` to be a primitive type in the JSON string but got " + data['branchCode']);
        }
        // ensure the json data is a string
        if (data['branchName'] && !(typeof data['branchName'] === 'string' || data['branchName'] instanceof String)) {
            throw new Error("Expected the field `branchName` to be a primitive type in the JSON string but got " + data['branchName']);
        }
        // ensure the json data is a string
        if (data['cardExpiryDate'] && !(typeof data['cardExpiryDate'] === 'string' || data['cardExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `cardExpiryDate` to be a primitive type in the JSON string but got " + data['cardExpiryDate']);
        }
        // ensure the json data is a string
        if (data['cardContractName'] && !(typeof data['cardContractName'] === 'string' || data['cardContractName'] instanceof String)) {
            throw new Error("Expected the field `cardContractName` to be a primitive type in the JSON string but got " + data['cardContractName']);
        }
        // ensure the json data is a string
        if (data['cardContractNumber'] && !(typeof data['cardContractNumber'] === 'string' || data['cardContractNumber'] instanceof String)) {
            throw new Error("Expected the field `cardContractNumber` to be a primitive type in the JSON string but got " + data['cardContractNumber']);
        }
        // validate the optional field `cardContractStatusData`
        if (data['cardContractStatusData']) { // data not null
          CardContractStatusData.validateJSON(data['cardContractStatusData']);
        }
        // ensure the json data is a string
        if (data['cardholderShortName'] && !(typeof data['cardholderShortName'] === 'string' || data['cardholderShortName'] instanceof String)) {
            throw new Error("Expected the field `cardholderShortName` to be a primitive type in the JSON string but got " + data['cardholderShortName']);
        }
        // ensure the json data is a string
        if (data['cbsNumber'] && !(typeof data['cbsNumber'] === 'string' || data['cbsNumber'] instanceof String)) {
            throw new Error("Expected the field `cbsNumber` to be a primitive type in the JSON string but got " + data['cbsNumber']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['currencyNumericCode'] && !(typeof data['currencyNumericCode'] === 'string' || data['currencyNumericCode'] instanceof String)) {
            throw new Error("Expected the field `currencyNumericCode` to be a primitive type in the JSON string but got " + data['currencyNumericCode']);
        }
        // validate the optional field `embossedData`
        if (data['embossedData']) { // data not null
          EmbossedData.validateJSON(data['embossedData']);
        }
        // ensure the json data is a string
        if (data['liabilityCategory'] && !(typeof data['liabilityCategory'] === 'string' || data['liabilityCategory'] instanceof String)) {
            throw new Error("Expected the field `liabilityCategory` to be a primitive type in the JSON string but got " + data['liabilityCategory']);
        }
        // ensure the json data is a string
        if (data['parentProductCode'] && !(typeof data['parentProductCode'] === 'string' || data['parentProductCode'] instanceof String)) {
            throw new Error("Expected the field `parentProductCode` to be a primitive type in the JSON string but got " + data['parentProductCode']);
        }
        // ensure the json data is a string
        if (data['previousCardContractNumber'] && !(typeof data['previousCardContractNumber'] === 'string' || data['previousCardContractNumber'] instanceof String)) {
            throw new Error("Expected the field `previousCardContractNumber` to be a primitive type in the JSON string but got " + data['previousCardContractNumber']);
        }
        // ensure the json data is a string
        if (data['productCode'] && !(typeof data['productCode'] === 'string' || data['productCode'] instanceof String)) {
            throw new Error("Expected the field `productCode` to be a primitive type in the JSON string but got " + data['productCode']);
        }
        // ensure the json data is a string
        if (data['productName'] && !(typeof data['productName'] === 'string' || data['productName'] instanceof String)) {
            throw new Error("Expected the field `productName` to be a primitive type in the JSON string but got " + data['productName']);
        }
        // ensure the json data is a string
        if (data['sequenceNumber'] && !(typeof data['sequenceNumber'] === 'string' || data['sequenceNumber'] instanceof String)) {
            throw new Error("Expected the field `sequenceNumber` to be a primitive type in the JSON string but got " + data['sequenceNumber']);
        }
        // ensure the json data is a string
        if (data['encryptedCardContractNumber'] && !(typeof data['encryptedCardContractNumber'] === 'string' || data['encryptedCardContractNumber'] instanceof String)) {
            throw new Error("Expected the field `encryptedCardContractNumber` to be a primitive type in the JSON string but got " + data['encryptedCardContractNumber']);
        }

        return true;
    }


}

CardContractWithEncryptedCardContractNumber.RequiredProperties = ["accountContractId", "cardContractId", "cardContractNumber", "cardholderId"];

/**
 * Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
 * @member {Number} accountContractId
 */
CardContractWithEncryptedCardContractNumber.prototype['accountContractId'] = undefined;

/**
 * Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
 * @member {String} accountContractNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['accountContractNumber'] = undefined;

/**
 * Date and time of the most recent change to the object (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} amendmentDate
 */
CardContractWithEncryptedCardContractNumber.prototype['amendmentDate'] = undefined;

/**
 * Officer ID of the MP's CMS user who made the last change to the object. 
 * @member {Number} amendmentOfficerId
 */
CardContractWithEncryptedCardContractNumber.prototype['amendmentOfficerId'] = undefined;

/**
 * Officer name of the MP's CMS user who made the last change to the object. 
 * @member {String} amendmentOfficerName
 */
CardContractWithEncryptedCardContractNumber.prototype['amendmentOfficerName'] = undefined;

/**
 * Available card balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} availableBalance
 */
CardContractWithEncryptedCardContractNumber.prototype['availableBalance'] = undefined;

/**
 * Contract's own blocked amount, which has not been unblocked yet - not including blocked amount on additional cards.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} blockedAmount
 */
CardContractWithEncryptedCardContractNumber.prototype['blockedAmount'] = undefined;

/**
 * Branch code under which a contract (an account contract or a card contract) has been created on the Issuer's side and which has been passed in a contract creation request. (`POST /accounts` or `POST /cards`). The value can be later used by the Issuer for reporting purposes. 
 * @member {String} branchCode
 */
CardContractWithEncryptedCardContractNumber.prototype['branchCode'] = undefined;

/**
 * Branch name (assigned to the branch code). 
 * @member {String} branchName
 */
CardContractWithEncryptedCardContractNumber.prototype['branchName'] = undefined;

/**
 * Card expiry date (YYMM format). 
 * @member {String} cardExpiryDate
 */
CardContractWithEncryptedCardContractNumber.prototype['cardExpiryDate'] = undefined;

/**
 * Unique technical card contract identifier generated by the MP's CMS. The identifier is generated when card contract creation finishes successfully and is returned in a card contract creation response (`POST /cards`). 
 * @member {Number} cardContractId
 */
CardContractWithEncryptedCardContractNumber.prototype['cardContractId'] = undefined;

/**
 * Card contract name. Free text field. 
 * @member {String} cardContractName
 */
CardContractWithEncryptedCardContractNumber.prototype['cardContractName'] = undefined;

/**
 * The card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API) 
 * @member {String} cardContractNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['cardContractNumber'] = undefined;

/**
 * @member {module:model/CardContractStatusData} cardContractStatusData
 */
CardContractWithEncryptedCardContractNumber.prototype['cardContractStatusData'] = undefined;

/**
 * Unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (`POST /clients`). When a client is assigned to a card contract in the card contract creation request, they become a cardholder and are authorized to perform transactions using the card. 
 * @member {Number} cardholderId
 */
CardContractWithEncryptedCardContractNumber.prototype['cardholderId'] = undefined;

/**
 * Client (cardholder) short name. 
 * @member {String} cardholderShortName
 */
CardContractWithEncryptedCardContractNumber.prototype['cardholderShortName'] = undefined;

/**
 * Contract identifier (for an account contract or a card contract) generated on the Issuer's side and passed to the MP's CMS in the contract creation request. (`POST /accounts` or `POST /cards`). 
 * @member {String} cbsNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['cbsNumber'] = undefined;

/**
 * Usually field presents the contract's credit limit available for a specific contract itself.  Only in specific product configuration ('SeeMain' authorization scenario configured in the CMS), the field will show credit limit of the parent contract.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} creditLimit
 */
CardContractWithEncryptedCardContractNumber.prototype['creditLimit'] = undefined;

/**
 * Card contract currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
CardContractWithEncryptedCardContractNumber.prototype['currency'] = undefined;

/**
 * Card contract currency (format according to ISO 4217, numeric code). 
 * @member {String} currencyNumericCode
 */
CardContractWithEncryptedCardContractNumber.prototype['currencyNumericCode'] = undefined;

/**
 * Date of the contract record creation in the MP's CMS (YYYY-MM-DD format). 
 * @member {Date} dateOpen
 */
CardContractWithEncryptedCardContractNumber.prototype['dateOpen'] = undefined;

/**
 * @member {module:model/EmbossedData} embossedData
 */
CardContractWithEncryptedCardContractNumber.prototype['embossedData'] = undefined;

/**
 * Type of relation with an upper-level Liability contract (if any).  | **Possible values**  | **Description**     | |--------------------- |-------------------- | | A                    | Only Check Balance  | | N                    | Affiliated          | | R                    | Reporting           | | Y                    | Full Liability      | 
 * @member {String} liabilityCategory
 */
CardContractWithEncryptedCardContractNumber.prototype['liabilityCategory'] = undefined;

/**
 * Maximum number of PIN attempts. 
 * @member {Number} maxPinAttempts
 */
CardContractWithEncryptedCardContractNumber.prototype['maxPinAttempts'] = undefined;

/**
 * Product code of the parent contract. 
 * @member {String} parentProductCode
 */
CardContractWithEncryptedCardContractNumber.prototype['parentProductCode'] = undefined;

/**
 * PIN attempts counter. 
 * @member {Number} pinAttemptsCounter
 */
CardContractWithEncryptedCardContractNumber.prototype['pinAttemptsCounter'] = undefined;

/**
 * Unique technical identifier of the previous card contract, generated for the current card contract by the MP's CMS. The identifier is generated when the previous card contract creation is successfully completed and is returned in a new card contract creation response. (`POST /cards`). 
 * @member {Number} previousCardContractId
 */
CardContractWithEncryptedCardContractNumber.prototype['previousCardContractId'] = undefined;

/**
 * The previous card contract number for the current card contract represents the Primary Account Number (PAN). PAN is usually composed of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within a payment organization (Mastercard, VISA)   * The following nine digits: contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API) 
 * @member {String} previousCardContractNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['previousCardContractNumber'] = undefined;

/**
 * Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP's CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: `productCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product card `productCode` can be found in the Parametrization Workbook (PPW) in the *CD.1.4.005*. 
 * @member {String} productCode
 */
CardContractWithEncryptedCardContractNumber.prototype['productCode'] = undefined;

/**
 * Name of the product code used to create contract. 
 * @member {String} productName
 */
CardContractWithEncryptedCardContractNumber.prototype['productName'] = undefined;

/**
 * The sequence number of a `Plastic`, created under the given card contract. Every new `Plastic` created has the next number in a sequence following previous card plastics. 
 * @member {String} sequenceNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['sequenceNumber'] = undefined;

/**
 * Unmasked card contract number (PAN) encrypted with the `Customer-Public-Rsa-Key`.  Field is returned if `Customer-Public-Rsa-Key` header is not empty.
 * @member {String} encryptedCardContractNumber
 */
CardContractWithEncryptedCardContractNumber.prototype['encryptedCardContractNumber'] = undefined;


// Implement CardContract interface:
/**
 * Unique technical identifier for an account contract generated by the MP's CMS. The identifier is generated when the account contract creation finishes successfully and is returned in the account contract creation response (`POST /accounts`). 
 * @member {Number} accountContractId
 */
CardContract.prototype['accountContractId'] = undefined;
/**
 * Account contract identifier generated by the Issuer's CBS system (Core Banking System). The identifier is stored in the MP's CMS system so that the Issuer can distinguish between their accounts.  `accountContractNumber` should be prefixed with a unique Issuer designation, for example \"ABC_\", as it must be unique in the MP's CMS.  Note: The Issuer designation \"ABC_\" is configured in the MP's CMS and the Issuer is allowed to use only the value agreed with the MP. 
 * @member {String} accountContractNumber
 */
CardContract.prototype['accountContractNumber'] = undefined;
/**
 * Date and time of the most recent change to the object (YYYY-MM-DDThh:mm:ssZ format). 
 * @member {Date} amendmentDate
 */
CardContract.prototype['amendmentDate'] = undefined;
/**
 * Officer ID of the MP's CMS user who made the last change to the object. 
 * @member {Number} amendmentOfficerId
 */
CardContract.prototype['amendmentOfficerId'] = undefined;
/**
 * Officer name of the MP's CMS user who made the last change to the object. 
 * @member {String} amendmentOfficerName
 */
CardContract.prototype['amendmentOfficerName'] = undefined;
/**
 * Available card balance.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} availableBalance
 */
CardContract.prototype['availableBalance'] = undefined;
/**
 * Contract's own blocked amount, which has not been unblocked yet - not including blocked amount on additional cards.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} blockedAmount
 */
CardContract.prototype['blockedAmount'] = undefined;
/**
 * Branch code under which a contract (an account contract or a card contract) has been created on the Issuer's side and which has been passed in a contract creation request. (`POST /accounts` or `POST /cards`). The value can be later used by the Issuer for reporting purposes. 
 * @member {String} branchCode
 */
CardContract.prototype['branchCode'] = undefined;
/**
 * Branch name (assigned to the branch code). 
 * @member {String} branchName
 */
CardContract.prototype['branchName'] = undefined;
/**
 * Card expiry date (YYMM format). 
 * @member {String} cardExpiryDate
 */
CardContract.prototype['cardExpiryDate'] = undefined;
/**
 * Unique technical card contract identifier generated by the MP's CMS. The identifier is generated when card contract creation finishes successfully and is returned in a card contract creation response (`POST /cards`). 
 * @member {Number} cardContractId
 */
CardContract.prototype['cardContractId'] = undefined;
/**
 * Card contract name. Free text field. 
 * @member {String} cardContractName
 */
CardContract.prototype['cardContractName'] = undefined;
/**
 * The card contract number represents a Primary Account Number (PAN). A PAN usually consists of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within the payment organization (Mastercard, VISA)   * The following nine digits are the contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API) 
 * @member {String} cardContractNumber
 */
CardContract.prototype['cardContractNumber'] = undefined;
/**
 * @member {module:model/CardContractStatusData} cardContractStatusData
 */
CardContract.prototype['cardContractStatusData'] = undefined;
/**
 * Unique technical client identifier, generated by the MP's CMS database engine. The identifier is generated when client creation finishes successfully and is returned in a client creation response (`POST /clients`). When a client is assigned to a card contract in the card contract creation request, they become a cardholder and are authorized to perform transactions using the card. 
 * @member {Number} cardholderId
 */
CardContract.prototype['cardholderId'] = undefined;
/**
 * Client (cardholder) short name. 
 * @member {String} cardholderShortName
 */
CardContract.prototype['cardholderShortName'] = undefined;
/**
 * Contract identifier (for an account contract or a card contract) generated on the Issuer's side and passed to the MP's CMS in the contract creation request. (`POST /accounts` or `POST /cards`). 
 * @member {String} cbsNumber
 */
CardContract.prototype['cbsNumber'] = undefined;
/**
 * Usually field presents the contract's credit limit available for a specific contract itself.  Only in specific product configuration ('SeeMain' authorization scenario configured in the CMS), the field will show credit limit of the parent contract.  The field can contain values up to 4 decimal places. A dot is used as a decimal separator. 
 * @member {Number} creditLimit
 */
CardContract.prototype['creditLimit'] = undefined;
/**
 * Card contract currency (format according to ISO 4217, alphanumeric code). 
 * @member {String} currency
 */
CardContract.prototype['currency'] = undefined;
/**
 * Card contract currency (format according to ISO 4217, numeric code). 
 * @member {String} currencyNumericCode
 */
CardContract.prototype['currencyNumericCode'] = undefined;
/**
 * Date of the contract record creation in the MP's CMS (YYYY-MM-DD format). 
 * @member {Date} dateOpen
 */
CardContract.prototype['dateOpen'] = undefined;
/**
 * @member {module:model/EmbossedData} embossedData
 */
CardContract.prototype['embossedData'] = undefined;
/**
 * Type of relation with an upper-level Liability contract (if any).  | **Possible values**  | **Description**     | |--------------------- |-------------------- | | A                    | Only Check Balance  | | N                    | Affiliated          | | R                    | Reporting           | | Y                    | Full Liability      | 
 * @member {String} liabilityCategory
 */
CardContract.prototype['liabilityCategory'] = undefined;
/**
 * Maximum number of PIN attempts. 
 * @member {Number} maxPinAttempts
 */
CardContract.prototype['maxPinAttempts'] = undefined;
/**
 * Product code of the parent contract. 
 * @member {String} parentProductCode
 */
CardContract.prototype['parentProductCode'] = undefined;
/**
 * PIN attempts counter. 
 * @member {Number} pinAttemptsCounter
 */
CardContract.prototype['pinAttemptsCounter'] = undefined;
/**
 * Unique technical identifier of the previous card contract, generated for the current card contract by the MP's CMS. The identifier is generated when the previous card contract creation is successfully completed and is returned in a new card contract creation response. (`POST /cards`). 
 * @member {Number} previousCardContractId
 */
CardContract.prototype['previousCardContractId'] = undefined;
/**
 * The previous card contract number for the current card contract represents the Primary Account Number (PAN). PAN is usually composed of 16 digits:   * The first six digits are the Bank Identification Number (BIN): a unique number within a payment organization (Mastercard, VISA)   * The following nine digits: contract identification number, which can be generated randomly   * The last digit is a Luhn check digit.  The card contract number can be returned:   * unmasked - with a full PAN visible   * masked - with a full PAN masked according to the defined mask (a mask pattern is agreed with the Issuer and configured in the MP API) 
 * @member {String} previousCardContractNumber
 */
CardContract.prototype['previousCardContractNumber'] = undefined;
/**
 * Product code defines the configuration used for the contract creation (account or card). Product code is linked in the MP's CMS to certain parameters which define how a contract will be used (for example if it is a card contract or an account contract, a debit or a credit contract, etc.).  *Disclaimer: `productCode` is configured in the MP's CMS and the Issuer is allowed to use only the value configured by the MP (the Issuer cannot use their own value).*  In the standard product card `productCode` can be found in the Parametrization Workbook (PPW) in the *CD.1.4.005*. 
 * @member {String} productCode
 */
CardContract.prototype['productCode'] = undefined;
/**
 * Name of the product code used to create contract. 
 * @member {String} productName
 */
CardContract.prototype['productName'] = undefined;
/**
 * The sequence number of a `Plastic`, created under the given card contract. Every new `Plastic` created has the next number in a sequence following previous card plastics. 
 * @member {String} sequenceNumber
 */
CardContract.prototype['sequenceNumber'] = undefined;




export default CardContractWithEncryptedCardContractNumber;
