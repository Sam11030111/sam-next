import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0c22] text-white">
        <div className="w-[1536px] mx-auto pl-12 pr-12 min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
