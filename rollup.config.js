import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';

export default {
  input: 'src/ha-mi-humidifier-card.ts',
  output: {
    dir: '.',
    format: 'es',
    entryFileNames: 'ha-mi-humidifier-card.js',
    assetFileNames: 'images/[name][extname]'
  },
  plugins: [
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.gif'],
      limit: 0,
    }),
    nodeResolve(),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};