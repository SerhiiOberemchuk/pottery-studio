import type { Metadata } from "next";
import { Open_Sans, Fanwood_Text } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const openSans = Open_Sans({
  variable: "--font-family",
  subsets: ["latin"],
});

const fanwoodText = Fanwood_Text({
  weight: "400",
  variable: "--font-second-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POTTERY STUDIO",
  description:
    "Welcome to our pottery studio, where creativity takes shape! Nestled in the heart of artistic expression, our studio is a haven for both beginners and seasoned potters alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${fanwoodText.variable} antialiased`}
      >
        <Header />
        <main>{children}</main> <Footer />
      </body>
    </html>
  );
}
