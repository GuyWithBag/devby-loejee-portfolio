import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Appbar from "@/components/appbar/Appbar";
import AnimatePageProvider from "@/providers/AnimatePageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Meet Loejee!",
	description: "Portfolio Showcase!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					<Theme>
						<Appbar />
						<div className="min-h-screen bg-pipboyBackground">
							<AnimatePageProvider>{children}</AnimatePageProvider>
						</div>
					</Theme>
				</main>
			</body>
		</html>
	);
}
