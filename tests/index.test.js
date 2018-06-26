import { assert } from 'chai';
import lib from '../src/index';


describe('lib', () => {

  it('should work', () => {
    const n = 5;
    assert.equal(lib(n), `I am a dependency + ${n}`);
    assert.equal(1, 1);
  });
});
