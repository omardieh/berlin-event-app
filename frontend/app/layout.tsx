import FooterNavbar from "@/components/FooterNavbar";
import HeaderNavbar from "@/components/HeaderNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berlin's App",
  description: "All about Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} h-full flex-col items-center justify-center bg-gray-50`}
      >
        <header className="bg-white shadow-md w-full">
          <HeaderNavbar />
        </header>
        <main className="w-full flex-grow flex items-center justify-center bg-gray-100">
          {children}
        </main>
        <footer className="w-full bg-gray-800 text-white">
          <FooterNavbar />
        </footer>
      </body>
    </html>
  );
}
