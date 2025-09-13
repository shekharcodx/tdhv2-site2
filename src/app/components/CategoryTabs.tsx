"use client";
import { useState } from "react";

export default function CategoryTabs() {
  const categories = [
    "Economy Cars",
    "Luxury Cars Rental Dubai",
    "Sports Cars Rental Dubai",
    "Muscle Cars",
    "Special Edition",
    "No Deposit Cars",
    "Electric Cars",
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className="
        flex items-center gap-2 px-4 
        w-full max-w-[1292px] h-[60px] mx-auto
        rounded-full 
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)]
        bg-white
        overflow-y-auto
         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
      "
    >
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`
            flex-1 flex items-center justify-center
            text-sm font-medium whitespace-nowrap transition
            h-[40px] px-4 py-1 rounded-full transition ${
              activeIndex === idx
                ? "bg-[#263337] text-white"
                : "text-gray-800 hover:bg-[#263337]/80 hover:text-white"
            }
          `}
        >
          {/* <span
            className={`px-4 py-1 rounded-full transition ${
              activeIndex === idx
                ? "bg-[#263337] text-white"
                : "text-gray-800 hover:bg-[#263337]/80 hover:text-white"
            }`}
          > */}
          {cat}
          {/* </span> */}
        </button>
      ))}
    </div>
  );
}
