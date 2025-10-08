import { notFound } from "next/navigation";
import HeroFormLayout from "@/components/home/hero";
import FeatureCards from "@/components/home/FeatureCards";
import CategoriesSection from "@/components/home/CategoriesSection";
import CarsCarousel from "@/components/home/CarsCarousel";
import { featuredCarsData } from "@/data/carouselDummyData";
import BrandCarousel from "@/components/home/BrandCarousel";
import MobileAppBanner from "@/components/home/MobileAppBanner";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import DocumentsRequired from "@/components/home/DocumentsRequired";
import Navbar from "@/components/home/Navbar";

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
      <section className="relative w-full h-auto md:h-full mx-auto bg-gradient-to-b from-dark-base to-off-white">
        <Navbar />
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Hero Title */}
          <div className="text-center mb-4 md:mb-6 max-w-4xl animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight leading-tight">
              Luxury Cars.{" "}
              <span className="bg-gradient-to-r from-slate-teal to-site-accent bg-clip-text text-transparent">
                Instant Booking.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Premium car rentals across the UAE with seamless booking
            </p>
          </div>
          {/* Search Box */}
          <HeroFormLayout
            brands={pageData?.data?.[0]?.carBrands}
            categories={pageData?.data?.[0]?.allCategories}
          />
          <div className="mt-4 flex flex-wrap justify-center gap-2 animate-fade-in">
            <div className="bg-slate-teal/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-teal/30 text-white font-medium text-xs">
              500+ Luxury Cars
            </div>
            <div className="bg-slate-teal/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-teal/30 text-white font-medium text-xs">
              UAE-Wide Delivery
            </div>
            <div className="bg-slate-teal/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-teal/30 text-white font-medium text-xs">
              24/7 Support
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-gradient-to-b from-off-white to-white">
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
        <DocumentsRequired />
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
