import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://briqmx.github.io',
  base: '/careers',
  integrations: [tailwind()]
});