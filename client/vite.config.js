import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3052,
    proxy: {
      "/api/v1/": {
        target: "http://localhost:3051",
        changeOrigin: true,
      },
    },
  },
});
// {
//   template: {
//     compilerOptions: {
//       isCustomElement: (tag) => ["md-linedivider"].includes(tag),
//     },
//   },
// }
