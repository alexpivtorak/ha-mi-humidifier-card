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
        assetFileNames: 'assets/[name].[ext]',
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
    assetsInlineLimit: 0, // Don't inline any assets
    minify: false // Disable minification for debugging
  }
}); 