import SearchBox from "./components/SearchBox";
import CategoryTabs from "./components/CategoryTabs";
import CarCarousel from "./components/CarCard";
import BrandCard from "./components/BrandCard";
import CategorySelector from "./components/CarCatogry";
import Redcar from "./components/Redcar";
import Whitecar from "./components/whitecar";
import TopChoicesSection from "./topchoice";
import Whitecarflip from "./components/whiteflip";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[280px] md:h-[600px] mx-auto bg-[url(/assets/back.jpg)] bg-cover bg-center">
        {/* Hero Title */}
        <div className="flex justify-center items-center w-full max-w-[1312px] h-full text-white">
          <h1 className="text-base font-bold md:text-[25px] md:font-semibold text-center">
            FIND YOUR DREAM CAR
          </h1>
        </div>
        {/* Search Box */}
        <SearchBox />
      </div>

      <div className="px-[16px] md:px-[32px] lg:px-[64px]">
        {/* Search by Category */}
        <div className="w-full max-w-[1312px] mx-auto mt-[300px] md:mt-50 lg:mt-40">
          <p className="text-base md:text-[25px] font-medium text-black mb-4 md:mb-6">
            Search By Category
          </p>
          <CategoryTabs />
        </div>

        {/* Car Carousel Section */}
        <div className="w-full mx-auto overflow-visible">
          <CarCarousel />
        </div>

        {/* Brand Section */}
        <div className="w-full mx-auto">
          <BrandCard />
        </div>

        {/* Best Car Section */}
        <div className="w-full mx-auto pb-10">
          <CarCarousel title="The Best Cars In Dubai" autoplay={false} />
        </div>

        {/* Category Selector Section */}
        <div className="w-full mx-auto pb-10">
          <CategorySelector />
        </div>

        <div className="w-full mx-auto pb-3">
          <CarCarousel
            arrows={false}
            autoplay={true}
            wrapperClasses="w-full mx-auto rounded-xl pt-7 relative bg-[linear-gradient(83.62deg,#59787C_5.03%,#263337_205.27%)]"
            innerClasses="mx-4 sm:mx-7 pb-7"
          />
        </div>

        <div className="w-full mx-auto">
          <Redcar />
        </div>

        <div className="w-full mx-auto pb-3">
          <CarCarousel title="Popular Cars" />
        </div>

        <div className="w-full mx-auto">
          <Whitecar />
        </div>

        <div className="w-full mx-auto">
          <TopChoicesSection />
        </div>

        <div className="w-full mx-auto pb-10">
          <Whitecarflip />
        </div>
      </div>
    </div>
  );
}
