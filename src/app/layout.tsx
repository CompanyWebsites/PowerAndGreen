import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400","500"] });

export const metadata: Metadata = {
  title: "Thapak Power Pvt. Ltd. — Engineering India's Renewable Energy Future",
  description: "Thapak Power Pvt. Ltd. — Technology-driven renewable power development: hydro, solar, wind, hybrid & storage since 2018.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-offwhite">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
