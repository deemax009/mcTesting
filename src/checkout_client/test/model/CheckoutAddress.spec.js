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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi);
  }
}(this, function(expect, CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
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

  describe('CheckoutAddress', function() {
    it('should create an instance of CheckoutAddress', function() {
      // uncomment below and update the code to test CheckoutAddress
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be.a(CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property line1 (base name: "line1")', function() {
      // uncomment below and update the code to test the property line1
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property line2 (base name: "line2")', function() {
      // uncomment below and update the code to test the property line2
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property line3 (base name: "line3")', function() {
      // uncomment below and update the code to test the property line3
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new CheckoutSaveCardOnFileDeleteSavedCardOnFileAndConfirmationsApi.CheckoutAddress();
      //expect(instance).to.be();
    });

  });

}));
