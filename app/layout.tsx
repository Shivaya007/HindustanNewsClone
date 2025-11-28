import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "News-U",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
