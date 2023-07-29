import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // parsing CSS is slow
    css: false,
  },
});
