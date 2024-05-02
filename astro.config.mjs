import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: 'https://simonxmau.github.io',
    integrations: [preact()],
    server: {
        host: true,
        port: 8019,
    }
});
