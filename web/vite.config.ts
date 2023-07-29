/// <reference types="vitest" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3434,
    },
    plugins: [react()],
    test: {
        globals: true,
        watch: false,
        useAtomics: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        // parsing CSS is slow
        css: false,
    },
})
