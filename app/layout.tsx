import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/open-sans/400.css'
import '@fontsource/ubuntu-mono/400.css'
import '@fontsource-variable/anybody';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MHEN007's Website",
  description: "Personal Portfolio of Matthew Mahendra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      <footer>
        <Footer />
      </footer>
      </body>
    </html>
  );
}
