import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer-form";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    template: "%s | METROCAT",
    default: "METRO CAT"
  },
  description: "METRO CAT FORM REPORT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
