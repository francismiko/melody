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
			boxShadow: {
				"natural-1": `
          inset 0 1px 1px rgba(255, 255, 255, 0.6),
          inset 0 -1px 1px rgba(0, 0, 0, 0.05),
          0 2px 4px rgba(0, 0, 0, 0.1),
          0 4px 8px rgba(0, 0, 0, 0.08)`,
				"natural-2": `
          inset 0 1px 1px rgba(255, 255, 255, 0.6),
          inset 0 -1px 1px rgba(0, 0, 0, 0.05),
          0 4px 8px rgba(0, 0, 0, 0.1),
          0 8px 16px rgba(0, 0, 0, 0.08),
          0 12px 24px rgba(0, 0, 0, 0.06);`,
				"natural-3": `
          inset 0 1px 1px rgba(255, 255, 255, 0.6),
          inset 0 -1px 1px rgba(0, 0, 0, 0.05),
          0 8px 16px rgba(0, 0, 0, 0.1),
          0 16px 32px rgba(0, 0, 0, 0.08),
          0 24px 48px rgba(0, 0, 0, 0.06),
          0 32px 64px rgba(0, 0, 0, 0.04);`,
				"natural-4": `
          inset 0 1px 1px rgba(255, 255, 255, 0.6),
          inset 0 -1px 1px rgba(0, 0, 0, 0.05),
          0 12px 24px rgba(0, 0, 0, 0.1),
          0 24px 48px rgba(0, 0, 0, 0.08),
          0 36px 72px rgba(0, 0, 0, 0.06),
          0 48px 96px rgba(0, 0, 0, 0.04)`,
				"custom-dark": "0px 0px 500px #2e1264",
			},
		},
	},
	plugins: [],
};
