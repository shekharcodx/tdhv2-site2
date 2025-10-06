"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

// ✅ Dummy brand data
const brands = [
  { id: 1, name: "Volvo", logo: "/assets/volvo.svg" },
  { id: 2, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
  { id: 3, name: "Zeekr", logo: "/assets/Zeekr.svg" },
  { id: 4, name: "Volvo", logo: "/assets/volvo.svg" },
  { id: 5, name: "Volvo", logo: "/assets/volvo.svg" },
  { id: 6, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
  { id: 7, name: "Zeekr", logo: "/assets/Zeekr.svg" },
  { id: 8, name: "Volvo", logo: "/assets/volvo.svg" },
  { id: 9, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
  { id: 10, name: "Zeekr", logo: "/assets/Zeekr.svg" },
  { id: 11, name: "Volvo", logo: "/assets/volvo.svg" },
  { id: 12, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
  { id: 13, name: "Zeekr", logo: "/assets/Zeekr.svg" },
  { id: 14, name: "Volvo", logo: "/assets/volvo.svg" },
];

// ✅ Optional: duplicate for smoother continuous flow
const loopItems = [...brands, ...brands];

const BrandCarousel = () => {
  return (
    <div className="w-full py-6 md:py-10">
      {/* ✅ Section Heading */}
      <div className="w-full text-center px-4 py-6 md:py-10">
        <span className="font-bold text-slate-teal text-sm uppercase tracking-wider mb-3 block">
          Explore Our Collection
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Browse by Brand
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Find the perfect vehicle from our curated collection of premium
          brands.
        </p>
      </div>

      {/* ✅ Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3500}
        freeMode={true}
        allowTouchMove={false}
        className="px-4"
      >
        {loopItems.map((brand, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Link
              href={`/catalog/brands/${brand.id}`}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-28 h-28 rounded-xl bg-white shadow-lg hover:shadow-2xl transition cursor-pointer">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-[#928B8B] mt-2">{brand.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
