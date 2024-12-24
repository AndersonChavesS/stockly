import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/app/_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Stockly",
  description: "Simple store system",
};

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="./stocky-favicon.png"
          type="image/x-icon"
        />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full bg-blue-100">
          <Sidebar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
