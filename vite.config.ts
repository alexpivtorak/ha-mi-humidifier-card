import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ha-mi-humidifier-card.ts'),
      name: 'HaMiHumidifierCard',
      fileName: 'ha-mi-humidifier-card',
      formats: ['iife']
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2015',
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: '[name].js',
        extend: true,
        globals: {
          lit: 'lit',
          'lit/decorators.js': 'litDecorators',
          'custom-card-helpers': 'customCardHelpers'
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