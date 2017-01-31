var assert = require('assert');
var numbers = require('./numbers');

describe('Numbers', function () {
  describe('#add', function () {
    it('should return 6 when the numbers are 1 and 5', function () {
      assert.equal(6, numbers.add(1, 5));
    });

    it('should return NaN when the numbers are 1 and NaN', function () {
      assert(isNaN(numbers.add(1, NaN)));
    });

    it('should return undefined when input is string', function () {
      assert(typeof numbers.add(1, 'abc') === 'undefined');
    });
  });

  describe('#addStrings', function () {
    it('should return 6 when the numbers are 1 and 5', function () {
      assert.equal(6, numbers.addStrings('1', '5'));
    });

    it('should return undefined when input is string', function () {
      assert(typeof numbers.addStrings('1', 'abc') === 'undefined');
    });
  });
});