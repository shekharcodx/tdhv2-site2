"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[1376px] h-[72px] flex items-center justify-between px-8 
                       rounded-2xl backdrop-blur-md bg-white/10 border-b border-white/20 z-50">
      
      {/* Left Links */}
      <nav className="flex items-center space-x-8 text-white font-medium">
        <Link href="/catalogue" className="flex items-center space-x-1 hover:text-gray-200">
          <span>CATALOGUE</span>
          <span className="text-xs">▼</span>
        </Link>
        <Link href="/about" className="hover:text-gray-200">ABOUT US</Link>
        <Link href="/contacts" className="hover:text-gray-200">CONTACTS</Link>
      </nav>

      {/* Logo */}
      <div className="flex items-center">
        <Image src="/assets/logo.png" alt="Logo" width={120} height={40} />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-gray-800"
          />
        </div>

        {/* Login Button */}
        <button className="bg-[#5c7c7c] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#486464]">
          Log In
        </button>
      </div>
    </header>
  );
}
