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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MastercardProcessingCoreApi);
  }
}(this, function(expect, MastercardProcessingCoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MastercardProcessingCoreApi.Transaction();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      // uncomment below and update the code to test Transaction
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be.a(MastercardProcessingCoreApi.Transaction);
    });

    it('should have the property accountCurrency (base name: "accountCurrency")', function() {
      // uncomment below and update the code to test the property accountCurrency
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property accountCurrencyNumericCode (base name: "accountCurrencyNumericCode")', function() {
      // uncomment below and update the code to test the property accountCurrencyNumericCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property arn (base name: "arn")', function() {
      // uncomment below and update the code to test the property arn
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property authorizationCode (base name: "authorizationCode")', function() {
      // uncomment below and update the code to test the property authorizationCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property authorized (base name: "authorized")', function() {
      // uncomment below and update the code to test the property authorized
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property authorizationId (base name: "authorizationId")', function() {
      // uncomment below and update the code to test the property authorizationId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property baseAmount (base name: "baseAmount")', function() {
      // uncomment below and update the code to test the property baseAmount
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property customTransactionData (base name: "customTransactionData")', function() {
      // uncomment below and update the code to test the property customTransactionData
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property customTransactionCondition (base name: "customTransactionCondition")', function() {
      // uncomment below and update the code to test the property customTransactionCondition
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property customTransactionTypeCode (base name: "customTransactionTypeCode")', function() {
      // uncomment below and update the code to test the property customTransactionTypeCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property feeAmount (base name: "feeAmount")', function() {
      // uncomment below and update the code to test the property feeAmount
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property feeDescription (base name: "feeDescription")', function() {
      // uncomment below and update the code to test the property feeDescription
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property financialDocumentId (base name: "financialDocumentId")', function() {
      // uncomment below and update the code to test the property financialDocumentId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property fxRate (base name: "fxRate")', function() {
      // uncomment below and update the code to test the property fxRate
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property installmentChainId (base name: "installmentChainId")', function() {
      // uncomment below and update the code to test the property installmentChainId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property installmentPlanStatus (base name: "installmentPlanStatus")', function() {
      // uncomment below and update the code to test the property installmentPlanStatus
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property mcc (base name: "mcc")', function() {
      // uncomment below and update the code to test the property mcc
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property mccDescription (base name: "mccDescription")', function() {
      // uncomment below and update the code to test the property mccDescription
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property merchantCountry (base name: "merchantCountry")', function() {
      // uncomment below and update the code to test the property merchantCountry
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property merchantLocation (base name: "merchantLocation")', function() {
      // uncomment below and update the code to test the property merchantLocation
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property merchantName (base name: "merchantName")', function() {
      // uncomment below and update the code to test the property merchantName
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property postingDate (base name: "postingDate")', function() {
      // uncomment below and update the code to test the property postingDate
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property responseCode (base name: "responseCode")', function() {
      // uncomment below and update the code to test the property responseCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property responseCodeDescription (base name: "responseCodeDescription")', function() {
      // uncomment below and update the code to test the property responseCodeDescription
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property rrn (base name: "rrn")', function() {
      // uncomment below and update the code to test the property rrn
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property serviceClassCode (base name: "serviceClassCode")', function() {
      // uncomment below and update the code to test the property serviceClassCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementAmount (base name: "settlementAmount")', function() {
      // uncomment below and update the code to test the property settlementAmount
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementCurrency (base name: "settlementCurrency")', function() {
      // uncomment below and update the code to test the property settlementCurrency
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementCurrencyNumericCode (base name: "settlementCurrencyNumericCode")', function() {
      // uncomment below and update the code to test the property settlementCurrencyNumericCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property sourceContractCbsNumber (base name: "sourceContractCbsNumber")', function() {
      // uncomment below and update the code to test the property sourceContractCbsNumber
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property sourceContractId (base name: "sourceContractId")', function() {
      // uncomment below and update the code to test the property sourceContractId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property sourceContractNumber (base name: "sourceContractNumber")', function() {
      // uncomment below and update the code to test the property sourceContractNumber
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property srn (base name: "srn")', function() {
      // uncomment below and update the code to test the property srn
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property targetContractCbsNumber (base name: "targetContractCbsNumber")', function() {
      // uncomment below and update the code to test the property targetContractCbsNumber
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property targetContractId (base name: "targetContractId")', function() {
      // uncomment below and update the code to test the property targetContractId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property targetContractNumber (base name: "targetContractNumber")', function() {
      // uncomment below and update the code to test the property targetContractNumber
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property tokenNumberSafe (base name: "tokenNumberSafe")', function() {
      // uncomment below and update the code to test the property tokenNumberSafe
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionAmount (base name: "transactionAmount")', function() {
      // uncomment below and update the code to test the property transactionAmount
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionCurrency (base name: "transactionCurrency")', function() {
      // uncomment below and update the code to test the property transactionCurrency
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionCurrencyNumericCode (base name: "transactionCurrencyNumericCode")', function() {
      // uncomment below and update the code to test the property transactionCurrencyNumericCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionDate (base name: "transactionDate")', function() {
      // uncomment below and update the code to test the property transactionDate
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionDescription (base name: "transactionDescription")', function() {
      // uncomment below and update the code to test the property transactionDescription
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionStatus (base name: "transactionStatus")', function() {
      // uncomment below and update the code to test the property transactionStatus
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionTypeCode (base name: "transactionTypeCode")', function() {
      // uncomment below and update the code to test the property transactionTypeCode
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "walletId")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new MastercardProcessingCoreApi.Transaction();
      //expect(instance).to.be();
    });

  });

}));
