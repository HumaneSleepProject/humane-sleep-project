import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Stars from "@/components/layout/Stars";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Humane Sleep Project",
  description: "A nonprofit organization dedicated to improving sleep health and awareness",
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col min-h-screen relative">
          <Stars />
          <Navigation />
          <main className="flex-grow pt-[64px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
