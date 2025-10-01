"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="md:w-full ">
      <div className="px-[24px] pt-[80px] md:px-[32px] lg:px-[64px] md:py-[80px] bg-white">
        {/* Inner content container */}
        <div className="block md:flex justify-between max-w-[1312px] mx-auto">
          {/* Left Section (Logo + Info) */}
          <div className="max-w-sm lg:mx-0 text-left md:text-center lg:text-left">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              className="w-[220px]"
              width={160}
              height={40}
              priority
            />
            <p className="leading-relaxed text-sm mt-[30px] text-black">
              Book your free consultation now!
            </p>
            <p className="leading-relaxed text-sm text-black">1800 123 4567</p>
            <p className="leading-relaxed text-sm text-black">
              info@drivehub.io
            </p>
            <p className="leading-relaxed text-sm text-black">
              Level 1, 12 Sample St, Sydney NSW 2000
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-1 mt-[64px] md:mt-0">
            {/* Menu */}
            <div className="flex flex-col gap-2 text-left md:text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-2 text-black">Menu</h3>
              <a href="#" className="text-base hover:underline">
                Home
              </a>
              <a href="#" className="text-base hover:underline text-black">
                About us
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Services
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Car Rental App
              </a>
            </div>

            {/* Fast Links */}
            <div className="flex flex-col gap-2 text-left md:text-center sm:text-left mt-[20px] md:mt-0">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Fast Links
              </h3>
              <a href="#" className="text-base hover:underline text-black">
                Book
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Privacy policy
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Contact Us
              </a>
              <a href="#" className="text-base hover:underline text-black">
                My profile
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Wishlist
              </a>
            </div>

            <div className="flex flex-col gap-2 text-left md:text-center sm:text-left mt-[20px] md:mt-0">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Main Categories
              </h3>
              <a href="#" className="text-base hover:underline text-black">
                Luxury Cars
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Sport Cars
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Electric Cars
              </a>
              <a href="#" className="text-base hover:underline text-black">
                Muscle Cars
              </a>
              <a href="#" className="text-base hover:underline text-black">
                SUV Cars
              </a>
            </div>

            <div className="flex flex-col gap-2 text-left md:text-center sm:text-left mt-[20px] md:mt-0">
              <h3 className="text-lg font-semibold mb-2 text-black">
                For Inquires
              </h3>
              <a href="#" className="text-base hover:underline text-black">
                +971564727007
              </a>
              <a href="#" className="text-base hover:underline text-black">
                info@thedrivehub.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
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
        </div> */}
        </div>

        {/* Bottom row */}
        <div className="max-w-[1312px] mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-0 border-t border-[#C0D4D6] pt-[32px] mt-[80px] pb-[50px] md:pb-0">
          <p className="text-black">© 2025. All rights reserved.</p>
          <div className="flex gap-4 items-center justify-center sm:justify-start">
            <a href="#">
              <Image
                src="/assets/Facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/Instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image src="/assets/X.svg" alt="Twitter" width={20} height={20} />
            </a>
            <a href="#">
              <Image
                src="/assets/LinkedIn.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/Youtube.svg"
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
