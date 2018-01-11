import buble from 'rollup-plugin-buble';

export default {
    input: 'src/index.js',
    plugins: [buble()],
    output: {sourcemap: true}
};
