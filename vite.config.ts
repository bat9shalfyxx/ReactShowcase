import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages',
      dotfiles: true
    }),
  ],
  
  base: "/ReactShowcase/",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables" as *;
          @use "@/styles/mixins" as *;
        `
      }
    }
  },
})
