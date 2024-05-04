import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://simonxmau.github.io',
  integrations: [
      preact(),
      tailwind({
          applyBaseStyles: false,
          nesting: true,
      }),
  ],
  server: {
    host: true,
    port: 8019
  }
});