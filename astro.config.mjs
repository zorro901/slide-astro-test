import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://zorro901.github.io",
  base: "/slides",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});