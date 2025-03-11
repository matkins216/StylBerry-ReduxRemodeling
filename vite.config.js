// https://vitejs.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import VitePluginRadar from "vite-plugin-radar";

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-RN6Q9X7NG3",
      },
    }),
  ],
  base: '/',
  server: {
    open: true,
    hmr: true
  },

  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
