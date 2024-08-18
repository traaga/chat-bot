import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				"4xl": "2.5rem",
			},
			width: {
				// 100% - button width - gap
				"textarea": "calc(100% - 36px - 16px)",
			},
		},
		colors: {
			primary: "#7422ff",
			secondary: "#a874ff",
			background: "whitesmoke",
			foreground: "white",
			primarytext: "#616161",
			disabled: "#dddddd",
		},
	},
};
export default config;
