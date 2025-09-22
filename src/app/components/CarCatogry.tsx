"use client";

import { useState } from "react";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, name: "Luxury Cars", image: "/assets/c2.svg" },
  { id: 2, name: "Economy Cars", image: "/assets/c1.svg" },
  { id: 3, name: "Sports Cars", image: "/assets/c4.svg" },
  { id: 4, name: "Special Editions", image: "/assets/c6.svg" },
  { id: 5, name: "Muscle Cars", image: "/assets/c1.svg" },
  { id: 6, name: "Electric Cars", image: "/assets/c5.svg" },
];

export default function CategorySelector() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div
      className="
        flex flex-wrap sm:flex-nowrap items-center justify-start sm:justify-between w-full mx-auto"
    >
      {categories.map((cat) => {
        const isActive = activeId === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveId(cat.id)}
            className={`
              flex flex-col items-center justify-center cursor-pointer
              transition-all duration-300 rounded-lg p-4 sm:p-6 
              ${
                isActive
                  ? "text-white bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
                  : "bg-transparent text-black hover:text-white hover:bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
              }
              !min-w-[63px] w-[63px] h-[85px] md:w-[200px] md:h-[175px] sm:h-[177px] 
              m-2 sm:m-0
            `}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={80}
              height={60}
              className="object-contain"
            />
            <span className="text-[10px] md:text-[14px] sm:text-[18px] text-center font-normal md:font-medium font-[Poppins] leading-[130%]">
              {cat.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
