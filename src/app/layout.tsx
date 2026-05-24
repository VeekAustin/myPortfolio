import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../utils/navbar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Augustine's Portfolio",
  description: "Frontend Developer Portfolio — Built with Next.js, Tailwind CSS, App Router",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d1117]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
