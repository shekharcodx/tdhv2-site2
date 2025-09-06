//import Navbar from "./components/Navbar";
import "./globals.css";
import  Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        {<Hero/>}
        {/* Footer here */}
      </body>
    </html>
  );
}
