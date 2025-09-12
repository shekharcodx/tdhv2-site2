import Image from "next/image";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import CategoryTabs from "./CategoryTabs";
import CarCarousel from "./CarCard";
import BrandCard from "./BrandCard";
import BestCar from "./BestCar";
import CategorySelector from "./CarCatogry";
import CatCard from "./CatogryCard";
import Redcar from "./Redcar";
import PopCar from "./popular";
import Whitecar from "./whitecar";
import TopChoicesSection from "../topchoice";
import Whitecarflip from "./whiteflip";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] h-[600px] mx-auto bg-[#F2F2F2]">
        <Image
          src="/assets/back.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <Navbar />

        {/* Hero Title */}
        <div className="absolute top-[243px] left-1/2 -translate-x-1/2 w-full max-w-[1312px] h-[29px] flex items-center justify-center text-white px-4">
          <h1 className="text-[25px] font-semibold text-center">
            FIND YOUR DREAM CAR
          </h1>
        </div>

        <SearchBox />
      </div>

      {/* Search by Category */}
      <div className="w-full max-w-[1312px] mx-auto mt-40 px-4">
        <p className="text-[25px] font-medium text-black mb-6">
          Search By Category
        </p>
        <CategoryTabs />
      </div>

      {/* Car Carousel Section */}
      <div className="w-full mx-auto overflow-visible px-4">
        <CarCarousel />
      </div>

      {/* Brand Section */}
      <div className="w-full max-w-[1312px] mx-auto px-4">
        <BrandCard />
      </div>

      {/* Best Car Section */}
      <div className="w-full max-w-[1312px] mx-auto pb-10 px-4">
        <BestCar />
      </div>

      {/* Category Selector Section */}
      <div className="w-full max-w-[1312px] mx-auto pb-10 px-4">
        <CategorySelector />
      </div>

      <div className="w-full max-w-[1312px] mx-auto pb-3 px-4">
        <CatCard />
      </div>

      <div className="w-full max-w-[1312px] mx-auto px-4">
        <Redcar />
      </div>

      <div className="w-full max-w-[1312px] mx-auto pb-3 px-4">
        <PopCar />
      </div>

      <div className="w-full max-w-[1312px] mx-auto px-4">
        <Whitecar />
      </div>

      <div className="w-full max-w-[1312px] mx-auto px-4">
        <TopChoicesSection />
      </div>

      <div className="w-full max-w-[1312px] mx-auto pb-10 px-4">
        <Whitecarflip />
      </div>
    </div>
  );
}
