import config from './rollup.config';

config.format     = 'umd';
config.dest       = 'dist/lib.umd.js';
config.moduleName = 'lib';

export default config;
