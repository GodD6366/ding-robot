import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import typescript from 'rollup-plugin-typescript';

export default {
    entry: 'src/index.ts',
    output: {
        exports: 'named',
    },
    format: 'cjs',
    dest: 'lib/index.js',
    moduleName: 'ding-robot',
    plugins: [typescript({ lib: ['es5', 'es6', 'es7'], target: 'es5' }), uglify({}, minify)],
};
