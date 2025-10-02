"use client";

import { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import Image from "next/image";
import { type CarTypes } from "@/types/homePageTypes";
import "swiper/css";
import "swiper/css/navigation";
import { topChoiceCarouselBreakpoints } from "@/util/carouselBreakpoints";
import CarCarousel from "@/components/CarCarousel";

interface TopChoicesSectionProps {
  data: CarTypes[];
}

const TopChoicesSection = ({ data }: TopChoicesSectionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="py-6 md:py-12">
      <div className="max-w-[1312px] mx-auto block md:flex justify-between">
        {/* Left Section */}
        <div className="w-full md:w-[30%] flex flex-col gap-3 md:gap-6 font-[poppins]">
          <h2 className="text-base md:text-[22px] font-extrabold text-[#263238] uppercase">
            Top Choices
          </h2>
          <p className="text-[12px] md:text-[20px] text-gray-600   font-normal leading-[px] w-[320px]">
            Explore our wide selection of popular cars that are loved by drivers
            everywhere.
          </p>
          <button className="w-[143px] md:w-[160px] h-[46px] rounded-full bg-[#59787C] text-white  text-[12px] md:text-[18px] font-medium">
            Explore Cars
          </button>

          {domLoaded && (
            <div className="hidden md:flex gap-3 mt-40">
              {/* Prev Button */}
              <button
                className={`custom-prev-${10} flex items-center justify-center px-8 py-2 rounded-full shadow transition 
              ${
                isBeginning
                  ? "bg-[#59787C] opacity-50 cursor-not-allowed"
                  : "bg-[#59787C] hover:bg-[#4a6468]"
              }`}
                disabled={isBeginning}
              >
                <Image
                  src="/assets/left.png"
                  alt="Prev"
                  width={28}
                  height={28}
                />
              </button>

              {/* Next Button */}
              <button
                className={`custom-next-${10} flex items-center justify-center px-8 py-2 rounded-full shadow transition 
              ${
                isEnd
                  ? "bg-[#59787C] opacity-50 cursor-not-allowed"
                  : "bg-[#59787C] hover:bg-[#4a6468]"
              }`}
                disabled={isEnd}
              >
                <Image
                  src="/assets/right.png"
                  alt="Next"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-[70%] mt-6 md:mt-0">
          <CarCarousel
            uId={10}
            swiperRef={swiperRef}
            setIsBeginning={setIsBeginning}
            setIsEnd={setIsEnd}
            needWrapper={false}
            arrows={false}
            carouselBreakpoints={topChoiceCarouselBreakpoints}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default TopChoicesSection;
