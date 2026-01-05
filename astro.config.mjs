import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pureteatime.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  experimental: {
    optimizeHoistedScript: true
  }
});

