'use client'
import { useEffect } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'aos/dist/aos.css';
import AOS from "aos"; // Import AOS
import Footer from "./componemts/Footer";
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
