import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../utils/navbar";
import Footer from '../components/footer';


const inter = Inter({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Augustine's Portfolio",
  description: "Frontend Developer POrtfolio -Build with Next.js, tailwind css, App Router",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}