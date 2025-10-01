import Search from "@/components/catalogue/Search";
import { notFound } from "next/navigation";
import catalogHeroImg from "@/assets/images/catalog-hero.svg";
import CarWrapper from "@/components/catalogue/CarWrapper";
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
  return (
    <>
      {/* Hero Section */}
      <div
        className={`relative w-full h-[280px] md:h-[600px] mx-auto bg-cover bg-center`}
        style={{ backgroundImage: `url(${catalogHeroImg.src})` }}
      >
        {/* Hero Title */}
        <div className="w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-128px)] mx-auto flex justify-start items-center max-w-[1312px] h-full text-white">
          <h1 className="text-base font-bold md:text-[25px] md:font-semibold text-center">
            Catalogue
          </h1>
        </div>
        {/* Search Box */}
        <Search />
      </div>
      <CarWrapper data={data.data} />
    </>
  );
};

export default Catalog;
