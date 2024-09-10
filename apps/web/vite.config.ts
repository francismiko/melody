import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import UnoCSS from "unocss/vite";
import path from "node:path";

export default defineConfig({
	plugins: [react(), TanStackRouterVite(), UnoCSS()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
