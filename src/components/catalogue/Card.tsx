"use client";

import Image from "next/image";
import { type CarTypes } from "@/types/homePageTypes";

type CarCardProps = {
  car: CarTypes;
};

const CardCat = ({ car }: CarCardProps) => {
  console.log("Card:car", car);
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1080px] h-[325.6px] rounded-[12px] border border-[#E5E5E5] hover:border-[#59787C] transition-colors duration-200 overflow-hidden bg-white md:gap-5 relative mr-auto shadow-sm">
      {/* Left: Car Image */}
      <div className="relative w-full md:w-[35%] h-[200px] md:h-full">
        <Image
          src={car.car.coverImage.url}
          alt={car.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Right: Car Details */}
      <div className="flex flex-col justify-between flex-1 p-4 gap-3">
        {/* Title + Meta Info */}
        <div className="flex items-start justify-between gap-4">
          {/* Logo on the left */}

          {/* Title and Meta on the right */}
          <div>
            <h2 className="text-lg  text-gray-600">{car.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-600 flex-wrap">
              <span className="px-2 py-1 rounded-full border">2024</span>
              <span className="px-2 py-1 rounded-full border">GCC</span>
              <span className="px-2 py-1 rounded-full border">
                {car.car.category}
              </span>
            </div>
          </div>
          <div className="mr-14">
            <Image
              src="/assets/volvo.svg"
              alt="Brand Logo"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Features + Logo */}
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div className="flex flex-col gap-1 text-sm text-gray-600 flex-1 min-w-[200px] gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/tick.svg"
                alt="Delivery"
                width={14}
                height={14}
              />
              Free Delivery (7 days+)
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/tick.svg"
                alt="Rental"
                width={14}
                height={14}
              />
              Minimum 3 days rental
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/tick.svg"
                alt="Insurance"
                width={14}
                height={14}
              />
              Insurance included
            </div>

            {/* Logo: Moved up, aligned properly without breaking layout */}
          </div>

          {/* Location + Pricing */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mt-1">
            {/* Location */}

            {/* Pricing: Daily and Monthly stacked vertically */}
            <div className="flex flex-col gap-3">
              {/* Daily */}
              <div className="flex flex-col items-start">
                <span className="text-base font-semibold text-[#59787C]">
                  {car.rentPerDay} AED
                  <span className="text-sm font-normal text-gray-600">
                    {" "}
                    /day
                  </span>
                </span>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Image
                    src="/assets/kilo.png"
                    alt="Daily Mileage"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">{car.car.dailyMileage} km</span>
                </div>
              </div>

              {/* Monthly */}
              <div className="flex flex-col items-start">
                <span className="text-base font-semibold text-[#59787C]">
                  {car.rentPerMonth} AED
                  <span className="text-sm font-normal text-gray-600">
                    {" "}
                    /month
                  </span>
                </span>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Image
                    src="/assets/kilo.png"
                    alt="Monthly Mileage"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">{car.car.monthlyMileage} km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons: Stay aligned bottom right */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Image src="/assets/loc.jpg" alt="Location" width={20} height={20} />
          <span>Al nahda</span>
        </div>

        <div className="flex items-center justify-end gap-4 mt-2">
          <button className="flex items-center justify-center gap-2 px-4 h-10 min-w-[200px] rounded-lg border border-gray-200 text-sm">
            <Image src="/assets/cll.svg" alt="Call" width={20} height={20} />
            Call
          </button>
          <button className="flex items-center justify-center gap-2 px-4 h-10 min-w-[200px] rounded-lg bg-green-50 border border-green-500 text-green-600 text-sm">
            <Image
              src="/assets/wat.svg"
              alt="WhatsApp"
              width={20}
              height={20}
            />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCat;
