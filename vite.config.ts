import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "",
  build: {
    emptyOutDir: false,
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
