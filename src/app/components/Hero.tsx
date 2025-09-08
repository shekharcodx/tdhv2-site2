import Image from "next/image";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import CategoryTabs from "./CategoryTabs";
import CarCarousel from "./CarCard";
import BrandCard from "./BrandCard";
import BestCar from "./BestCar";
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
      <div className="w-[100%]  mx-auto overflow-visible">
        <CarCarousel />
      </div>
  {/* Search by Brand Section */}
{/* Search by Brand Section */}


{/* Brand cards aligned with heading, less gap */}
<div className="w-[1312px] mx-auto ">
  <BrandCard />
</div>
<div className="w-[1312px] mx-auto pb-10">
  <BestCar />
</div>


    </div>
  );
}
