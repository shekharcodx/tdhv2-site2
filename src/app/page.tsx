import SearchBox from "@/app/components/home/SearchBox";
import CategoryTabs from "@/app/components/home/CategoryTabs";
import CarCarousel from "@/app/components/CarCarousel";
import BrandCard from "@/app/components/home/BrandCard";
import CategorySelector from "@/app/components/home/CarCatogry";
import Redcar from "@/app/components/home/Redcar";
import Whitecar from "@/app/components/home/whitecar";
import TopChoicesSection from "@/app/components/home/topchoice";
import Whitecarflip from "@/app/components/home/whiteflip";

const fetchListings = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/carsByCategories`,
    {
      cache: "no-store", // ensures fresh data (like getServerSideProps)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch listings");
  }

  return res.json();
};

export default async function Page() {
  const pageData = await fetchListings();
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
        <div className="w-full mx-auto">
          <CarCarousel uId={1} data={pageData.data[0].allCars} />
        </div>

        {/* Brand Section */}
        <div className="w-full mx-auto">
          <BrandCard />
        </div>

        {/* Best Car Section */}
        <div className="w-full mx-auto pb-10">
          <CarCarousel
            uId={2}
            data={pageData?.data[0]?.bestCars}
            title="The Best Cars In Dubai"
            autoplay={false}
          />
        </div>

        {/* Category Selector Section */}
        <div className="w-full mx-auto pb-10">
          <CategorySelector />
        </div>

        <div className="w-full mx-auto pb-3">
          <CarCarousel
            uId={3}
            data={pageData?.data[0]?.allCars}
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
          <CarCarousel
            uId={4}
            data={pageData?.data[0]?.popularCars}
            title="Popular Cars"
          />
        </div>

        <div className="w-full mx-auto">
          <Whitecar />
        </div>

        <div className="w-full mx-auto">
          <TopChoicesSection data={pageData?.data[0]?.topChoice} />
        </div>

        <div className="w-full mx-auto pb-10">
          <Whitecarflip />
        </div>
      </div>
    </div>
  );
}
