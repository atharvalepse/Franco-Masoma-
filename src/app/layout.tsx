import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Franco Masoma | Clothing Shaped By Life",
  description:
    "Clothing Shaped By Life. Private consultations. Italian craftsmanship. Designed for how you live.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`light ${garamond.variable} ${inter.variable}`}
    >
      <head>
        {/* Material Symbols served via stylesheet link so the icon font is fetched */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        {/* pt-20 = 80px = fixed header height. Single source of offset. */}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
