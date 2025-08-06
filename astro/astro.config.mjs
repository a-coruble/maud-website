// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://maud-website.netlify.app",
  // base: "/maud-website",
  vite: {
    plugins: [tailwindcss()]
  }
});