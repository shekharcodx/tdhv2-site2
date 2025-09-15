import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import Image from "next/image";
import Navbar from "./components/Navbar";

// ✅ Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  variable: "--font-poppins", // add as a CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental app with Next.js & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ Apply the font globally */}
      <body
        className={`${poppins.className} !bg-[#F2F2F2] max-w-[1440px] mx-auto`}
      >
        {/* Optional Navbar */}
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
