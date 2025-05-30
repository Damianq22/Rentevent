// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  output: "static", // ✅ Cambiado a "static"
  base: "/AlquilerApp/", // ✅ Cambia esto al nombre real de tu repositorio
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
