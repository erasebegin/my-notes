import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://erasebegin.github.io",
  base: "my-notes",
  integrations: [mdx(), sitemap()],
});
