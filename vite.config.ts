import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ha-mi-humidifier-card.ts'),
      name: 'HaMiHumidifierCard',
      fileName: 'ha-mi-humidifier-card',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // Provide global variables for external packages
        globals: {
          'lit': 'Lit',
          'lit/decorators.js': 'LitDecorators',
          'custom-card-helpers': 'CustomCardHelpers'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2015',
    minify: false // Disable minification for debugging
  }
}); 