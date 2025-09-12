import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// ✅ Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  variable: "--font-poppins",   // add as a CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental app with Next.js & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* ✅ Apply the font globally */}
      <body className={poppins.className}>
        {/* Optional Navbar */}
        {/* <Navbar /> */}

        {children}

        <Footer />
      </body>
    </html>
  );
}
