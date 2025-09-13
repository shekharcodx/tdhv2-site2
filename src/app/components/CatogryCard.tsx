"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Car = {
  id: number;
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  seats: string;
  monthly: string;
  daily: string;
};

export default function CarCarousel() {
  const [cars] = useState<Car[]>([
    {
      id: 1,
      name: "Nissan GT - R",
      type: "Sport",
      image: "/assets/car1.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 Seats",
      monthly: "800/month",
      daily: "900/day",
    },
    {
      id: 2,
      name: "Lamborghini",
      type: "Luxury",
      image: "/assets/car2.png",
      fuel: "60L",
      transmission: "Auto",
      seats: "4 Seats",
      monthly: "1200/month",
      daily: "150/day",
    },
    {
      id: 3,
      name: "Ferrari",
      type: "Sport",
      image: "/assets/car3.png",
      fuel: "65L",
      transmission: "Auto",
      seats: "2 Seats",
      monthly: "1500/month",
      daily: "200/day",
    },
    {
      id: 4,
      name: "Porsche",
      type: "Luxury",
      image: "/assets/car3.png",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 Seats",
      monthly: "1400/month",
      daily: "180/day",
    },
    {
      id: 5,
      name: "Porsche",
      type: "Luxury",
      image: "/assets/car3.png",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 Seats",
      monthly: "1400/month",
      daily: "180/day",
    },
  ]);

  return (
    <div className="w-full max-w-[1312px] mx-auto rounded-xl pt-7 relative bg-[#263337]">
      <div className="mx-4 sm:mx-7 pb-7">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-6 relative z-10"
          breakpoints={{
            1024: { slidesPerView: 4, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 12 },
            0: { slidesPerView: 1, spaceBetween: 12 },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id} className="flex justify-center">
              <CatCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function CatCard({ car }: { car: Car }) {
  return (
    <div className="w-full max-w-[310px] h-auto flex-shrink-0 rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col gap-4 pb-4">
      {/* Image */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[292px] relative">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      {/* Name + Favorite */}
      <div className="w-[90%] flex justify-between items-center mx-auto">
        <div className="flex flex-col justify-center">
          <h3 className="text-[16px] font-semibold text-[#263238] leading-tight font-[Poppins]">
            {car.name}
          </h3>
          <p className="text-[14px] text-gray-500 font-[Poppins] font-normal">
            {car.type}
          </p>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <Image
            src="/assets/heart.svg"
            alt="Favorite"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Specs */}
      <div className="w-[90%] flex justify-between items-center mx-auto">
        <div className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white mx-1">
          <Image src="/assets/petrol.svg" alt="Fuel" width={16} height={16} />
          <span className=" xl:text-[12px] 2xl:text-[15px] font-[Poppins]">
            {car.fuel}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white mx-1">
          <Image src="/assets/manual.svg" alt="Manual" width={16} height={16} />
          <span className=" xl:text-[12px] 2xl:text-[15px] font-[Poppins]">
            {car.transmission}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white mx-1">
          <Image src="/assets/seats.svg" alt="Seats" width={16} height={16} />
          <span className=" xl:text-[12px] 2xl:text-[15px] font-[Poppins] whitespace-nowrap">
            {car.seats}
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="w-[90%] flex justify-between items-center mx-auto">
        <div className="flex items-center gap-1">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="text-[16px] font-semibold font-[Poppins]">
            {car.monthly}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="text-[16px] font-semibold font-[Poppins]">
            {car.daily}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="w-[90%] flex justify-between items-center mx-auto">
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] cursor-pointer mx-1">
          <Image src="/assets/cll.svg" alt="Phone" width={17} height={20} />
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] cursor-pointer mx-1">
          <Image src="/assets/wat.svg" alt="Message" width={23} height={23} />
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] cursor-pointer mx-1">
          <span className="text-white xl:text-[12px] 2xl:text-[15px] font-[Poppins]">
            Rent Now
          </span>
        </div>
      </div>
    </div>
  );
}
