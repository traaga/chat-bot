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
			primary: "#EEB5EB",
			secondary: "#C26DBC",
			background: "whitesmoke",
			foreground: "white",
			primarytext: "#616161",
			disabled: "#dddddd",
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
