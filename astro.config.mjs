import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["020e-213-104-203-77.ngrok-free.app"],
    },
  },
  hubspot: {
    portalId: "123456", // Replace with your actual Portal ID
    formId: "abcdefg-1234-hijk-5678-lmnopqrstu" // Replace with your actual Form GUID
  }
});
