import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from '@/components/Header';
export const metadata = {
  title: "News-U",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto">
          <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
