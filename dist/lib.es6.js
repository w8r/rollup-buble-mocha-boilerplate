/**
 * rollup-buble-mocha-boilerplate v1.0.1
 * Rollup + Buble + Mocha
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */

function dependency () {
  return 'I am a dependency';
}

var index = (n) => `${dependency()} + ${n}`;

export default index;
//# sourceMappingURL=lib.es6.js.map
