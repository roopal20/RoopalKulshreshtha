import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

/**
 * GitHub Pages setup
 * -----------------
 * Project site (repo: RoopalKulshreshtha):
 *   site: "https://roopal20.github.io"
 *   base: "/RoopalKulshreshtha"
 *
 * User site (repo: username.github.io):
 *   site: "https://roopal20.github.io"
 *   base: "/"
 */
const SITE = "https://roopal20.github.io";
const BASE = "/RoopalKulshreshtha";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
