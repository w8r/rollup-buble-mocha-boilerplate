import config from './rollup.config';

config.output.format = 'umd';
config.output.file = 'dist/lib.umd.js';
config.output.name = 'lib';

export default config;
