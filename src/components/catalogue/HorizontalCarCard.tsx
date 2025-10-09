"use client";

import { useEffect, useState } from "react";
import {
  Star,
  Users,
  Gauge,
  Fuel,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";
import VerifiedBadge from "../home/VerifiedBadge";
import Image from "next/image";
import Link from "next/link";
import { CarTypes } from "@/types/homePageTypes";

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  images: string[];
  rating: number;
  reviews: number;
  seats: number;
  transmission: string;
  mileage: string;
  fuelType: string;
  providerName: string;
  providerLogo: string;
  isVerified: boolean;
  type: string;
  bodyType: string;
  color: string;
  location: string;
  noDeposit: boolean;
}

interface HorizontalCarCardProps {
  car: CarTypes;
}

const HorizontalCarCard = ({ car }: HorizontalCarCardProps) => {
  const [imgSrc, setImgSrc] = useState("/assets/car_placeholder.png");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  useEffect(() => {
    if (car) {
      setImgSrc(
        car?.car?.images?.[currentImageIndex]?.url ||
          "/assets/car_placeholder.png"
      );
    }
  }, [car, currentImageIndex]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovering && car?.car?.images?.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % car?.car?.images?.length);
      }, 400); // adjust speed here (ms)
    }
    return () => clearInterval(interval);
  }, [isHovering, car?.car?.images?.length]);

  const getPriceForPeriod = () => {
    switch (selectedPeriod) {
      case "daily":
        return {
          amount: car?.rentPerDay,
          label: "/day",
          mileage: car?.car?.dailyMileage || 250,
        };
      case "weekly":
        return {
          amount: car?.rentPerWeek,
          label: "/week",
          mileage: car?.car?.weeklyMileage || 1500,
        };
      case "monthly":
        return {
          amount: car?.rentPerMonth,
          label: "/month",
          mileage: car?.car?.monthlyMileage || 5000,
        };
    }
  };

  const price = getPriceForPeriod();

  return (
    <div className="w-full block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group mb-6">
      <div className="flex flex-col md:flex-row">
        <div
          className="md:w-[40%] h-full relative overflow-hidden bg-gray-100 flex-shrink-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // onMouseMove={handleImageCycle}
        >
          <Image
            width={100}
            height={100}
            src={imgSrc}
            alt={`${car?.car?.carBrand?.name} image`}
            onError={() => setImgSrc("/assets/car_placeholder.jpg")}
            className="w-full h-[355px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {car?.car?.images?.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {car?.car?.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-site-accent w-8"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="absolute top-4 left-4 bg-site-accent text-white px-3 py-1.5 rounded-full text-sm font-semibold">
            {car?.location}
          </div>

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-primary">4.7</span>
            {/* <span className="text-xs text-site-secondary">({car.reviews})</span> */}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-site-accent font-semibold text-sm mb-1">
                {car?.car?.carBrand?.name}
              </p>
              <h3
                className="text-2xl font-bold text-primary mb-1"
                style={{ fontFamily: "Stretch Pro, sans-serif" }}
              >
                {car?.title}
              </h3>
              <p className="text-site-secondary text-xs">
                {car?.car?.modelYear} Model
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                height={100}
                width={100}
                src={
                  car?.vendor?.profilePicture?.url ||
                  "/assets/car_placeholder.png"
                }
                alt={car?.vendor?.vendorDetails?.businessName}
                className="w-12 h-12 rounded-lg object-contain bg-white border border-gray-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
            <span className="text-xs text-site-secondary">Provided by</span>
            <span className="text-sm font-semibold text-primary">
              {car?.vendor?.vendorDetails?.businessName}
            </span>
            {/* {car.isVerified && ( */}
            <div className="relative group/badge">
              <VerifiedBadge className="w-5 h-5" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                Verified Provider
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-primary rotate-45"></div>
              </div>
            </div>
            {/* )} */}
          </div>

          <div className="grid grid-cols-5 gap-3 mb-5">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-off-white flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-site-accent" />
              </div>
              <span className="text-xs text-site-secondary font-medium">
                Year
              </span>
              <span className="text-sm font-bold text-primary">
                {car?.car?.modelYear}
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-off-white flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-site-accent" />
              </div>
              <span className="text-xs text-site-secondary font-medium">
                Seats
              </span>
              <span className="text-sm font-bold text-primary">
                {car?.car?.seatingCapacity}
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-off-white flex items-center justify-center">
                <Gauge className="w-3.5 h-3.5 text-site-accent" />
              </div>
              <span className="text-xs text-site-secondary font-medium">
                Trans.
              </span>
              <span className="text-sm font-bold text-primary">
                {car?.car?.transmission}
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-off-white flex items-center justify-center">
                <Gauge className="w-3.5 h-3.5 text-site-accent" />
              </div>
              <span className="text-xs text-site-secondary font-medium">
                Mileage
              </span>
              <span className="text-sm font-bold text-primary">
                {car?.car?.mileage}
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-8 h-8 rounded-full bg-off-white flex items-center justify-center">
                <Fuel className="w-3.5 h-3.5 text-site-accent" />
              </div>
              <span className="text-xs text-site-secondary font-medium">
                Fuel
              </span>
              <span className="text-sm font-bold text-primary">
                {car?.car?.fuelType}
              </span>
            </div>
          </div>

          <div className="block sm:flex items-end justify-between">
            <div>
              <div className="flex justify-center sm:justify-left gap-1.5 mb-2">
                <button
                  onClick={() => setSelectedPeriod("daily")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    selectedPeriod === "daily"
                      ? "bg-gradient-to-r from-site-accent to-slate-teal text-white shadow-lg scale-105"
                      : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setSelectedPeriod("weekly")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    selectedPeriod === "weekly"
                      ? "bg-gradient-to-r from-site-accent to-slate-teal text-white shadow-lg scale-105"
                      : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setSelectedPeriod("monthly")}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    selectedPeriod === "monthly"
                      ? "bg-gradient-to-r from-site-accent to-slate-teal text-white shadow-lg scale-105"
                      : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className="flex justify-center sm:justify-left items-baseline gap-1.5 mt-6 sm:mt-0">
                <span className="text-2xl font-bold text-primary">
                  AED {price?.amount?.toLocaleString()}
                </span>
                <span className="text-site-secondary text-xs">
                  {price?.label}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Gauge className="w-3.5 h-3.5 text-slate-teal" />
                <span className="text-xs text-grey font-medium">
                  {price?.mileage} km{" "}
                  {selectedPeriod === "daily"
                    ? "per day"
                    : selectedPeriod === "weekly"
                    ? "per week"
                    : "per month"}{" "}
                  included
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-left gap-1.5 mt-6 sm:mt-0">
              <a
                href={`tel:${car?.vendor?.vendorDetails?.contact?.mobileNum}`}
                className="flex items-center justify-center gap-2 bg-gradient-to-br from-white to-off-white border-2 border-soft-grey/50 text-site-secondary hover:border-site-accent hover:text-site-accent hover:bg-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-3 h-3" />
                Call
              </a>
              <a
                href={`https://wa.me/${car?.vendor?.vendorDetails?.contact?.whatsappNum?.replaceAll(
                  " ",
                  ""
                )}`}
                className="flex items-center justify-center gap-2 bg-gradient-to-br from-white to-off-white border-2 border-site-accent/60 text-site-accent hover:border-site-accent px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-site-accent hover:to-site-accent/90 hover:text-white hover:shadow-lg hover:shadow-site-accent/25 hover:-translate-y-0.5 text-sm shadow-md"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-site-accent  to-slate-teal text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-site-accent/30 hover:-translate-y-0.5 text-sm shadow-lg">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarCard;
