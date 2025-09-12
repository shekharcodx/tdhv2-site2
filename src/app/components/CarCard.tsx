"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="w-full pt-10 relative">
      <div className="w-full max-w-[1312px] mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={4}
          className="pb-6 relative z-10"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 12 },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows and Pagination */}
        <div className="w-full flex justify-between items-center mt-6 px-4">
          <div className="custom-pagination flex justify-start gap-2"></div>

          <div className="flex justify-end gap-6">
            <button className="custom-prev w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40">
              <Image src="/assets/left.png" alt="Prev" width={20} height={20} />
            </button>
            <button className="custom-next w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40">
              <Image src="/assets/right.png" alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarCard({ car }: { car: Car }) {
  return (
    <div className="w-full max-w-[310px] h-auto rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col gap-4 pb-4 mx-auto">
      {/* Car Image */}
      <div className="w-full h-[292px] relative">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      {/* Name + Heart */}
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-[16px] font-semibold text-[#263238] leading-tight font-[Poppins]">
            {car.name}
          </h3>
          <p className="text-[14px] text-gray-500 font-[Poppins] font-normal">
            {car.type}
          </p>
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/assets/heart.svg" alt="Favorite" width={24} height={24} />
        </div>
      </div>

      {/* Fuel / Transmission / Seats */}
      <div className="w-full flex justify-between items-center px-4">
        {[car.fuel, car.transmission, car.seats].map((item, idx) => (
          <div key={idx} className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white justify-center min-w-[86px]">
            <Image
              src={idx === 0 ? "/assets/petrol.svg" : idx === 1 ? "/assets/manual.svg" : "/assets/seats.svg"}
              alt={item}
              width={16}
              height={16}
            />
            <span className="font-[Poppins] font-normal text-[15px] leading-[21px] text-[#374151]">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Monthly / Daily Prices */}
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex items-center gap-1 w-[120px] justify-start">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="font-[Poppins] text-[16px] font-semibold text-[#263238] whitespace-nowrap">
            {car.monthly}
          </span>
        </div>
        <div className="flex items-center gap-1 w-[120px] justify-end">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="font-[Poppins] text-[16px] font-semibold text-[#263238] whitespace-nowrap">
            {car.daily}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer mx-1">
          <Image src="/assets/cll.svg" alt="Phone" width={17} height={20} />
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer mx-1">
          <Image src="/assets/wat.svg" alt="Message" width={23} height={23} />
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer mx-1">
          <span className="text-white text-[15px] font-[Poppins] font-normal">
            Rent Now
          </span>
        </div>
      </div>
    </div>
  );
}
