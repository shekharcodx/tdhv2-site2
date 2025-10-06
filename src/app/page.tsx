import { notFound } from "next/navigation";
import HeroFormLayout from "@/components/home/hero";
import FeatureCards from "@/components/home/FeatureCards";
import CategoriesSection from "@/components/home/CategoriesSection";
import CarsCarousel from "@/components/home/CarsCarousel";
import { featuredCarsData } from "@/data/carouselDummyData";
import BrandCarousel from "@/components/home/BrandCarousel";

const fetchListings = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/home-page/data`,
      {
        cache: "no-store",
      }
    );
    if (res.status === 404) {
      notFound();
    }
    if (!res.ok) {
      throw new Error(`Failed to fetch listings. Status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
};

export default async function Page() {
  const pageData = await fetchListings();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[280px] md:h-[600px] mx-auto bg-[url(/assets/back.jpg)] bg-cover bg-center">
        {/* Hero Title */}
        <div className="flex justify-center items-center w-full  max-w-none h-full text-white">
          <h1 className="text-base font-bold md:text-[25px] md:font-semibold text-center">
            FIND YOUR DREAM CAR
          </h1>
        </div>
        {/* Search Box */}
        <HeroFormLayout
          brands={pageData?.data?.[0]?.carBrands}
          categories={pageData?.data?.[0]?.allCategories}
        />
      </section>

      <section className="py-16 bg-white mt-[900px] sm:mt-[300px]">
        <FeatureCards />
      </section>

      <section className="py-24 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <CategoriesSection data={pageData?.data?.[0]?.allCategories} />
      </section>

      <section className="py-24 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <BrandCarousel data={pageData?.data?.[0]?.carBrands} />
      </section>

      <section className="py-24 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <CarsCarousel
          cars={pageData?.data?.[0]?.featured}
          sectionTypeTitle={true}
          sectionTitle="Featured Cars"
          sectionDescription="Handpicked premium vehicles from verified providers across the UAE"
          bg="#fff"
          buttonsColor="#fff"
        />
      </section>

      {/* <section className="py-20 bg-white">
        <CarsCarousel
          cars={featuredCarsData}
          sectionTypeTitle={false}
          sectionTitle="Luxury Collection"
          sectionDescription="Experience the ultimate in automotive excellence"
          bg="#efeeea"
          buttonsColor="#efeeea"
        />
      </section> */}

      {/* <section className="py-20 bg-off-white">
        <CarsCarousel
          cars={featuredCarsData}
          sectionTypeTitle={false}
          sectionTitle="Sports Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#efeeea"
          buttonsColor="#fff"
        />
      </section> */}

      <section className="py-20 bg-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.popularCars}
          sectionTypeTitle={false}
          sectionTitle="Popular Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#fff"
          buttonsColor="#efeeea"
        />
      </section>

      <section className="py-20 bg-off-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.bestCars}
          sectionTypeTitle={false}
          sectionTitle="Best Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#efeeea"
          buttonsColor="#fff"
        />
      </section>

      <section className="py-20 bg-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.topChoice}
          sectionTypeTitle={false}
          sectionTitle="Top Choice"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#fff"
          buttonsColor="#efeeea"
        />
      </section>
    </div>
  );
}
