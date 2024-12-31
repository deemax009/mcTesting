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
 * The TransactionTypeInfo model module.
 * @module model/TransactionTypeInfo
 * @version 1.0.0
 */
class TransactionTypeInfo {
    /**
     * Constructs a new <code>TransactionTypeInfo</code>.
     * @alias module:model/TransactionTypeInfo
     */
    constructor() { 
        
        TransactionTypeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionTypeInfo} obj Optional instance to populate.
     * @return {module:model/TransactionTypeInfo} The populated <code>TransactionTypeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTypeInfo();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('requestCategory')) {
                obj['requestCategory'] = ApiClient.convertToType(data['requestCategory'], 'String');
            }
            if (data.hasOwnProperty('serviceClassCode')) {
                obj['serviceClassCode'] = ApiClient.convertToType(data['serviceClassCode'], 'String');
            }
            if (data.hasOwnProperty('sourceCategory')) {
                obj['sourceCategory'] = ApiClient.convertToType(data['sourceCategory'], 'String');
            }
            if (data.hasOwnProperty('sourceCode')) {
                obj['sourceCode'] = ApiClient.convertToType(data['sourceCode'], 'String');
            }
            if (data.hasOwnProperty('targetCategory')) {
                obj['targetCategory'] = ApiClient.convertToType(data['targetCategory'], 'String');
            }
            if (data.hasOwnProperty('transactionDocumentCategory')) {
                obj['transactionDocumentCategory'] = ApiClient.convertToType(data['transactionDocumentCategory'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('transactionTypeCode')) {
                obj['transactionTypeCode'] = ApiClient.convertToType(data['transactionTypeCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionTypeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionTypeInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // ensure the json data is a string
        if (data['requestCategory'] && !(typeof data['requestCategory'] === 'string' || data['requestCategory'] instanceof String)) {
            throw new Error("Expected the field `requestCategory` to be a primitive type in the JSON string but got " + data['requestCategory']);
        }
        // ensure the json data is a string
        if (data['serviceClassCode'] && !(typeof data['serviceClassCode'] === 'string' || data['serviceClassCode'] instanceof String)) {
            throw new Error("Expected the field `serviceClassCode` to be a primitive type in the JSON string but got " + data['serviceClassCode']);
        }
        // ensure the json data is a string
        if (data['sourceCategory'] && !(typeof data['sourceCategory'] === 'string' || data['sourceCategory'] instanceof String)) {
            throw new Error("Expected the field `sourceCategory` to be a primitive type in the JSON string but got " + data['sourceCategory']);
        }
        // ensure the json data is a string
        if (data['sourceCode'] && !(typeof data['sourceCode'] === 'string' || data['sourceCode'] instanceof String)) {
            throw new Error("Expected the field `sourceCode` to be a primitive type in the JSON string but got " + data['sourceCode']);
        }
        // ensure the json data is a string
        if (data['targetCategory'] && !(typeof data['targetCategory'] === 'string' || data['targetCategory'] instanceof String)) {
            throw new Error("Expected the field `targetCategory` to be a primitive type in the JSON string but got " + data['targetCategory']);
        }
        // ensure the json data is a string
        if (data['transactionDocumentCategory'] && !(typeof data['transactionDocumentCategory'] === 'string' || data['transactionDocumentCategory'] instanceof String)) {
            throw new Error("Expected the field `transactionDocumentCategory` to be a primitive type in the JSON string but got " + data['transactionDocumentCategory']);
        }
        // ensure the json data is a string
        if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
            throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
        }
        // ensure the json data is a string
        if (data['transactionTypeCode'] && !(typeof data['transactionTypeCode'] === 'string' || data['transactionTypeCode'] instanceof String)) {
            throw new Error("Expected the field `transactionTypeCode` to be a primitive type in the JSON string but got " + data['transactionTypeCode']);
        }

        return true;
    }


}



/**
 * Transaction type's direction.  | **Possible values**  | |--------------------- | | Credit               | | Debit                | | None                 | 
 * @member {String} direction
 */
TransactionTypeInfo.prototype['direction'] = undefined;

/**
 * Transaction document request category name.  | **Possible values**  | |--------------------- | | Adjustment           | | Advice               | | Part Advice          | | Request              | | Reversal             | 
 * @member {String} requestCategory
 */
TransactionTypeInfo.prototype['requestCategory'] = undefined;

/**
 * Transaction type classifier code, determines the way documents or macrotransactions are processed.  | **Possible values**  |       **Description**       | |:-------------------: |:--------------------------: | | T                    |  Transaction                | | M                    |  Fee                        | | I                    |  Interests                  | | U                    |  Upper Normalization        | | L                    |  Lower Normalization        | | D                    |  Due Normalization          | | A                    |  Account Transfer           | | C                    |  Credit Limit               | | R                    |  Rev/Exp                    | | B                    |  Balance Inquiry            | | S                    |  Online Statement           | | E                    |  End Cycle                  | | i                    |  Interest Fee               | | P                    |  Online Payment             | | p                    |  External Payment           | | d                    |  Due Special                | | u                    |  Upper Limit Special        | | r                    |  Reserve for Bad Debts      | | l                    |  Lower Limit Special        | | c                    |  Additional Credit Limit    | | X                    |  Additional Online Service  | | +                    |  Top Up                    | | V                    |  Verification               | 
 * @member {String} serviceClassCode
 */
TransactionTypeInfo.prototype['serviceClassCode'] = undefined;

/**
 * Source contract category.  | **Possible values**  | |--------------------- | | Account              | | Card                 | | Device               | 
 * @member {String} sourceCategory
 */
TransactionTypeInfo.prototype['sourceCategory'] = undefined;

/**
 * Transaction message code for incoming documents. 
 * @member {String} sourceCode
 */
TransactionTypeInfo.prototype['sourceCode'] = undefined;

/**
 * Target contract category.  | **Possible values**  | |--------------------- | | Account              | | Card                 | | Device               | 
 * @member {String} targetCategory
 */
TransactionTypeInfo.prototype['targetCategory'] = undefined;

/**
 * Transaction document category.  | **Possible values**  | |--------------------- | | Auth                 | | Fin                  | | DataCapture          | | PreAuth              | | Transit Auth         | | Transit Preauth      | | Auth Check           | | Auth Check Transit   | | PostAuth             | 
 * @member {String} transactionDocumentCategory
 */
TransactionTypeInfo.prototype['transactionDocumentCategory'] = undefined;

/**
 * Transaction type. 
 * @member {String} transactionType
 */
TransactionTypeInfo.prototype['transactionType'] = undefined;

/**
 * Transaction type code. The value which can be used for filtering of transactions provided on the input filter.  Transactions originated from the Banknet | `transactionTypeCode`  | `transactionType`                      | |:---------------------: |--------------------------------------- | | 0512                   | Retail with CashBack                   | | 0513 1                 | CH Debit                               | | 0515                   | Retail                                 | | 0518                   | Unique                                 | | 0522                   | CashBack 2Prs                          | | 0523 1                 | CH Debit 2Prs                          | | 0525                   | Retail 2Prs                            | | 0528                   | Unique 2Prs                            | | 0614 2                 | CH Payment                             | | 0616                   | Refund                                 | | 0624 2                 | CH Payment 2Prs                        | | 0626                   | Credit 2Prs                            | | 0717                   | Cash Advance                           | | 0719                   | ATM Cash Withdrawal                    | | 0727                   | Cash 2Prs                              | | 0729                   | ATM Cash withdrawal - 2nd presentment  |  Transactions originated from the Issuer in the standard product | `transactionTypeCode`  | `transactionType`              | **Product applicability**  | |----------------------- |------------------------------- |--------------------------- | | APSF                   | Paper statement fee            | Credit                     | | BT1                    | Balance Transfer               | Credit                     | | FP                     | Fee posting                    | Credit                     | | I_TPC                  | PBB Transfer posting - credit  | Credit, Prepaid            | | I_TPD                  | PBB Transfer posting - debit   | Credit, Prepaid            | | PT_1                   | Payment To Client Contract     | Credit                     | | TP                     | Prepaid Top-Up                 | Prepaid                    | | TPC_1                  | Transaction posting - credit   | Credit, Prepaid            | | TPD                    | Transaction posting - debit    | Credit                     |  Fees originated from the CMS in the standard product | `transactionTypeCode`  | `transactionType`                      | **Product applicability**  | |----------------------- |--------------------------------------- |--------------------------- | | A1F                    | ATM Fee                                | Prepaid                    | | AFM_1                  | BCC CA Annual Fee Main Card            | Prepaid                    | | AUCF                   | Urgent card fee                        | Credit, Prepaid            | | C1F                    | Cash Fee                               | Prepaid                    | | CF1                    | Country Fee                            | Prepaid                    | | FXF                    | Foreign exchange (FX) fee              | Credit                     | | INFC                   | Insurance Fixed Card                   | Credit                     | | INFS                   | Insurance Fixed Single                 | Credit, Prepaid            | | INFSC                  | Insurance Fixed Single Card            | Credit                     | | INP                    | Insurance Percentage                   | Credit                     | | IPP                    | BCC Insurance fee: Payment Protection  | Credit, Prepaid            | | JFA                    | Joining fee                            | Prepaid                    | | LC                     | New Lost Card for PIN Set              | Prepaid                    | | LPF                    | BCC Late Payment Fee                   | Credit                     | | M;                     | New Card for PIN Set                   | Prepaid                    | | M0                     | Plastic Renew Expired                  | Prepaid                    | | M19                    | Plastic Renew Misc (no Prod)           | Credit                     | | M8                     | Plastic Renew Misc                     | Prepaid                    | | MA_1                   | Balance Inquiry Fee                    | Prepaid                    | | MF_1                   | BCC Card Fee Billing                   | Prepaid                    | | MFM                    | Misc Fee Manual                        | Prepaid                    | | MR                     | Replaced Card for PIN Set (no Prod)    | Credit                     | | OVLF                   | OVL Fee                                | Credit                     | | PFMCC                  | Retail Fee based on MC                 | Prepaid                    | | PZ                     | PIN Change Fee                         | Prepaid                    | | RWCBTF                 | Retail with CB Transaction Fee         | Credit                     | | TPF                    | Top-up fee                             | Prepaid                    | | VCP                    | New Card for PIN Set (no Prod)         | Credit                     |  Interests originated from the CMS in the standard credit product | `transactionTypeCode`  | `transactionType`                  | |----------------------- |----------------------------------- | | ILBT3                  | Overdue cash interest              | | ILBT5                  | Overdue balance transfer interest  | | ILC3                   | Balance transfer interest          | | ILC5                   | Overdue retail interest            | | ILR3                   | Retail interest                    | | ILR5                   | Cash interest                      | 
 * @member {String} transactionTypeCode
 */
TransactionTypeInfo.prototype['transactionTypeCode'] = undefined;






export default TransactionTypeInfo;
