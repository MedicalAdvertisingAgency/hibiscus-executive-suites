// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.PUBLIC_WP_GRAPHQL_URL': JSON.stringify(process.env.PUBLIC_WP_GRAPHQL_URL)
    }
  }
});
