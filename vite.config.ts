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
    assetsInlineLimit: 0, // Don't inline any assets
    minify: false // Disable minification for debugging
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/humidifier-1.png',
          dest: 'assets'
        },
        {
          src: 'src/assets/humidifier-1.png',
          dest: '.'
        }
      ]
    })
  ]
}); 