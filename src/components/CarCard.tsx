"use client";

import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { type CarTypes } from "@/types/homePageTypes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CarCardProps {
  car: CarTypes;
}

const CarCard = ({ car }: CarCardProps) => {
  console.log("CarCard:", car);
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
          loop={car?.car?.images?.length > 1}
          slidesPerView={1}
          className="h-full w-full car-swiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {car?.car?.images?.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`${img.url}`}
                alt={`${car?.car?.carBrand?.name}-${i}`}
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
            {car?.title}
          </h3>
          <p className="text-[12px] text-gray-500 font-[Poppins] font-normal">
            {car?.car?.category}
          </p>
          <p className="text-[10px] text-gray-400 font-[Poppins] font-basic">
            {car?.vendor?.vendorDetails?.businessName}
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
          car?.car.tankCapacity,
          car?.car.transmission,
          car?.car.seatingCapacity,
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
              alt={item?.toString()}
              width={16}
              height={16}
            />
            <span className="font-[Poppins] font-normal text-[11px] 2xl:text-[14px] text-[#374151]">
              <TooltipProvider>
                {idx == 0 ? (
                  `${item} L`
                ) : idx == 1 ? (
                  <Tooltip>
                    <TooltipTrigger>
                      {item?.toString().substring(0, 6)}
                    </TooltipTrigger>
                    <TooltipContent>{item}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger>
                      {`${item} Seats`.substring(0, 7)}
                    </TooltipTrigger>

                    <TooltipContent>{`${item} Seats`}</TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </span>
          </div>
        ))}
      </div>

      {/* Rent Conditions */}
      <div className="px-4 mt-2 flex justify-between items-start relative">
        {/* Left Icon (can be big, won't push text) */}
        <Image
          src={car?.car?.carBrand?.logo?.url}
          alt="Rent Info"
          width={30} // 👈 increase size here
          height={20}
          objectFit="cover"
          // className="absolute left-4 top-1 "
        />

        {/* Right Side Text (always aligned in same place) */}
        <ul className="list-none text-[11px] text-gray-600 font-[Poppins] leading-snug text-right mt-1">
          <li>min {car?.minRentalDays} days rent</li>
          <li>
            insurance{" "}
            {car?.car?.carInsurance == "yes" ? "included" : "not included"}
          </li>
        </ul>
      </div>

      {/* Monthly / Daily Prices */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col items-start">
          {/* <span className="text-gray-400 line-through text-[11px]">
            {car.dailyOld}
          </span> */}
          <div className="flex items-center gap-1">
            <Image
              src="/assets/curr.svg"
              alt="Currency"
              width={18}
              height={16}
            />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car?.rentPerDay} /day
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
              {car?.car?.dailyMileage} km
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {/* <span className="text-gray-400 line-through text-[11px]">
            {car.monthlyOld}
          </span> */}
          <div className="flex items-center gap-1">
            <Image
              src="/assets/curr.svg"
              alt="Currency"
              width={18}
              height={16}
            />
            <span className="font-[Poppins] text-[14px] font-semibold text-[#263238] whitespace-nowrap">
              {car?.rentPerMonth} /month
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
              {car?.car?.monthlyMileage} km
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-between items-center px-4 mt-3">
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
          <a href={`tel:${car?.vendor?.vendorDetails?.contact?.mobileNum}`}>
            <Image src="/assets/cll.svg" alt="Phone" width={17} height={20} />
          </a>
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
          <a
            href={`https://wa.me/${car?.vendor?.vendorDetails?.contact?.whatsappNum}`}
          >
            <Image src="/assets/wat.svg" alt="Message" width={23} height={23} />
          </a>
        </div>
        <div className="flex-1 h-[40px] flex items-center justify-center rounded-full shadow cursor-pointer mx-1 bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]">
          <span className="text-white text-[12px] 2xl:text-[15px] font-[Poppins] font-normal">
            Rent
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
