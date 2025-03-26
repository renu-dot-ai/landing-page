import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon"; // Make sure this is correct
import { loadEnv } from "vite";

const { VITE_POSTHOG_API_KEY, VITE_POSTHOG_API_HOST } = loadEnv(process.env.mode, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://fast-fwd.netlify.app",
  env: {
    schema: {
      VITE_POSTHOG_API_KEY: envField.string({ context: "client", access: "public", default: JSON.stringify(VITE_POSTHOG_API_KEY) }),
      VITE_POSTHOG_API_HOST: envField.string({ context: "client", access: "public", default: JSON.stringify(VITE_POSTHOG_API_HOST) })
    }
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({ iconSets: ["ph", "solar"] }), // Correctly add Phosphor icon set here
  ],
  vite: {
    define: {
      VITE_POSTHOG_API_KEY: JSON.stringify(VITE_POSTHOG_API_KEY),
      VITE_POSTHOG_API_HOST: JSON.stringify(VITE_POSTHOG_API_HOST)
    },
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: [],
    },
  },
});
