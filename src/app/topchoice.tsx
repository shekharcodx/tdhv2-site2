"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
// 1️⃣ Define the Car type at the top
type Car = {
  id: number;
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  seats: string;
  monthlyOld: string; // strikethrough monthly
  monthly: string;    // final monthly
  dailyOld: string;   // strikethrough daily
  daily: string;      // final daily
  limit: string;      // km limit
};

export default function TopChoicesSection() {
  const [cars] = useState<Car[]>([
      {
      id: 1,
      name: "Nissan GT - R",
      type: "Sport",
      image: "/assets/car1.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 Seats",
      monthlyOld: "Đ800/month",
      monthly: "700/month",
      dailyOld: "Đ90/day",
      daily: "75/day",
      limit: "250 km",
    },
    {
      id: 2,
      name: "Lamborghini",
      type: "Luxury",
      image: "/assets/car2.png",
      fuel: "60L",
      transmission: "Auto",
      seats: "4 Seats",
      monthlyOld: "Đ1200/month",
      monthly: "1000/month",
      dailyOld: "Đ150/day",
      daily: "120/day",
      limit: "300 km",
    },
    {
      id: 3,
      name: "Ferrari",
      type: "Sport",
      image: "/assets/car3.png",
      fuel: "65L",
      transmission: "Auto",
      seats: "2 Seats",
      monthlyOld: "Đ1500/month",
      monthly: "1300/month",
      dailyOld: "Đ200/day",
      daily: "160/day",
      limit: "200 km",
    },
     {
      id: 4,
      name: "Ferrari",
      type: "Sport",
      image: "/assets/car3.png",
      fuel: "65L",
      transmission: "Auto",
      seats: "2 Seats",
      monthlyOld: "Đ1500/month",
      monthly: "1300/month",
      dailyOld: "Đ200/day",
      daily: "160/day",
      limit: "200 km",
    },
     {
      id: 5,
      name: "Ferrari",
      type: "Sport",
      image: "/assets/car3.png",
      fuel: "65L",
      transmission: "Auto",
      seats: "2 Seats",
      monthlyOld: "Đ1500/month",
      monthly: "1300/month",
      dailyOld: "Đ200/day",
      daily: "160/day",
      limit: "200 km",
    },
    {
      id: 6,
      name: "Ferrari",
      type: "Sport",
      image: "/assets/car3.png",
      fuel: "65L",
      transmission: "Auto",
      seats: "2 Seats",
      monthlyOld: "Đ1500/month",
      monthly: "1300/month",
      dailyOld: "Đ200/day",
      daily: "160/day",
      limit: "200 km",
    },
  ]);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="py-6 md:py-12">
      <div className="max-w-[1312px] mx-auto block md:flex justify-between">
        {/* Left Section */}
        <div className="w-[320px] flex flex-col gap-3 md:gap-6 font-[poppins]">
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

          <div className="hidden md:flex gap-3 mt-40">
            {/* Prev Button */}
            <button
              className={`custom-prev flex items-center justify-center px-8 py-2 rounded-full shadow transition 
    ${
      isBeginning
        ? "bg-[#59787C] opacity-50 cursor-not-allowed"
        : "bg-[#59787C] hover:bg-[#4a6468]"
    }`}
              disabled={isBeginning}
            >
              <Image src="/assets/left.png" alt="Prev" width={28} height={28} />
            </button>

            {/* Next Button */}
            <button
              className={`custom-next flex items-center justify-center px-8 py-2 rounded-full shadow transition 
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
        </div>

        {/* Right Section (Swiper) */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView="auto"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            420: { slidesPerView: 1.4, spaceBetween: 12 },
            490: { slidesPerView: 1.5, spaceBetween: 12 },
            530: { slidesPerView: 1.8, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            690: { slidesPerView: 2.2, spaceBetween: 12 },
            768: { slidesPerView: 1.4, spaceBetween: 12 },
            840: { slidesPerView: 1.6, spaceBetween: 12 },
            900: { slidesPerView: 1.8, spaceBetween: 12 },
            960: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 2, spaceBetween: 12 },
            1175: { slidesPerView: 2.5, spaceBetween: 12 },
            1280: { slidesPerView: 2.8, spaceBetween: 12 },
            1400: { slidesPerView: 3, spaceBetween: 12 },
          }}
          className="!pb-[5px] relative z-10 mt-4 md:mt-0"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id} style={{ width: "310px" }}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
function CarCard({ car }: { car: Car }) {
  return (
    <div className="w-full max-w-[310px] h-auto rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col pb-4 mx-auto">
      {/* Car Image */}
      <div className="min-w-[280px] h-[260px] md:h-[292px] relative">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      {/* Name + Heart */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col justify-center">
          <h3 className="text-[16px] font-semibold text-[#263238] leading-tight font-[Poppins]">
            {car.name}
          </h3>
          <p className="text-[12px] text-gray-500 font-[Poppins] font-normal">
            {car.type}
          </p>
          <p className="text-[10px] text-gray-400 font-[Poppins] font-basic">
            PRINCESS RENT CAR
          </p>
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/assets/heart.svg"
            alt="Favorite"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Fuel / Transmission / Seats */}
      <div className="w-full flex justify-between items-center px-4 gap-[5px] mt-2">
        {[car.fuel, car.transmission, car.seats].map((item, idx) => (
          <div
            key={idx}
            className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white justify-center 2xl:min-w-[86px]"
          >
            <Image
              src={
                idx === 0
                  ? "/assets/petrol.svg"
                  : idx === 1
                  ? "/assets/manual.svg"
                  : "/assets/seats.svg"
              }
              alt={item}
              width={16}
              height={16}
            />
            <span className="font-[Poppins] font-normal text-[11px] 2xl:text-[14px] text-[#374151]">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Rent Conditions */}
    <div className="px-4 mt-2 flex items-start relative">
  {/* Left Icon (can be big, won't push text) */}
  <Image
    src="/assets/brand.png"
    alt="Rent Info"
    width={30}   // 👈 increase size here
    height={20}
    className="absolute left-4 top-1 "
  />

  {/* Right Side Text (always aligned in same place) */}
  <ul className="list-none text-[11px] text-gray-600 font-[Poppins] leading-snug text-right pl-43 mt-1">
    <li>min 3 days rent</li>
    <li>insurance included</li>
  </ul>
</div>


      {/* Monthly / Daily Prices */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col items-start">
          <span className="text-gray-400 line-through text-[11px]">{car.dailyOld}</span>
          <div className="flex items-center gap-1">
            <Image src="/assets/curr.svg" alt="Currency" width={18} height={16} />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car.daily}
            </span>
          </div>
         <div className="flex items-center gap-2  mt-1">
  <Image
    src="/assets/kilo.png"   // replace with your asset name
    alt="kms included"
    width={14}
    height={14}
  />
  <p className="text-[10px] text-gray-400 font-[Poppins]">
    {car.limit}
  </p>
</div>

        </div>
        <div className="flex flex-col items-end">
          <span className="text-gray-400 line-through text-[11px]">{car.monthlyOld}</span>
          <div className="flex items-center gap-1">
            <Image src="/assets/curr.svg" alt="Currency" width={18} height={16} />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car.monthly}
            </span>
          </div>
         <div className="flex items-center gap-2  mt-1">
  <Image
    src="/assets/kilo.png"   // replace with your asset name
    alt="kms included"
    width={14}
    height={14}
  />
  <p className="text-[10px] text-gray-400 font-[Poppins]">
    {car.limit}
  </p>
</div>

        </div>
      </div>

      {/* Action Buttons */}
     <div className="w-full flex justify-between items-center px-4 mt-3">
  <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
    <Image src="/assets/cll.svg" alt="Phone" width={17} height={20} />
  </div>
  <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
    <Image src="/assets/wat.svg" alt="Message" width={23} height={23} />
  </div>
  <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
    <span className="text-white text-[12px] 2xl:text-[15px] font-[Poppins] font-normal">
      Rent
    </span>
  </div>
</div>

    </div>
  );
}
