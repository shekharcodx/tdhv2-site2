import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

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
      <body className={`${poppins.className} !bg-off-white mx-auto`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
