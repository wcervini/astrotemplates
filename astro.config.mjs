// @ts-check
import { extraIntegrations } from './src/config/modules/integrations.js';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [...extraIntegrations],
});
