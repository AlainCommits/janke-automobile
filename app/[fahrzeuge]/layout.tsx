import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GradientBorderNav } from '@/components/navigation/NavVariants';
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janke Automobile",
  description: "Auto An- und Verkauf",
  keywords: ["Automobile", "Car Sales", "Car Purchase", "Car Dealership", "Auto", "Autos", "Auto-Verkauf", "Auto-Ankauf", "Car", "Cars", "Dealership", "Sell", "Buy", "Verkauf", "Ankauf", "Janke", "Janke Auto", "Janke Autos", "Janke Cars", "Janke Dealership", "Janke Sell", "Janke Buy", "Janke Verkauf", "Janke Ankauf"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              {/* <GradientBorderNav /> */}
        <main className="min-h-screen">
          {children}
          <Analytics />

        </main>
        <Footer />
      </body>
    </html>
  );
}
