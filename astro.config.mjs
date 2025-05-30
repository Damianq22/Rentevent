import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  // base: "/",  // Opcional para Netlify, puedes dejarlo comentado o eliminarlo
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});