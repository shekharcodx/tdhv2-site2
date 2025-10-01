"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

// const brands = [
//   { id: 1, name: "Volvo", logo: "/assets/volvo.svg" },
//   { id: 2, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
//   { id: 3, name: "Zeekr", logo: "/assets/Zeekr.svg" },
//   { id: 4, name: "Volvo", logo: "/assets/volvo.svg" },
//   { id: 5, name: "Volvo", logo: "/assets/volvo.svg" },
//   { id: 6, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
//   { id: 7, name: "Zeekr", logo: "/assets/Zeekr.svg" },
//   { id: 8, name: "Volvo", logo: "/assets/volvo.svg" },
//   { id: 9, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
//   { id: 10, name: "Zeekr", logo: "/assets/Zeekr.svg" },
//   { id: 11, name: "Volvo", logo: "/assets/volvo.svg" },
//   { id: 12, name: "Volkswagen", logo: "/assets/Volkswagen.svg" },
//   { id: 13, name: "Zeekr", logo: "/assets/Zeekr.svg" },
//   { id: 14, name: "Volvo", logo: "/assets/volvo.svg" },
// ];

// duplicate list to ensure continuous flow (prevents gap)
// const loopItems = [...brands, ...brands];

interface Brand {
  _id: string;
  name: string;
  logo: {
    url: string;
  };
}

interface BrandCarouselProps {
  data: Brand[];
}

const BrandCarousel = ({ data }: BrandCarouselProps) => {
  return (
    <div className="w-full py-6 md:py-10">
      {/* ✅ Browse By Car Heading */}
      <div className="w-full mx-auto mb-4">
        <p className="text-base md:text-[25px] font-medium text-black mb-5 md:mb-7">
          Browse By Brands
        </p>
      </div>

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
        // ✅ remove loopedSlides from here
      >
        {data?.map((brand, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <Link
              href={`catalog/brands/${brand._id}`}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-28 h-28 rounded-xl bg-white shadow-lg hover:shadow-2xl transition cursor-pointer">
                <Image
                  src={brand.logo?.url}
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
