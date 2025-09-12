"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ Import pagination CSS

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

export default function PopCar() {
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
    
    <div className="w-full  relative">
      <div className="max-w-[1312px] mx-auto">
         <div className="w-full mb-6">
          <p className="text-[25px] font-medium text-black">
           Popular Cars
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]} // ✅ Include Pagination
          spaceBetween={12}
          slidesPerView={4}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            el: ".custom-pagination", // ✅ Custom pagination element
            clickable: true,
          }}
          breakpoints={{
            1024: { slidesPerView: 4, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 12 },
            0: { slidesPerView: 1, spaceBetween: 12 },
          }}
          className="pb-10"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows and Pagination */}
        <div className="w-full flex justify-between items-center mt-6 px-4">
          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-start gap-2"></div>

          {/* Custom Arrows */}
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
    <div className="w-[310px] h-[477px] rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col gap-4 pb-4 mx-auto">
      <div className="w-full h-[292px] relative">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      <div className="w-[278px] h-[47px] flex justify-between items-center mx-auto">
        <div className="flex flex-col justify-center">
          <h3 className="text-[16px] font-semibold text-[#263238] leading-tight font-[Poppins]">
            {car.name}
          </h3>
          <p className="text-[14px] text-gray-500 font-[Poppins] font-normal">
            {car.type}
          </p>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <Image src="/assets/heart.svg" alt="Favorite" width={24} height={24} />
        </div>
      </div>

      <div className="w-[278px] h-[30px] flex justify-between items-center mx-auto">
        <div className="w-[86px] h-[30px] flex items-center gap-2 rounded-full p-[5px] shadow bg-white">
          <Image src="/assets/petrol.svg" alt="Fuel" width={16} height={16} />
          <span className="font-[Poppins] font-normal text-[15px] leading-[21px] tracking-[-0.02em] align-middle text-[#374151]">
            {car.fuel}
          </span>
        </div>

        <div className="w-[86px] h-[30px] flex items-center gap-2 rounded-full p-[5px] shadow bg-white">
          <Image src="/assets/manual.svg" alt="Manual" width={16} height={16} />
          <span className="font-[Poppins] font-normal text-[15px] leading-[21px] tracking-[-0.02em] align-middle text-[#374151]">
            {car.transmission}
          </span>
        </div>

        <div className="w-[86px] h-[30px] flex items-center gap-2 rounded-full p-[5px] shadow bg-white">
          <Image src="/assets/seats.svg" alt="Seats" width={16} height={16} />
          <span className="font-[Poppins] font-normal text-[15px] leading-[21px] tracking-[-0.02em] align-middle text-[#263337] whitespace-nowrap">
            {car.seats}
          </span>
        </div>
      </div>

      <div className="w-[278px] h-[24px] flex justify-between items-center mx-auto">
        <div className="flex items-center gap-1 w-[120px] justify-start">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="font-[Poppins] text-[16px] font-semibold text-[#263238] tracking-[-0.03em] whitespace-nowrap">
            {car.monthly}
          </span>
        </div>

        <div className="flex items-center gap-1 w-[120px] justify-end">
          <Image src="/assets/curr.svg" alt="Currency" width={21} height={16} />
          <span className="font-[Poppins] text-[16px] font-semibold text-[#263238] tracking-[-0.03em] whitespace-nowrap">
            {car.daily}
          </span>
        </div>
      </div>

      <div className="w-[278px] h-[40px] flex justify-between items-center mx-auto">
        <div className="w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer">
          <Image src="/assets/cll.svg" alt="Phone" width={17} height={20} />
        </div>
        <div className="w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer">
          <Image src="/assets/wat.svg" alt="Message" width={23} height={23} />
        </div>
        <div className="w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer">
          <span className="text-white text-[15px] font-[Poppins] font-normal">
            Rent Now
          </span>
        </div>
      </div>
    </div>
  );
}