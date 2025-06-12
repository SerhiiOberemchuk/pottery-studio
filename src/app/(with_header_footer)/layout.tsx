import "../globals.css"

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
