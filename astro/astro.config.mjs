// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://a-coruble.github.io/maud-website",
  base: "/maud-website",
  vite: {
    plugins: [tailwindcss()]
  }
});