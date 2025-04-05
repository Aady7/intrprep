import type { Metadata } from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const monasans=Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "InterPrep",
  description: "Prepare for your interviews with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body
        className={`${monasans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
