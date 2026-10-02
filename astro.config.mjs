import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://holtonhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
