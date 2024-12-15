import MillionLint from "@million/lint";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		MillionLint.vite({
			enabled: false,
		}),
		react(),
		TanStackRouterVite(),
		UnoCSS(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
