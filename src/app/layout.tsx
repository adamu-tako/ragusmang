import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ragusma Farms - Fresh Organic Produce",
  description: "Experience the finest organic produce from Ragusma Farms, where tradition meets innovation in sustainable agriculture. Visit our farm and taste the difference.",
  keywords: "organic farm, fresh vegetables, sustainable agriculture, farm tours, local produce",
  authors: [{ name: "Ragusma Farms" }],
  openGraph: {
    title: "Ragusma Farms - Fresh Organic Produce",
    description: "Experience the finest organic produce from Ragusma Farms, where tradition meets innovation in sustainable agriculture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
