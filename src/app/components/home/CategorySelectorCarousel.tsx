"use client";

import { CarTypes } from "@/types/homePageTypes";
import CarCarousel from "../CarCarousel";
import CategorySelector from "./CarCatogry";
import { useEffect, useState } from "react";

interface CategorySelectorCarouselProps {
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

const categories: Category[] = [
  { id: "1", name: "Luxury Cars", image: "/assets/c2.svg" },
  { id: "2", name: "Economy Cars", image: "/assets/c1.svg" },
  { id: "3", name: "Sports Cars", image: "/assets/c4.svg" },
  { id: "4", name: "Special Editions", image: "/assets/c6.svg" },
  { id: "5", name: "Muscle Cars", image: "/assets/c1.svg" },
  { id: "6", name: "Electric Cars", image: "/assets/c5.svg" },
];

const CategorySelectorCarousel = ({ data }: CategorySelectorCarouselProps) => {
  const [selectedTab, setSelectedTab] = useState(data?.[0]?._id || "");
  const [sectionData, setSectionData] = useState(data?.[0]?.listings || []);
  console.log("CategorySelectorCarousel:", sectionData);

  useEffect(() => {
    const selectedCategory = data.find((cat) => cat._id === selectedTab);
    if (selectedCategory) {
      setSectionData(selectedCategory.listings);
    }
  }, [data, selectedTab]);
  return (
    <>
      <div className="w-full mx-auto pb-10">
        <CategorySelector
          activeTab={selectedTab}
          setActiveTab={setSelectedTab}
          categories={data.map((cat, i) => ({
            id: cat._id,
            name: cat.name,
            image: categories[i]?.image || "/assets/c2.svg",
          }))}
        />
      </div>

      <div className="w-full mx-auto pb-3">
        <CarCarousel
          uId={3}
          tab={selectedTab}
          data={sectionData}
          arrows={false}
          autoplay={true}
          wrapperClasses="w-full mx-auto rounded-xl pt-7 relative bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
          innerClasses="mx-4 sm:mx-7 pb-7"
        />
      </div>
    </>
  );
};

export default CategorySelectorCarousel;
