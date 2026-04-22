import type { Metadata } from "next";
import { bebasNeue, barlow } from "@/lib/constants/typography";
import { siteConfig } from "@/lib/constants/site";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Navbar/>{children}</body>
    </html>
  );
}
