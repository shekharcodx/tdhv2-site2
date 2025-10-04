"use client";

import { Search, Calendar, MapPin, DollarSign, Car } from "lucide-react";

export default function HeroFormLayout() {
  return (
    <div className="w-full absolute top-[80%] md:top-[unset] md:bottom-0 md:translate-y-1/2 left-1/2 -translate-x-1/2 ">
      <div className="w-[calc(100%-128px)] backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 animate-slide-up border border-soft-grey/20 mx-auto">
        <h2 className="text-2xl font-semibold text-dark-base mb-6 text-center lg:text-left">
          Find Your Perfect Ride
        </h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {/* Brand */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                Brand
              </label>
              <div className="relative">
                <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <select className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium">
                  <option>All Brands</option>
                  <option>Lamborghini</option>
                  <option>Ferrari</option>
                  <option>Porsche</option>
                  <option>Bentley</option>
                  <option>Rolls-Royce</option>
                  <option>McLaren</option>
                </select>
              </div>
            </div>

            {/* Type */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                Type
              </label>
              <div className="relative">
                <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <select className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium">
                  <option>All Types</option>
                  <option>Sports Car</option>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Convertible</option>
                  <option>Coupe</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                Price Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <select className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium">
                  <option>Any Price</option>
                  <option>AED 500 - 1,000/day</option>
                  <option>AED 1,000 - 2,000/day</option>
                  <option>AED 2,000 - 5,000/day</option>
                  <option>AED 5,000+/day</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <select className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium">
                  <option>All Locations</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                </select>
              </div>
            </div>

            {/* Start Date */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium"
                />
              </div>
            </div>

            {/* End Date */}
            <div className="group">
              <label className="block text-sm font-semibold text-dark-base mb-2.5">
                End Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-teal w-5 h-5 transition-transform group-hover:scale-110" />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-teal to-slate-teal/90 hover:from-slate-teal/90 hover:to-slate-teal text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 group"
          >
            <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg">Search Available Cars</span>
          </button>
        </form>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in">
        <div className="bg-slate-teal/20 backdrop-blur-md px-5 py-2 rounded-full border border-slate-teal/30 text-white font-medium text-sm">
          500+ Luxury Cars
        </div>
        <div className="bg-slate-teal/20 backdrop-blur-md px-5 py-2 rounded-full border border-slate-teal/30 text-white font-medium text-sm">
          UAE-Wide Delivery
        </div>
        <div className="bg-slate-teal/20 backdrop-blur-md px-5 py-2 rounded-full border border-slate-teal/30 text-white font-medium text-sm">
          24/7 Support
        </div>
      </div>
    </div>
  );
}
