import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
import Bootstrapjs from "../Components/Bootstrapjs"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar/Navbar";
import Footer from "@/Components/footer/Footer";
const cairoInit = Cairo({
  variable: "--font-Cairo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baby Tracker",
  description: "Baby Tracker Graduation Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Bootstrapjs />
      <body className={`${cairoInit.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
