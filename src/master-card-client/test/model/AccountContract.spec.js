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
    instance = new MastercardProcessingCoreApi.AccountContract();
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

  describe('AccountContract', function() {
    it('should create an instance of AccountContract', function() {
      // uncomment below and update the code to test AccountContract
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be.a(MastercardProcessingCoreApi.AccountContract);
    });

    it('should have the property accountContractBalances (base name: "accountContractBalances")', function() {
      // uncomment below and update the code to test the property accountContractBalances
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractId (base name: "accountContractId")', function() {
      // uncomment below and update the code to test the property accountContractId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractLevel (base name: "accountContractLevel")', function() {
      // uncomment below and update the code to test the property accountContractLevel
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractName (base name: "accountContractName")', function() {
      // uncomment below and update the code to test the property accountContractName
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractNumber (base name: "accountContractNumber")', function() {
      // uncomment below and update the code to test the property accountContractNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractOwner (base name: "accountContractOwner")', function() {
      // uncomment below and update the code to test the property accountContractOwner
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractStatusData (base name: "accountContractStatusData")', function() {
      // uncomment below and update the code to test the property accountContractStatusData
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property accountContractSubtype (base name: "accountContractSubtype")', function() {
      // uncomment below and update the code to test the property accountContractSubtype
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property additionalParameters (base name: "additionalParameters")', function() {
      // uncomment below and update the code to test the property additionalParameters
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property amendmentDate (base name: "amendmentDate")', function() {
      // uncomment below and update the code to test the property amendmentDate
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property amendmentOfficerId (base name: "amendmentOfficerId")', function() {
      // uncomment below and update the code to test the property amendmentOfficerId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property amendmentOfficerName (base name: "amendmentOfficerName")', function() {
      // uncomment below and update the code to test the property amendmentOfficerName
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property billingAccountContractId (base name: "billingAccountContractId")', function() {
      // uncomment below and update the code to test the property billingAccountContractId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property billingAccountContractNumber (base name: "billingAccountContractNumber")', function() {
      // uncomment below and update the code to test the property billingAccountContractNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property branchCode (base name: "branchCode")', function() {
      // uncomment below and update the code to test the property branchCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property branchName (base name: "branchName")', function() {
      // uncomment below and update the code to test the property branchName
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property cbsNumber (base name: "cbsNumber")', function() {
      // uncomment below and update the code to test the property cbsNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property currencyNumericCode (base name: "currencyNumericCode")', function() {
      // uncomment below and update the code to test the property currencyNumericCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property dateClose (base name: "dateClose")', function() {
      // uncomment below and update the code to test the property dateClose
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property dateOpen (base name: "dateOpen")', function() {
      // uncomment below and update the code to test the property dateOpen
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property lastBillingDate (base name: "lastBillingDate")', function() {
      // uncomment below and update the code to test the property lastBillingDate
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property leaf (base name: "leaf")', function() {
      // uncomment below and update the code to test the property leaf
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property liabilityAccountContractId (base name: "liabilityAccountContractId")', function() {
      // uncomment below and update the code to test the property liabilityAccountContractId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property liabilityAccountContractNumber (base name: "liabilityAccountContractNumber")', function() {
      // uncomment below and update the code to test the property liabilityAccountContractNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property liabilityCategory (base name: "liabilityCategory")', function() {
      // uncomment below and update the code to test the property liabilityCategory
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property mainProductCode (base name: "mainProductCode")', function() {
      // uncomment below and update the code to test the property mainProductCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property nextBillingDate (base name: "nextBillingDate")', function() {
      // uncomment below and update the code to test the property nextBillingDate
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property parentAccountContractId (base name: "parentAccountContractId")', function() {
      // uncomment below and update the code to test the property parentAccountContractId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property parentAccountContractNumber (base name: "parentAccountContractNumber")', function() {
      // uncomment below and update the code to test the property parentAccountContractNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property parentProductCode (base name: "parentProductCode")', function() {
      // uncomment below and update the code to test the property parentProductCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property pastDueDate (base name: "pastDueDate")', function() {
      // uncomment below and update the code to test the property pastDueDate
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property pastDueDays (base name: "pastDueDays")', function() {
      // uncomment below and update the code to test the property pastDueDays
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property productCode (base name: "productCode")', function() {
      // uncomment below and update the code to test the property productCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property serviceGroupCode (base name: "serviceGroupCode")', function() {
      // uncomment below and update the code to test the property serviceGroupCode
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property serviceGroupName (base name: "serviceGroupName")', function() {
      // uncomment below and update the code to test the property serviceGroupName
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property topAccountContractId (base name: "topAccountContractId")', function() {
      // uncomment below and update the code to test the property topAccountContractId
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

    it('should have the property topAccountContractNumber (base name: "topAccountContractNumber")', function() {
      // uncomment below and update the code to test the property topAccountContractNumber
      //var instance = new MastercardProcessingCoreApi.AccountContract();
      //expect(instance).to.be();
    });

  });

}));