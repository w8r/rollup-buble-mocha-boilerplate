import resolve    from 'rollup-plugin-node-resolve';
import commonjs   from 'rollup-plugin-commonjs';
import buble      from 'rollup-plugin-buble';
import multiEntry from 'rollup-plugin-multi-entry';
import pkg        from './package.json';

const { version, author, name, main, license, description } = pkg;

const banner = `\
/**
 * ${name} v${version}
 * ${description}
 *
 * @author ${author}
 * @license ${license}
 * @preserve
 */
`;

export default [{
  input: 'src/index.js',
  output: {
    file: main,
    name: 'lib',
    sourcemap: true,
    format: 'umd',
    banner
  },
  plugins: [
    resolve(),  // so Rollup can find external libs
    commonjs(), // so Rollup can convert commonJS to an ES module
    buble()
  ]
}, {
  input: 'src/index.js',
  output: {
    file: pkg.module,
    name: 'lib',
    sourcemap: true,
    format: 'esm',
    banner
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}, {
  input: 'tests/**/*.test.js',
  output: {
    file: 'dist/tests.bundle.js',
    name: 'lib',
    sourcemap: true,
    format: 'iife',
    banner,
    globals: {
      chai: 'chai',
      it: 'it',
      describe: 'describe'
    }
  },
  external: ['chai', 'it', 'describe'],
  plugins: [
    resolve(),
    commonjs(),
    multiEntry(),
    buble()
  ]
}];
