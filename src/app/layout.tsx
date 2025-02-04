import type { Metadata } from "next";
import "./globals.css"; 
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Georgie.dev",
  description: "Your App Description",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  );
}
