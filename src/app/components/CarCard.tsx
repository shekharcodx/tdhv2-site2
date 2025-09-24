"use client";

import Image from "next/image";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CarCardProps {
  uId: number;
  title?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClasses?: string;
  innerStyle?: React.CSSProperties;
  innerClasses?: string;
  arrows?: boolean;
  autoplay?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

type Car = {
  id: number;
  name: string;
  type: string;
  images: string[]; // 👈 instead of image: string
  fuel: string;
  transmission: string;
  seats: string;
  monthlyOld: string;
  monthly: string;
  dailyOld: string;
  daily: string;
  limit: string;
};

export default function CarCarousel({
  uId,
  title,
  wrapperStyle,
  wrapperClasses,
  innerStyle,
  innerClasses,
  arrows = true,
  autoplay = false,
  data,
}: CarCardProps) {
  const [cars] = useState<Car[]>([
    {
      id: 1,
      name: "Nissan GT - R",
      type: "Sport",
      images: ["/assets/c1.svg", "/assets/c4.svg"], // 👈 multiple
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
      images: ["/assets/c5.svg", "/assets/c6.svg"], // 👈 multiple
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
      images: ["/assets/c4.svg", "/assets/c6.svg"], // 👈 multiple
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
      images: ["/assets/c4.svg", "/assets/c6.svg"],
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
      images: ["/assets/c4.svg", "/assets/c6.svg"],
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
      images: ["/assets/c5.svg", "/assets/c4.svg"],
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

  return (
    <div
      className={
        wrapperClasses ? wrapperClasses : "w-full pt-4 md:pt-10 relative"
      }
      style={wrapperStyle}
    >
      <div
        className={innerClasses ? innerClasses : "max-w-[1312px] mx-auto"}
        style={innerStyle}
      >
        {title && (
          <div className="w-full mb-6">
            <p className="text-base md:text-[25px] font-medium text-black">
              {title}
            </p>
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={4}
          loop={false}
          className="relative z-10 !pb-[5px]"
          navigation={{
            prevEl: `.custom-prev-${uId}`,
            nextEl: `.custom-next-${uId}`,
          }}
          pagination={{
            el: `.custom-pagination-${uId}`,
            clickable: true,
          }}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
          }
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            426: { slidesPerView: 1.5, spaceBetween: 12 },
            526: { slidesPerView: 1.8, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            700: { slidesPerView: 2.4, spaceBetween: 12 },
            800: { slidesPerView: 2.5, spaceBetween: 12 },
            850: { slidesPerView: 2.8, spaceBetween: 12 },
            1024: { slidesPerView: 3.2, spaceBetween: 12 },
            1200: { slidesPerView: 3.8, spaceBetween: 12 },
            1380: { slidesPerView: 4, spaceBetween: 12 },
          }}
        >
          {data?.listings?.docs.map((car: any) => (
            <SwiperSlide key={car._id}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows and Pagination */}
        {arrows && (
          <div className="w-full hidden md:flex justify-between items-center mt-6">
            <div
              className={`custom-pagination-${uId} flex justify-start gap-2`}
            ></div>

            <div className="flex justify-end gap-6">
              <button
                className={`custom-prev-${uId} w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40`}
              >
                <Image
                  src="/assets/left.png"
                  alt="Prev"
                  width={20}
                  height={20}
                />
              </button>
              <button
                className={`custom-next-${uId} w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40`}
              >
                <Image
                  src="/assets/right.png"
                  alt="Next"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CarCard({ car }: { car: any }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const lastHoverTimeRef = useRef<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const swiperEl = swiperRef.current;
    if (!swiperEl) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    const now = Date.now();
    if (now - lastHoverTimeRef.current < 600) return;
    lastHoverTimeRef.current = now;

    if (x > width / 2) {
      swiperEl.slideNext();
    } else {
      swiperEl.slidePrev();
    }
  };

  return (
    <div className="w-full max-w-[310px] h-auto rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col pb-4 mx-auto">
      {/* Car Image */}
      <div
        className="min-w-[280px] h-auto relative"
        onMouseMove={handleMouseMove}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={car.car.images.length > 1}
          slidesPerView={1}
          className="h-full w-full car-swiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {car.car.images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`${img.url}`}
                alt={`${car.car.carBrand.name}-${i}`}
                // fill
                height={960}
                width={1280}
                objectFit="cover"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Name + Heart */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col justify-center h-[52px]">
          <h3 className="text-[16px] font-semibold text-[#263238] leading-tight font-[Poppins]">
            {car.title}
          </h3>
          <p className="text-[12px] text-gray-500 font-[Poppins] font-normal">
            {car.car.category}
          </p>
          <p className="text-[10px] text-gray-400 font-[Poppins] font-basic">
            {car.vendor?.vendorDetails?.businessName}
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
        {[
          car.car.tankCapacity,
          car.car.transmission,
          car.car.seatingCapacity,
        ].map((item, idx) => (
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
              {idx == 0 ? (
                `${item} L`
              ) : idx == 1 ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {item?.toString().substring(0, 6)}
                    </TooltipTrigger>
                    <TooltipContent>{item}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                `${item} Seats`
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Rent Conditions */}
      <div className="px-4 mt-2 flex justify-between items-start relative">
        {/* Left Icon (can be big, won't push text) */}
        <Image
          src={car.car.carBrand.logo.url}
          alt="Rent Info"
          width={30} // 👈 increase size here
          height={20}
          objectFit="cover"
          // className="absolute left-4 top-1 "
        />

        {/* Right Side Text (always aligned in same place) */}
        <ul className="list-none text-[11px] text-gray-600 font-[Poppins] leading-snug text-right mt-1">
          <li>min {car.minRentalDays} days rent</li>
          <li>
            insurance{" "}
            {car.car.carInsurance == "yes" ? "included" : "not included"}
          </li>
        </ul>
      </div>

      {/* Monthly / Daily Prices */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col items-start">
          <span className="text-gray-400 line-through text-[11px]">
            {car.dailyOld}
          </span>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/curr.svg"
              alt="Currency"
              width={18}
              height={16}
            />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car.rentPerDay} /day
            </span>
          </div>
          <div className="flex items-center gap-2  mt-1">
            <Image
              src="/assets/kilo.png" // replace with your asset name
              alt="kms included"
              width={14}
              height={14}
            />
            <p className="text-[10px] text-gray-400 font-[Poppins]">
              {car.car.dailyMileage} km
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gray-400 line-through text-[11px]">
            {car.monthlyOld}
          </span>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/curr.svg"
              alt="Currency"
              width={18}
              height={16}
            />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car.rentPerMonth} /month
            </span>
          </div>
          <div className="flex items-center gap-2  mt-1">
            <Image
              src="/assets/kilo.png" // replace with your asset name
              alt="kms included"
              width={14}
              height={14}
            />
            <p className="text-[10px] text-gray-400 font-[Poppins]">
              {car.car.monthlyMileage} km
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
