import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "retips",
  description: "Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="grid lg:grid-cols-12 md:grid-cols-1 mx-10 py-6 sm:py-8 lg:py-12">
          <div className="col-span-8 gap-4 overflow-hidden rounded-lg border ">
            {children}
          </div>
          <div className="col-span-4">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
