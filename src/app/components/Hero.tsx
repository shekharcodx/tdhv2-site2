import Image from "next/image";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import CategoryTabs from "./CategoryTabs";

export default function Hero() {
  return (
    <div>
    <div className="relative w-[1440px] h-[600px] mx-auto">
      <Image
        src="/assets/back.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <Navbar />
  <div className="absolute top-[243px] left-1/2 -translate-x-1/2 w-[1312px] h-[29px] flex items-center justify-center opacity-100 text-white">
        <h1 className="text-[25px] font-semibold text-center">
          FIND YOUR DREAM CAR
        </h1>
      </div>
      <SearchBox/>
      
    <p
        className="absolute text-[25px] font-medium text-black "
        style={{
          
    
          top: "737px",
          left: "64px",
          opacity: 1,
          gap: "24px",
        
          padding:"14px"
        }}
      >
        SEARCH BY CATEGORY
      </p>
       <div className="absolute top-[800px] h-[80px] left-1/2 -translate-x-1/2 flex">
        <CategoryTabs />
      </div>
    </div>
    </div>
  );
}
