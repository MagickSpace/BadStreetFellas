import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});