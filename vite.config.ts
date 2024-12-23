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
      external: [
        'lit',
        'lit/decorators.js',
        'custom-card-helpers'
      ],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'LitDecorators',
          'custom-card-helpers': 'CustomCardHelpers'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
}); 