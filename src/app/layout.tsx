// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTopButton from "@/components/ui/scrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `Rent A Car | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: "Car rental app with Next.js & Tailwind",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} !bg-off-white  mx-auto`}>
        <Navbar /> {/* Navbar will manage modal itself */}
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
