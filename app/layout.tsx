import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { Sora } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel - Mellow",
  description: "Det bedste hotel i København",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="dk">
      <body
        className={` ${sora.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
