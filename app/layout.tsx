import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "自分の性格や向いてる職種が分かる！RPG適性診断",
	description: "Generated by create next app",
	robots: "nofollow, noindex",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja'>
			<body className={`antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
