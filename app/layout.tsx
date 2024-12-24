import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/app/_components/sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";


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
