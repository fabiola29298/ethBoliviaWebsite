import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];
import vercel from '@astrojs/vercel/serverless';

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://fabiola29298.github.io/',
  base: '/ethBoliviaWebsite',
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(), astroI18next(), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), compress({
    CSS: true,
    HTML: {
      removeAttributeQuotes: false
    },
    Image: false,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), playformCompress()],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});