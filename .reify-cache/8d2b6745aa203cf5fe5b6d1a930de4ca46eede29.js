"use strict";var describe,it;module.watch(require('mocha'),{describe(v){describe=v},it(v){it=v}},0);var assert;module.watch(require('chai'),{assert(v){assert=v}},1);var lib;module.watch(require('../src/index'),{default(v){lib=v}},2);




console.log(lib);


describe('lib', () => {

  it ('should work', () => {
    assert.equal(1, 1);
  });

});
