/**
 * rollup-buble-mocha-boilerplate v1.0.1
 * Rollup + Buble + Mocha
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lib = factory());
}(this, (function () { 'use strict';

  function dependency () {
    return 'I am a dependency';
  }

  function index () { return dependency() + 1; }

  return index;

})));
//# sourceMappingURL=lib.umd.js.map
