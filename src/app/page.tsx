import { notFound } from "next/navigation";
import HeroFormLayout from "@/components/home/hero";
import FeatureCards from "@/components/home/FeatureCards";
import CategoriesSection from "@/components/home/CategoriesSection";
import CarsCarousel from "@/components/home/CarsCarousel";
import { featuredCarsData } from "@/data/carouselDummyData";
import BrandCarousel from "@/components/home/BrandCarousel";
import MobileAppBanner from "@/components/home/MobileAppBanner";
import WhatWeOffer from "@/components/home/WhatWeOffer";

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
      <section className="relative w-full h-auto md:h-full mx-auto bg-[url(/assets/back.jpg)] bg-cover bg-center">
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Hero Title */}
          <div className="text-center mb-10 max-w-4xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Luxury Cars.{" "}
              <span className="bg-gradient-to-r from-slate-teal to-site-accent bg-clip-text text-transparent">
                Instant Booking.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Premium car rentals across the UAE with seamless booking
            </p>
          </div>
          {/* Search Box */}
          <HeroFormLayout
            brands={pageData?.data?.[0]?.carBrands}
            categories={pageData?.data?.[0]?.allCategories}
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <FeatureCards />
      </section>

      <section className="py-16 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <CategoriesSection data={pageData?.data?.[0]?.allCategories} />
      </section>

      <section className="py-20 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <BrandCarousel data={pageData?.data?.[0]?.carBrands} />
      </section>

      <section className="py-16 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
        <CarsCarousel
          cars={pageData?.data?.[0]?.featured}
          sectionTypeTitle={true}
          sectionTitle="Featured Cars"
          sectionDescription="Handpicked premium vehicles from verified providers across the UAE"
          bg="#fff"
          buttonsColor="#fff"
        />
      </section>

      <section className="py-16 bg-white">
        <CarsCarousel
          cars={
            pageData?.data?.[0]?.categories.find(
              (cat: { name: string }) => cat.name == "Luxury Cars"
            )?.listings
          }
          sectionTypeTitle={false}
          sectionTitle="Luxury Collection"
          sectionDescription="Experience the ultimate in automotive excellence"
          bg="#efeeea"
          buttonsColor="#efeeea"
        />
      </section>

      <section className="py-16 bg-off-white">
        <CarsCarousel
          cars={
            pageData?.data?.[0]?.categories.find(
              (cat: { name: string }) => cat.name == "Sports Cars"
            )?.listings
          }
          sectionTypeTitle={false}
          sectionTitle="Sports Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#efeeea"
          buttonsColor="#fff"
        />
      </section>

      <section className="py-16 bg-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.popularCars}
          sectionTypeTitle={false}
          sectionTitle="Popular Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#fff"
          buttonsColor="#efeeea"
        />
      </section>

      <section className="py-16 bg-off-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.bestCars}
          sectionTypeTitle={false}
          sectionTitle="Best Cars"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#efeeea"
          buttonsColor="#fff"
        />
      </section>

      <section className="py-16 bg-white">
        <CarsCarousel
          cars={pageData?.data?.[0]?.topChoice}
          sectionTypeTitle={false}
          sectionTitle="Top Choice"
          sectionDescription="High-performance vehicles for the thrill seekers"
          bg="#fff"
          buttonsColor="#efeeea"
        />
      </section>
      <section>
        <MobileAppBanner />
      </section>
      <section>
        <WhatWeOffer />
      </section>
    </div>
  );
}
