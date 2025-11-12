import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tinashe Makamure | Senior Software & AI Engineer",
  description: "Professional portfolio of Tinashe Makamure - Senior Software Engineer specializing in AI Engineering, Cloud (AWS/Azure), Data Engineering, and Software Development",
  keywords: ["Software Engineer", "AI Engineer", "AWS", "Azure", "Cloud Computing", "Data Engineering", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
