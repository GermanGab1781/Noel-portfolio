import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noel Maria Caceres",
  description: "Estudio Jurídico de Noel Maria Caceres, resolución de dudas juridicas y consultas virtuales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " mt-[6vh]"}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}