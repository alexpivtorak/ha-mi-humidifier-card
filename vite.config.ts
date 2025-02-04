import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ha-mi-humidifier-card.ts'),
      name: 'MiHumidifierCard',
      fileName: 'mi-humidifier-card',
      formats: ['es']
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2015',
    rollupOptions: {
      external: [/^lit/, /^custom-card-helpers/],
      output: {
        format: 'es',
        entryFileNames: '[name].js'
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