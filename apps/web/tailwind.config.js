/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/ui/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				shine: "shine var(--duration) infinite linear",
			},
			keyframes: {
				shine: {
					"0%": {
						"background-position": "100% 100%",
					},
					"50%": {
						"background-position": "0% 0%",
					},
					"100%": {
						"background-position": "100% 100%",
					},
				},
			},
		},
	},
	plugins: [],
};
