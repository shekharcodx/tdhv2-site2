"use client";

import {
  Search,
  Calendar,
  MapPin,
  User,
  ChevronDown,
  LogOut,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import VerifiedBadge from "../home/VerifiedBadge";
import Image from "next/image";

type MegaMenuType = "category" | "brand" | "budget" | null;

const CatalogHeader = () => {
  const { isAuthenticated, user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [searchData, setSearchData] = useState({
    brand: "",
    type: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"signin" | "register">(
    "signin"
  );
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = (menu: MegaMenuType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, menu: MegaMenuType) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (!user?.profileComplete) {
      setShowProfileSetup(true);
    }
  };

  const handleProfileComplete = () => {
    setShowProfileSetup(false);
  };

  return (
    <header
      className={`top-0 z-50 bg-gradient-to-br from-site-primary via-site-primary/95 to-slate-teal/40 text-white shadow-2xl backdrop-blur-sm border-b border-site-accent/10 relative overflow-visible`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(9,180,198,0.2),rgba(89,120,124,0.1)_40%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-6">
        {/* navbar */}
        <div className="flex items-center justify-between py-4 border-b border-white/10 relative">
          <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/60 via-slate-teal/40 to-transparent"></div>
          <div className="flex items-center gap-12">
            <Link href="/" className="group">
              <Image
                src="/assets/dlogo.png"
                alt="The Drive Hub"
                height={100}
                width={100}
                className="h-12 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-2" role="menubar">
              <Link
                href="/catalog"
                className="px-4 py-2 text-site-accent font-semibold hover:bg-white/10 rounded-lg transition-all duration-300"
                role="menuitem"
              >
                All Cars
              </Link>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("category")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 font-medium hover:text-site-accent hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-site-accent focus:ring-offset-2"
                  aria-expanded={activeMegaMenu === "category"}
                  aria-haspopup="true"
                  role="menuitem"
                  onKeyDown={(e) => handleKeyDown(e, "category")}
                  tabIndex={0}
                >
                  By Category
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeMegaMenu === "category" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("brand")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 font-medium hover:text-site-accent hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-site-accent focus:ring-offset-2"
                  aria-expanded={activeMegaMenu === "brand"}
                  aria-haspopup="true"
                  role="menuitem"
                  onKeyDown={(e) => handleKeyDown(e, "brand")}
                  tabIndex={0}
                >
                  By Brand
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeMegaMenu === "brand" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("budget")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 font-medium hover:text-site-accent hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-site-accent focus:ring-offset-2"
                  aria-expanded={activeMegaMenu === "budget"}
                  aria-haspopup="true"
                  role="menuitem"
                  onKeyDown={(e) => handleKeyDown(e, "budget")}
                  tabIndex={0}
                >
                  By Budget
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeMegaMenu === "budget" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 font-medium hover:text-site-accent hover:bg-white/10 rounded-lg transition-all duration-300"
                role="menuitem"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-3 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-site-accent to-slate-teal flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                      {user?.fullName?.charAt(0) || "U"}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">
                        {user?.fullName || "User"}
                      </p>
                      <p className="text-xs text-white/70">{user?.email}</p>
                    </div>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-soft-grey/20 overflow-hidden animate-in fade-in zoom-in duration-200">
                      <div className="p-4 bg-gradient-to-r from-site-accent/5 to-slate-teal/5 border-b border-soft-grey/20">
                        <p className="font-bold text-dark-base mb-1">
                          {user?.fullName}
                        </p>
                        <p className="text-sm text-grey">{user?.email}</p>
                        {user?.isVerified && (
                          <div className="mt-2">
                            <VerifiedBadge />
                          </div>
                        )}
                      </div>
                      <div className="p-2">
                        <Link
                          href="/profile"
                          onClick={() => setShowUserMenu(false)}
                          className="block w-full text-left px-4 py-3 hover:bg-slate-teal/5 rounded-lg text-dark-base transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <User className="w-4 h-4 text-slate-teal group-hover:scale-110 transition-transform" />
                            <span className="font-medium">My Profile</span>
                          </div>
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left px-4 py-3 hover:bg-red-50 rounded-lg text-red-600 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">Sign Out</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-site-accent to-slate-teal text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-site-accent focus:ring-offset-2"
                >
                  Sign In
                </button>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* form */}
        <form onSubmit={handleSearch} className="py-4 md:py-6 relative">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-site-accent/30 to-transparent"></div>
          <div className="flex flex-wrap items-end gap-3 md:gap-4">
            <div className="flex-1 min-w-[180px] md:min-w-[200px]">
              <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
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
                  className="w-full bg-site-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
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
                className="w-full bg-site-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
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
                  className="w-full bg-site-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200 appearance-none"
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
                  className="w-full bg-site-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
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
                  className="w-full bg-site-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-site-accent to-slate-teal text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
