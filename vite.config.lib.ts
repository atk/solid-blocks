import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "",
  build: {
    cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: "src/blocks/index.ts",
      formats: ['es', 'cjs', 'umd'],
      name: "solid-blocks",
    },
    rollupOptions: {
      external: ['solid-js'],
    },
    sourcemap: true,
    target: "modules",
    polyfillDynamicImport: false,
  },
});
