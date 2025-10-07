"use client";

import { Search, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const CatalogHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchData, setSearchData] = useState({
    brand: "",
    type: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount in case user is already scrolled
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchData);
  };

  return (
    <header
      className={`w-full relative sm:sticky top-0 z-50 bg-site-primary text-white shadow-lg pt-20`}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <form onSubmit={handleSearch} className={`py-6`}>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium mb-2">
                Brand or Model
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search by brand or model..."
                  value={searchData.brand}
                  onChange={(e) =>
                    setSearchData({ ...searchData, brand: e.target.value })
                  }
                  className="w-full bg-site-secondary/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-site-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium mb-2">Car Type</label>
              <select
                value={searchData.type}
                onChange={(e) =>
                  setSearchData({ ...searchData, type: e.target.value })
                }
                className="w-full bg-site-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-site-accent transition-colors"
              >
                <option value="">All Types</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
              </select>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <select
                  value={searchData.location}
                  onChange={(e) =>
                    setSearchData({ ...searchData, location: e.target.value })
                  }
                  className="w-full bg-site-secondary/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-site-accent transition-colors appearance-none"
                >
                  <option value="">All Emirates</option>
                  <option value="dubai">Dubai</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah</option>
                  <option value="ajman">Ajman</option>
                  <option value="ras-al-khaimah">Ras Al Khaimah</option>
                  <option value="fujairah">Fujairah</option>
                  <option value="umm-al-quwain">Umm Al Quwain</option>
                </select>
              </div>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium mb-2">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="date"
                  value={searchData.startDate}
                  onChange={(e) =>
                    setSearchData({ ...searchData, startDate: e.target.value })
                  }
                  className="w-full bg-site-secondary/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-site-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium mb-2">End Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="date"
                  value={searchData.endDate}
                  onChange={(e) =>
                    setSearchData({ ...searchData, endDate: e.target.value })
                  }
                  className="w-full bg-site-secondary/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-site-accent transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-site-site-accent hover:bg-site-site-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-site-site-accent/20"
            >
              Search Cars
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default CatalogHeader;
