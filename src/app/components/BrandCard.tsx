"use client";  
import Image from "next/image";  
import { Swiper, SwiperSlide } from "swiper/react";  
import { Autoplay } from "swiper/modules";  

import "swiper/css";  

const brands = [  
  { id: 1, name: "Mercedes", logo: "/assets/benz.svg" },  
  { id: 2, name: "Audi", logo: "/assets/audi.svg" },  
  { id: 3, name: "Jaguar", logo: "/assets/jaguar.svg" },  
  { id: 4, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 5, name: "Audi", logo: "/assets/audi.svg" },  
  { id: 6, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 7, name: "Jaguar", logo: "/assets/jaguar.svg" },  
  { id: 8, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 9, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 10, name: "Audi", logo: "/assets/audi.svg" },  
  { id: 11, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 12, name: "Jaguar", logo: "/assets/jaguar.svg" },  
  { id: 13, name: "Hyundai", logo: "/assets/hyundai.svg" },  
  { id: 14, name: "Hyundai", logo: "/assets/hyundai.svg" },  
];  

// duplicate list to ensure continuous flow (prevents gap)  
const loopItems = [...brands, ...brands];  

export default function BrandCard() {  
  return (  
    <div className="w-full py-10">  
      {/* ✅ Browse By Car Heading */}  
      <div className="w-[1312px] mx-auto mb-4">
        <p className="text-[25px] font-medium text-black mb-7">
          Browse By Brands
        </p>
      </div>  

      <Swiper  
        modules={[Autoplay]}  
        spaceBetween={15}  
        slidesPerView={"auto"}    // each slide takes its own width  
        loop={true}  
        loopedSlides={brands.length} // helps Swiper clone correctly  
        autoplay={{  
          delay: 0,                // continuous movement  
          disableOnInteraction: false,  
          pauseOnMouseEnter: true,  
        }}  
        speed={3500}               // adjust for faster/slower scroll  
        freeMode={true}            // smooth, non-snapping movement  
        allowTouchMove={false}     // optional: prevent user drag interrupt  
        className="px-4"  
      >  
        {loopItems.map((brand, idx) => (  
          <SwiperSlide key={idx} className="!w-auto">  
            <div className="flex flex-col items-center">  
              <div className="flex items-center justify-center w-28 h-28 rounded-xl bg-white shadow-lg hover:shadow-2xl transition">  
                <Image  
                  src={brand.logo}  
                  alt={brand.name}  
                  width={100}  
                  height={100}  
                  className="object-contain"  
                />  
              </div>  
              <p className="text-sm text-gray-600 mt-2">{brand.name}</p>  
            </div>  
          </SwiperSlide>  
        ))}  
      </Swiper>  
    </div>  
  );  
}  
