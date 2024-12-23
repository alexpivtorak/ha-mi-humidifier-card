import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ha-mi-humidifier-card.ts'),
      name: 'HaMiHumidifierCard',
      fileName: 'ha-mi-humidifier-card',
      formats: ['iife']
    },
    rollupOptions: {
      // Don't treat these as external
      external: [],
      output: {
        inlineDynamicImports: true,
        format: 'iife',
        name: 'HaMiHumidifierCard',
        extend: true
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2015',
    minify: 'esbuild'
  }
}); 