"use client";

import {
  Filter,
  Car,
  DollarSign,
  MapPin,
  Calendar,
  X,
  Palette,
  Shield,
} from "lucide-react";
import { useState } from "react";

interface FiltersPanelProps {
  filters?: {
    carType: string[];
    bodyType: string[];
    priceRange: [number, number];
    brands: string[];
    colors: string[];
    location: string;
    availability: Date | null;
    noDeposit: boolean;
  };
  //   setFilters?: (filters: any) => void;
}

const FiltersPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const carTypes = [
    { value: "sports", label: "Sports" },
    { value: "luxury", label: "Luxury" },
    { value: "suv", label: "SUV" },
    { value: "sedan", label: "Sedan" },
    { value: "coupe", label: "Coupe" },
    { value: "convertible", label: "Convertible" },
  ];

  const bodyTypes = [
    { value: "coupe", label: "Coupe" },
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "convertible", label: "Convertible" },
    { value: "hatchback", label: "Hatchback" },
    { value: "wagon", label: "Wagon" },
  ];

  const brands = [
    "Lamborghini",
    "Ferrari",
    "Porsche",
    "Bentley",
    "Rolls-Royce",
    "Mercedes",
    "BMW",
    "Audi",
    "McLaren",
    "Jaguar",
    "Nissan",
    "Acura",
    "Chevrolet",
  ];

  const colors = [
    { value: "black", label: "Black", hex: "#000000" },
    { value: "white", label: "White", hex: "#FFFFFF" },
    { value: "silver", label: "Silver", hex: "#C0C0C0" },
    { value: "grey", label: "Grey", hex: "#808080" },
    { value: "red", label: "Red", hex: "#DC2626" },
    { value: "blue", label: "Blue", hex: "#2563EB" },
    { value: "yellow", label: "Yellow", hex: "#FBBF24" },
    { value: "green", label: "Green", hex: "#16A34A" },
    { value: "orange", label: "Orange", hex: "#EA580C" },
  ];

  const locations = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
  ];

  return (
    <div className="w-full sm:w-[320px] flex-shrink-0">
      <div className="sticky top-[205px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-site-primary text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5" />
            <h3 className="text-xl font-bold">Filters</h3>
            {/* {activeFiltersCount > 0 && (
              <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold">
                {activeFiltersCount}
              </span>
            )} */}
          </div>
          {/* {activeFiltersCount > 0 && (
            <button
              className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          )} */}
        </div>

        <div className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">
                No Deposit Required
              </h4>
            </div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                // checked={filters.noDeposit}
                // onChange={(e) =>
                //   setFilters({ ...filters, noDeposit: e.target.checked })
                // }
                className="w-5 h-5 rounded border-2 border-gray-300 text-site-accent focus:ring-site-accent focus:ring-2 cursor-pointer"
              />
              <span className="text-site-secondary group-hover:text-site-primary transition-colors font-medium">
                Show only no deposit cars
              </span>
            </label>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Category</h4>
            </div>
            <div className="space-y-2">
              {carTypes.map((type) => (
                <label
                  key={type.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      //   checked={filters.carType.includes(type.value)}
                      //   onChange={() => toggleCarType(type.value)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-site-accent focus:ring-site-accent focus:ring-2 cursor-pointer"
                    />
                  </div>
                  <span className="text-site-secondary group-hover:text-site-primary transition-colors">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Body Type</h4>
            </div>
            <div className="space-y-2">
              {bodyTypes.map((type) => (
                <label
                  key={type.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      //   checked={filters.bodyType.includes(type.value)}
                      //   onChange={() => toggleBodyType(type.value)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-site-accent focus:ring-site-accent focus:ring-2 cursor-pointer"
                    />
                  </div>
                  <span className="text-site-secondary group-hover:text-site-primary transition-colors">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">
                Price Range (Daily)
              </h4>
            </div>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                // value={filters.priceRange[1]}
                // onChange={(e) =>
                //   setFilters({
                //     ...filters,
                //     priceRange: [0, parseInt(e.target.value)],
                //   })
                // }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-site-accent"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="text-site-secondary">AED 0</span>
                {/* <span className="font-semibold text-site-primary">
                  AED {filters.priceRange[1].toLocaleString()}+
                </span> */}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Brand</h4>
            </div>
            <div className="space-y-2 max-h-[240px] overflow-y-auto">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      //   checked={filters.brands.includes(brand)}
                      //   onChange={() => toggleBrand(brand)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-site-accent focus:ring-site-accent focus:ring-2 cursor-pointer"
                    />
                  </div>
                  <span className="text-site-secondary group-hover:text-site-primary transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Color</h4>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  //   onClick={() => toggleColor(color.value)}
                  //   className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  //     filters.colors.includes(color.value)
                  //       ? "border-accent bg-accent/5"
                  //       : "border-gray-200 hover:border-gray-300"
                  //   }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs font-medium text-site-secondary">
                    {color.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Location</h4>
            </div>
            <select
              //   value={filters.location}
              //   onChange={(e) =>
              //     setFilters({ ...filters, location: e.target.value })
              //   }
              className="w-full bg-off-white border border-gray-200 rounded-lg px-4 py-3 text-site-primary focus:outline-none focus:border-site-accent transition-colors"
            >
              <option value="">All Emirates</option>
              {locations.map((location) => (
                <option
                  key={location}
                  value={location.toLowerCase().replace(" ", "-")}
                >
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-site-accent" />
              <h4 className="font-bold text-site-primary">Availability</h4>
            </div>
            <input
              type="date"
              //   value={filters.availability?.toISOString().split("T")[0] || ""}
              //   onChange={(e) =>
              //     setFilters({
              //       ...filters,
              //       availability: e.target.value
              //         ? new Date(e.target.value)
              //         : null,
              //     })
              //   }
              className="w-full bg-off-white border border-gray-200 rounded-lg px-4 py-3 text-site-primary focus:outline-none focus:border-site-accent transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
