// import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import stylelint from "vite-plugin-stylelint";
import sitemap from "@qalisa/vike-plugin-sitemap";
import postcssModulesValues from "postcss-modules-values";

export default defineConfig({
    plugins: [
        vike(),
        react({}),
        stylelint(),
        sitemap({
            pagesDir: "src/pages",
            baseUrl: "https://mingteo.com",
        }),
        // tailwindcss(),
    ],
    css: {
        postcss: {
            plugins: [postcssModulesValues],
        },
    },
    build: {
        target: "es2022",
    },
    test: {
        // Vitest options here
        // e.g., set the environment to 'happy-dom' or 'jsdom'
        environment: "node",
        // include your test files
        include: ["src/**/*.test.ts", "src/**/*.spec.ts", "test/**/*.test.ts", "test/**/*.spec.ts"],
        // exclude certain files
        exclude: ["node_modules"],
        // testTransformMode: {
        //     ssr: ["ssr"],
        // },
        // Do I need these?
        // globals: true,
        // mockReset: true,
    },
});
