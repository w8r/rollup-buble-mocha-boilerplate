import config from './rollup.config';

config.output.format = 'es';
config.output.file = 'dist/lib.es6.js';

export default config;
