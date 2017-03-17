import { describe, it } from 'mocha';
import { assert }       from 'chai';

import lib from '../src/index';

console.log(lib);


describe('lib', () => {

  it ('should work', () => {
    assert.equal(1, 1);
  });

});
