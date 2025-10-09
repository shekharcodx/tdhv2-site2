"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

interface BrandCarouselProps {
  data: [{ _id: string; name: string; logo: { url: string } }];
}

const BrandCarousel = ({ data }: BrandCarouselProps) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* ✅ Section Heading */}
      <div className="w-full text-center px-4 pb-10 md:pb-16">
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
        {data.map((brand, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Link
              href={`/catalog/brands/${brand._id}`}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-28 h-28 rounded-xl bg-white shadow-lg hover:shadow-2xl transition cursor-pointer">
                <Image
                  src={brand.logo.url}
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
