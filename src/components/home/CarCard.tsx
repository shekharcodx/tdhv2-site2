"use client";

import { useEffect, useState } from "react";
import {
  Star,
  Users,
  Gauge,
  Shield,
  Calendar,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import VerifiedBadge from "./VerifiedBadge";
import Link from "next/link";
import Image from "next/image";
import { type CarTypes } from "@/types/homePageTypes";

interface CarCardProps {
  car: CarTypes;
}

export default function CarCard({ car }: CarCardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");
  const [imgSrc, setImgSrc] = useState("/assets/car_placeholder.png");

  useEffect(() => {
    if (car) {
      setImgSrc(car.car.images[0]?.url || "/assets/car_placeholder.png");
    }
  }, [car]);

  const getPriceForPeriod = () => {
    switch (selectedPeriod) {
      case "daily":
        return { amount: car.rentPerDay, label: "/day" };
      case "weekly":
        return { amount: car.rentPerWeek, label: "/week" };
      case "monthly":
        return { amount: car.rentPerMonth, label: "/month" };
    }
  };

  const getTransmissionSubstring = () => {
    switch (car.car.transmission?.toLowerCase()) {
      case "automatic":
        return "Auto";
      case "manual":
        return "Manual";
      case "semi-automatic":
        return "Semi-Auto";
    }
  };

  const price = getPriceForPeriod();

  return (
    <div className="flex-shrink-0 h-fit w-full sm:w-[380px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out-cubic group border border-soft-grey/30">
      <Link href={`/car/${car._id}`} className="block">
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-teal/5 to-transparent">
          <Image
            src={imgSrc}
            alt={`${car.car.carBrand.name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out-cubic"
            height={960}
            width={1280}
            objectFit="cover"
            onError={() => setImgSrc("/assets/car_placeholder.jpg")}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* <div className="absolute top-4 right-4 bg-white/98 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-dark-base">{rating}</span>
            <span className="text-xs text-grey">({reviews})</span>
          </div> */}
          {car.isPremium && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-slate-teal to-slate-teal/90 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              Premium
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-slate-teal font-bold mb-1 uppercase tracking-wide">
              {car.car.carBrand.name}
            </p>
            <Link href={`/car/${car._id}`}>
              <h3 className="text-2xl font-bold text-dark-base mb-3 group-hover:text-slate-teal transition-colors duration-300">
                {car.title}
              </h3>
            </Link>
          </div>
          <div className="ml-3">
            <Image
              src={car.car.carBrand.logo.url}
              alt={`${car.car.carBrand.name} image`}
              height={48}
              width={48}
              className="w-12 h-12 rounded-xl object-contain bg-white border-2 border-soft-grey/30 p-1"
            />
          </div>
        </div>

        <div className="mb-5">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSelectedPeriod("daily")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                selectedPeriod === "daily"
                  ? "bg-slate-teal text-white shadow-lg scale-105"
                  : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setSelectedPeriod("weekly")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                selectedPeriod === "weekly"
                  ? "bg-slate-teal text-white shadow-lg scale-105"
                  : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setSelectedPeriod("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                selectedPeriod === "monthly"
                  ? "bg-slate-teal text-white shadow-lg scale-105"
                  : "bg-slate-teal/10 text-slate-teal hover:bg-slate-teal/20"
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-dark-base">
              AED {price.amount.toLocaleString()}
            </span>
            <span className="text-grey font-medium">{price.label}</span>
          </div>
        </div>

        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2.5 text-sm text-grey">
            <CheckCircle className="w-4 h-4 text-slate-teal" />
            <span className="font-medium">Minimum {car.minRentalDays} day</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-grey">
            <Shield className="w-4 h-4 text-slate-teal" />
            <span className="font-medium">{`Insurance${
              car.car.carInsurance == "yes" ? " " : " not "
            }Included`}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5 pb-5 border-b border-soft-grey/30">
          <div className="flex items-center gap-2">
            <span className="text-xs text-grey">Provided by</span>
            <span className="text-sm font-bold text-dark-base">
              {car.vendor.vendorDetails.businessName}
            </span>
            {/* {isVerified && ( */}
            <div className="relative group/badge">
              <VerifiedBadge className="w-5 h-5" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-dark-base text-white text-xs rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-10">
                Verified Provider
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-dark-base rotate-45"></div>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className="flex items-center gap-5 mb-6 text-grey text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-teal" />
            <span className="font-medium">{car.car.seatingCapacity} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-slate-teal" />
            <span className="font-medium">{getTransmissionSubstring()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-teal" />
            <span className="font-medium">Available</span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href={`/car/${car._id}`}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-teal to-slate-teal/90 hover:from-slate-teal/90 hover:to-slate-teal text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group/btn"
          >
            <span>Rent Now</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${car.vendor.vendorDetails.contact.landlineNum}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-slate-teal/30 text-slate-teal hover:border-slate-teal hover:bg-slate-teal/5 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href={`https://wa.me/${car.vendor.vendorDetails.contact.whatsappNum}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-site-accent/30 text-site-accent hover:bg-site-accent hover:text-white hover:border-site-accent px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
