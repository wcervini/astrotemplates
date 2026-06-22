// @ts-check
import { defineConfig } from 'astro/config';
import { tIntegration } from './src/config/modules/tailwindIntegration.js';
import { iIntegration } from "./src/config/modules/iconIntegration.js";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tIntegration,
    iIntegration,
  ]
});
