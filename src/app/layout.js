import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogosphere",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-300 min-h-screen`}
      >
        <Navbar></Navbar>
        <section className="min-h-screen">{children}</section>
        <Footer></Footer>
      </body>
    </html>
  );
}
