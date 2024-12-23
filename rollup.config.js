import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import url from '@rollup/plugin-url';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export default {
  input: 'src/ha-mi-humidifier-card.ts',
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: 'ha-mi-humidifier-card.js',
    assetFileNames: (assetInfo) => {
      if (assetInfo.name.endsWith('.png')) {
        return 'humidifier-1.png';
      }
      return '[name][extname]';
    }
  },
  plugins: [
    url({
      include: ['**/*.png', '**/*.jpg', '**/*.gif'],
      limit: 0
    }),
    resolve(),
    typescript(),
    dev && serve(serveopts),
    !dev && terser(),
  ],
};