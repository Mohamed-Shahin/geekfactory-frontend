var assert = require('assert');
var strings = require('./strings');

describe('Strings', function () {
  describe('#camelCase', function () {
    it('should return "save the day" when given "saveTheDay"', function () {
      assert.equal('save the day', strings.camelCase('saveTheDay'));
    });
  });

  describe('#isUpperCase', function () {
    it('should return true when string is upper case', function () {
      assert.equal(true, strings.isUpperCase('GEEKFACTORY'));
    });

    it('should return false when string is lower case', function () {
      assert.equal(false, strings.isUpperCase('geekfactory'));
    });

    it('should return undefined when input not a string', function () {
      assert(typeof strings.isUpperCase(1) === 'undefined');
    });
  });
});