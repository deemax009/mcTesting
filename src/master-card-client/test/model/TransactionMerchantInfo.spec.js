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
    instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
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

  describe('TransactionMerchantInfo', function() {
    it('should create an instance of TransactionMerchantInfo', function() {
      // uncomment below and update the code to test TransactionMerchantInfo
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be.a(MastercardProcessingCoreApi.TransactionMerchantInfo);
    });

    it('should have the property mcc (base name: "mcc")', function() {
      // uncomment below and update the code to test the property mcc
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be();
    });

    it('should have the property mccDescription (base name: "mccDescription")', function() {
      // uncomment below and update the code to test the property mccDescription
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be();
    });

    it('should have the property merchantCountry (base name: "merchantCountry")', function() {
      // uncomment below and update the code to test the property merchantCountry
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be();
    });

    it('should have the property merchantLocation (base name: "merchantLocation")', function() {
      // uncomment below and update the code to test the property merchantLocation
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be();
    });

    it('should have the property merchantName (base name: "merchantName")', function() {
      // uncomment below and update the code to test the property merchantName
      //var instance = new MastercardProcessingCoreApi.TransactionMerchantInfo();
      //expect(instance).to.be();
    });

  });

}));
