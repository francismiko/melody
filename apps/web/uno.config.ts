import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	rules: [
		["bg-primary", { "background-color": "var(--primary)" }],
		["text-primary", { color: "var(--primary-text)" }],
	],
});
