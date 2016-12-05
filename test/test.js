var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function (){
      assert.equal(-1, [1,2,3].indexOf(4));
    })
  })
});

var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

var C = require('../cash.js'); // cash module

describe('Cash Register', function() {
  describe('Module C', function() {
    it('should have a getChange Method', function (){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
    it('getChange(210,300) should equal to [50,20,20]', function() {
      assert.deepEqual(C.getChange(210,300), [50,20,20]);
    })
    it('getChange(486,1000) should equal to [500, 10, 2, 2]', function() {
      assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
    })
  })
});
