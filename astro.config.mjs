import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://livebugil.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});