// import Navbar from "./components/Navbar";
import "./globals.css";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Optional Navbar */}
        {/* <Navbar /> */}

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
