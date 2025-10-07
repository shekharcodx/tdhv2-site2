// import Search from "@/components/catalogue/Search";
// import { notFound } from "next/navigation";
// import catalogHeroImg from "@/assets/images/catalog-hero.svg";
// import CarWrapper from "@/components/catalogue/CarWrapper";
import CatalogHeader from "@/components/catalogue/CatalogHeader";
import FiltersPanel from "@/components/catalogue/FilterPanel";
import SortingBar from "@/components/catalogue/SortingBar";
import HorizontalCarCard from "@/components/catalogue/HorizontalCarCard";
import { carsData } from "@/data/carsData";
import { notFound } from "next/navigation";
import CarCards from "@/components/catalogue/CarCards";
//import SearchBox from "../components/home/SearchBox";
// Mock da

interface PageProps {
  params: {
    filterType: string;
    filterId: string;
  };
}
//   {
//     _id: "1",
//     vendor: {
//       vendorDetails: {
//         contact: {
//           whatsappNum: "1234567890",
//           landlineNum: "0123456789",
//           mobileNum: "9876543210",
//         },
//         businessName: "Super Cars Rental",
//       },
//     },
//     rentPerDay: 500,
//     rentPerMonth: 12000,
//     title: "Lamborghini Aventador",
//     minRentalDays: 1,
//     car: {
//       carBrand: {
//         name: "Lamborghini",
//         logo: { url: "/assets/brand-lambo.png" },
//       },
//       category: "Luxury",
//       tankCapacity: 80,
//       transmission: "Automatic",
//       seatingCapacity: 2,
//       carInsurance: "yes",
//       dailyMileage: 200,
//       monthlyMileage: 4000,
//       images: [{ url: "/assets/c1.svg" }],
//     },
//   },
// ];

const getCatalogData = async (filterType: string, filterId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cars/${filterType}/${filterId}`,
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

const Catalog = async ({ params }: PageProps) => {
  const data = await getCatalogData(params.filterType, params.filterId);
  console.log("page:CatalogData", data);
  const cars = carsData;
  return (
    <>
      <CatalogHeader />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-8">
        <div className="w-full block sm:flex sm:gap-6">
          <FiltersPanel />
          <div className="w-full">
            <SortingBar />
            <CarCards data={data.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
