// @ts-check
import { defineConfig } from 'astro/config';
import { extraIntegrations } from './src/config/modules/integrations.js';

// https://astro.build/config
export default defineConfig({
  integrations: [
    ...extraIntegrations
  ]
});
