import { FooterNavbar, HeaderNavbar } from "@/common/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Head> */}
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} h-full flex-col items-center justify-center bg-gray-50`}
      >
        <>
          <header className="bg-white shadow-md w-full">
            <HeaderNavbar />
          </header>
          <main className="w-full flex-grow flex items-center justify-center bg-gray-100">
            {children}
          </main>
          <footer className="w-full bg-gray-800 text-white">
            <FooterNavbar />
          </footer>
        </>
        <Script
          src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin="anonymous"
          rel="preload"
        />
      </body>
    </html>
  );
}
