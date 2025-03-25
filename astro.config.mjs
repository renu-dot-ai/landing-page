import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon"; // Make sure this is correct

// https://astro.build/config
export default defineConfig({
  site: "https://renu-ai.netlify.app",
  integrations: [
    mdx(),
    sitemap(),
    icon({ iconSets: ["ph", "solar"] }) // Correctly add Phosphor icon set here
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [],
    },
  },
});
