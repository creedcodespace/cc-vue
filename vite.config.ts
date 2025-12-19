import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi']
	},
  build: {
    rollupOptions: {
      // Treat public asset absolute URLs as external so Rollup doesn't try to resolve them as module imports
      external: (id: string) => id.startsWith('/assets/')
    }
  }
});
