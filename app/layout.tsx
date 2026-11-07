import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.title}`,
  description: `${portfolio.tagline} ${portfolio.summary}`,
  applicationName: `${portfolio.name} Portfolio`,
  openGraph: {
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.tagline,
    type: "website",
    locale: "en_LK",
    siteName: `${portfolio.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.tagline,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
