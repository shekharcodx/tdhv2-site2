"use client";

import Image from "next/image";
import { type Category } from "./CategorySelectorCarousel";

interface CategorySelectorProps {
  categories: Category[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CategorySelector({
  categories,
  activeTab,
  setActiveTab,
}: CategorySelectorProps) {
  return (
    <div
      className="
        flex flex-wrap sm:flex-nowrap items-center justify-start sm:justify-between w-full mx-auto"
    >
      {categories.map((cat) => {
        const isActive = activeTab === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
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
