import CardCat from "@/app/components/catalogue/Card";
import Search from "@/app/components/catalogue/Search";

import { CarTypes } from "@/types/homePageTypes";
//import SearchBox from "../components/home/SearchBox";
// Mock da
const cars: CarTypes[] = [
  {
    _id: "1",
    vendor: {
      vendorDetails: {
        contact: {
          whatsappNum: "1234567890",
          landlineNum: "0123456789",
          mobileNum: "9876543210",
        },
        businessName: "Super Cars Rental",
      },
    },
    rentPerDay: 500,
    rentPerMonth: 12000,
    title: "Lamborghini Aventador",
    minRentalDays: 1,
    car: {
      carBrand: {
        name: "Lamborghini",
        logo: { url: "/assets/brand-lambo.png" },
      },
      category: "Luxury",
      tankCapacity: 80,
      transmission: "Automatic",
      seatingCapacity: 2,
      carInsurance: "yes",
      dailyMileage: 200,
      monthlyMileage: 4000,
      images: [{ url: "/assets/c1.svg" }],
    },
  },
  
];

export default function Page() {
  return (
   <div>
         {/* Hero Section */}
         <div className="relative w-full h-[280px] md:h-[600px] mx-auto bg-[url(/assets/cat.svg)] bg-cover bg-center">
           {/* Hero Title */}
           <div className="flex justify-center items-center w-full max-w-[1312px] h-full justify-start ml-[60px] text-white">
             <h1 className="text-3xl font-bold md:text-[50px] md:font-bold text-center justify-start">
               CATALOGUE
             </h1>
           </div>
           {/* Search Box */}
           <Search />
         </div>
  
      <div className="px-[16px] md:px-[32px] lg:px-[64px]  mt-[120px] mb-[20px]">
      
        {/* Search by Category */}
        {cars.map((car) => (
          <CardCat key={car._id} car={car} />
        ))}
    </div>    </div>
    
    
  );
}
