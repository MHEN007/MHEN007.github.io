import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import '@fontsource/open-sans/400.css'
import '@fontsource/ubuntu-mono/400.css'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
