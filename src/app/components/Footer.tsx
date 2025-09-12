"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-12 sm:py-16">
      {/* Inner content container */}
      <div className="max-w-[1312px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {/* Left Section (Logo + Info) */}
        <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={160}
            height={40}
            priority
          />
          <p className="leading-relaxed text-sm">Book your free consultation now!</p>
          <p className="leading-relaxed text-sm">1800 123 4567</p>
          <p className="leading-relaxed text-sm">info@drivehub.io</p>
          <p className="leading-relaxed text-sm">
            Level 1, 12 Sample St, Sydney NSW 2000
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h3 className="font-semibold mb-2">Menu</h3>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Car Rental App</a>
        </div>

        {/* Fast Links */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h3 className="font-semibold mb-2">Fast Links</h3>
          <a href="#" className="hover:underline">Book</a>
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">My profile</a>
          <a href="#" className="hover:underline">Wishlist</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border rounded-full flex-1"
            />
            <button className="px-4 py-2 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <p className="text-xs leading-snug">
            By subscribing you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-[1312px] mx-auto mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-0">
        <p>© 2025. All rights reserved.</p>
        <div className="flex gap-4 items-center justify-center sm:justify-start">
          <a href="#"><Image src="/assets/Facebook.svg" alt="Facebook" width={20} height={20} /></a>
          <a href="#"><Image src="/assets/Instagram.svg" alt="Instagram" width={20} height={20} /></a>
          <a href="#"><Image src="/assets/X.svg" alt="Twitter" width={20} height={20} /></a>
          <a href="#"><Image src="/assets/LinkedIn.svg" alt="LinkedIn" width={20} height={20} /></a>
          <a href="#"><Image src="/assets/Youtube.svg" alt="YouTube" width={20} height={20} /></a>
        </div>
      </div>
    </footer>
  );
}
