import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsc: {
                transform: {
                    react: {
                        throwIfNamespace: false,
                    },
                },
            },
        }),
    ],
    css: {
        postcss: "./postcss.config.js",
    },
});
