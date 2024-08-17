import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Chat Bot",
	description: "Chat Bot for Andmeteadus OÜ application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={manrope.className}>{children}</body>
			<SpeedInsights />
		</html>
	);
}
