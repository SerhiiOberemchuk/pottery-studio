import type { Metadata } from 'next';
import { Fanwood_Text, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

const fanwoodText = Fanwood_Text({
  weight: ['400'],
  variable: '--font-fanwood-text',
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pottery Studio',
  description:
    'Welcome to our pottery studio, where creativity takes shape! Nestled in the heart of artistic expression, our studio is a haven for both beginners and seasoned potters alike.',
  icons: '/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fanwoodText.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
