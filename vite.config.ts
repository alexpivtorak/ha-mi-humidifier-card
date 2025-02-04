import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ha-mi-humidifier-card.ts'),
      name: 'HaMiHumidifierCard',
      fileName: 'ha-mi-humidifier-card',
      formats: ['es']
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2015',
    rollupOptions: {
      external: [
        'lit',
        'lit/decorators.js',
        'custom-card-helpers'
      ],
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        paths: {
          'lit': 'https://unpkg.com/lit@3.1.0/index.js?module',
          'lit/decorators.js': 'https://unpkg.com/lit@3.1.0/decorators.js?module',
          'custom-card-helpers': 'https://unpkg.com/custom-card-helpers@1.9.0/dist/index.js?module'
        }
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'images/humidifier-1.png',
          dest: 'dist'
        }
      ]
    })
  ]
}); 