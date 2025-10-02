"use client";

import { type CarTypes } from "@/types/homePageTypes";
import CarCarousel from "../CarCarousel";
import CategorySelector from "./CategorySelector";
import { useEffect, useState } from "react";
import CategoryTabs from "./CategoryTabs";

interface CategorySelectorCarouselProps {
  selectorType: string;
  wrapperClasses?: string;
  wrapperStyle?: React.CSSProperties;
  innerClasses?: string;
  innerStyle?: React.CSSProperties;
  arrows?: boolean;
  autoplay?: boolean;
  needWrapper?: boolean;
  animateSection?: boolean;
  data: Cat[];
}

interface Cat {
  _id: string;
  name: string;
  listings: CarTypes[];
}

export type Category = {
  id: string;
  name: string;
  image: string;
};

// const categories: Category[] = [
//   { id: "1", name: "Luxury Cars", image: "/assets/c2.svg" },
//   { id: "2", name: "Economy Cars", image: "/assets/c1.svg" },
//   { id: "3", name: "Sports Cars", image: "/assets/c4.svg" },
//   { id: "4", name: "Special Editions", image: "/assets/c6.svg" },
//   { id: "5", name: "Muscle Cars", image: "/assets/c1.svg" },
//   { id: "6", name: "Electric Cars", image: "/assets/c5.svg" },
// ];

const catImages = [
  "/assets/c1.svg",
  "/assets/c2.svg",
  "/assets/c4.svg",
  "/assets/c5.svg",
  "/assets/c6.svg",
];

const CategorySelectorCarousel = ({
  selectorType,
  wrapperClasses = "w-full mx-auto rounded-xl pt-7 relative bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]",
  innerClasses = "mx-4 sm:mx-7 pb-7",
  arrows = true,
  autoplay = false,
  animateSection = false,
  data,
}: CategorySelectorCarouselProps) => {
  const [selectedTab, setSelectedTab] = useState(data?.[0]?._id || "");
  const [sectionData, setSectionData] = useState(data?.[0]?.listings || []);

  useEffect(() => {
    const selectedCategory = data.find((cat) => cat._id === selectedTab);
    if (selectedCategory) {
      setSectionData(selectedCategory.listings);
    }
  }, [data, selectedTab]);
  return (
    <>
      {selectorType === "tabs2" ? (
        <div className="w-full mx-auto pb-10">
          <CategorySelector
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
            categories={data.map((cat, i) => ({
              id: cat._id,
              name: cat.name,
              image: catImages?.[i] || "/assets/c2.svg",
            }))}
          />
        </div>
      ) : (
        <div className="w-full max-w-[1312px] mx-auto mt-[300px] md:mt-50 lg:mt-40">
          <p className="text-base md:text-[25px] font-medium text-black mb-4 md:mb-6">
            Search By Category
          </p>
          <CategoryTabs
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
            categories={data.map((cat, i) => ({
              id: cat._id,
              name: cat.name,
              image: catImages?.[i] || "/assets/c2.svg",
            }))}
          />
        </div>
      )}

      <div className="w-full mx-auto pb-3">
        <CarCarousel
          uId={3}
          animateVal={selectedTab}
          animateSection={animateSection}
          data={sectionData}
          arrows={arrows}
          autoplay={autoplay}
          wrapperClasses={wrapperClasses}
          innerClasses={innerClasses}
        />
      </div>
    </>
  );
};

export default CategorySelectorCarousel;
