import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';
import path from 'path';
import reactSwc from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        reactSwc(),
        ghPages({
            branch: 'gh-pages',
            dotfiles: true,
        }),
    ],

    base: '/ReactShowcase/',

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
        `,
            },
        },
    },
});
