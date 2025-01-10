import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import gradient from "@/assets/Ellipse.png";

const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Skala Media Group",
  description: "Created by Byteorange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased min-h-screen flex flex-col`}>
        <div className="lg:absolute right-0 top-0 hidden">
          <Image src={gradient} alt="gradient"></Image>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
