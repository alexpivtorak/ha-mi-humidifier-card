import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/ha-mi-humidifier-card.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    entryFileNames: '[name].js',
  },
  plugins: [
    copy({
      targets: [
        { 
          src: 'images/humidifier-1.png',
          dest: 'dist',
          rename: 'humidifier-1.png'
        }
      ],
      verbose: true
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