"use client";

// import { useState } from "react";
import { type Category } from "./CategorySelectorCarousel";

interface CategoryTabsProps {
  categories: Category[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CategoryTabs = ({
  categories,
  activeTab,
  setActiveTab,
}: CategoryTabsProps) => {
  // const categories = [
  //   "Economy Cars",
  //   "Luxury Cars Rental Dubai",
  //   "Sports Cars Rental Dubai",
  //   "Muscle Cars",
  //   "Special Edition",
  //   "No Deposit Cars",
  //   "Electric Cars",
  // ];

  // const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className="
        flex items-center gap-2 px-4 
        w-full max-w-[1292px] h-[60px] mx-auto
        rounded-full 
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)]
        bg-white
        overflow-y-auto
        scrollbar-hide
      "
    >
      {categories.map((cat, idx) => {
        const isActive = activeTab === cat.id;
        return (
          <button
            key={idx}
            onClick={() => setActiveTab(cat.id)}
            className={`
            flex-1 flex items-center justify-center
            text-sm font-medium whitespace-nowrap cursor-pointer
            h-[40px] px-4 py-1 rounded-full transition
            ${
              isActive
                ? "text-white bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
                : "text-gray-800 hover:text-white hover:bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
            }
          `}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
