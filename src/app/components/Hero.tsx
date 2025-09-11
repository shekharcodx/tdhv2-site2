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
      <div className="relative w-[1440px] h-[600px] mx-auto bg-[#F2F2F2]">
        <Image
          src="/assets/back.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        <Navbar />

        {/* Hero Title */}
        <div className="absolute top-[243px] left-1/2 -translate-x-1/2 w-[1312px] h-[29px] flex items-center justify-center text-white">
          <h1 className="text-[25px] font-semibold text-center">
            FIND YOUR DREAM CAR
          </h1>
        </div>

        <SearchBox />
      </div>

      {/* Search by Category */}
      <div className="w-[1312px] mx-auto mt-40">
        <p className="text-[25px] font-medium text-black mb-6 mx-3">
          Search By Category
        </p>
        <CategoryTabs />
      </div>

      {/* Car Carousel Section */}
      <div className="w-full mx-auto overflow-visible">
        <CarCarousel />
      </div>

      {/* Brand Section */}
      <div className="w-[1312px] mx-auto">
        <BrandCard />
      </div>

      {/* Best Car Section */}
      <div className="w-[1312px] mx-auto pb-10">
        <BestCar />
      </div>

      {/* Category Selector Section */}
      <div className="w-[1312px] mx-auto pb-10">
        <CategorySelector />
      </div>
       <div className="w-[1312px] mx-auto pb-3">
        <CatCard/>
      </div>
     <div className="w-[1312px] mx-auto ">
        <Redcar/>
      </div>
      <div className="w-[1312px] mx-auto pb-3">
        <PopCar/>
      </div>
       <div className="w-[1312px] mx-auto ">
        <Whitecar/>
      </div>
       <div className="w-[1312px] mx-auto">
        <TopChoicesSection/>
      </div>
      <div className="w-[1312px] mx-auto pb-10">
        <Whitecarflip/>
      </div>




    </div>
  );
}
