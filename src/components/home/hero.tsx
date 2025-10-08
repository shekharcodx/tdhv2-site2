"use client";

import { Search, Calendar, MapPin, DollarSign, Car } from "lucide-react";

interface SearchFormProps {
  brands: [
    {
      _id: string;
      name: string;
      logo: { url: string };
    }
  ];
  categories: [
    {
      _id: string;
      name: string;
    }
  ];
}

const HeroFormLayout = ({ brands, categories }: SearchFormProps) => {
  return (
    <div className="w-full max-w-6xl backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-5 lg:p-6 animate-slide-up border border-soft-grey/20">
      <h2 className="text-base md:text-lg font-semibold text-dark-base mb-2 md:mb-3 text-center lg:text-left">
        Find Your Perfect Ride
      </h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              Brand
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <select className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm">
                <option value="">All Brands</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="ferrari">Ferrari</option>
                <option value="porsche">Porsche</option>
                <option value="bentley">Bentley</option>
                <option value="rollsroyce">Rolls-Royce</option>
                <option value="mclaren">McLaren</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              Type
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <select className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm">
                <option value="">All Types</option>
                <option value="sports">Sports Car</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="convertible">Convertible</option>
                <option value="coupe">Coupe</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              Price Range
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <select className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm">
                <option value="">Any Price</option>
                <option value="500-1000">AED 500 - 1,000/day</option>
                <option value="1000-2000">AED 1,000 - 2,000/day</option>
                <option value="2000-5000">AED 2,000 - 5,000/day</option>
                <option value="5000+">AED 5,000+/day</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <select className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm">
                <option value="">All Locations</option>
                <option value="dubai">Dubai</option>
                <option value="abudhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="ajman">Ajman</option>
                <option value="rak">Ras Al Khaimah</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              Start Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-dark-base mb-1.5">
              End Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-teal w-4 h-4 transition-transform group-hover:scale-110" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-3 border-2 border-soft-grey/50 rounded-xl focus:ring-2 focus:ring-slate-teal focus:border-slate-teal transition-all duration-300 bg-white hover:border-slate-teal/50 text-dark-base font-medium text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-site-accent to-slate-teal text-white font-semibold py-3 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-site-accent focus:ring-offset-2"
        >
          <Search className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm md:text-base">Search Available Cars</span>
        </button>
      </form>
    </div>
  );
};

export default HeroFormLayout;
