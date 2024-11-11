import type { Metadata } from "next";
import localFont from "next/font/local";
import { inter } from "./components/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aman Jakhar : UX Designer & Developer",
  description:
    "Aman Jakhar : Hello there, I'm a designer & Developer who cares about making beautiful things that help people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
