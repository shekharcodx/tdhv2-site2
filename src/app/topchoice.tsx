import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
// 1️⃣ Define the Car type at the top
type Car = {
  id: number;
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  seats: string;
  monthly: string;
  daily: string;
};


export default function TopChoicesSection() {
  const [cars] = useState<Car[]>([
    { id: 1, name: "Nissan GT - R", type: "Sport", image: "/assets/car1.png", fuel: "80L", transmission: "Manual", seats: "2 Seats", monthly: "800/month", daily: "90/day" },
    { id: 2, name: "Lamborghini", type: "Luxury", image: "/assets/car2.png", fuel: "60L", transmission: "Auto", seats: "4 Seats", monthly: "1200/month", daily: "150/day" },
    { id: 3, name: "Ferrari", type: "Sport", image: "/assets/car3.png", fuel: "65L", transmission: "Auto", seats: "2 Seats", monthly: "1500/month", daily: "200/day" },
    { id: 4, name: "Porsche", type: "Luxury", image: "/assets/car2.png", fuel: "70L", transmission: "Manual", seats: "2 Seats", monthly: "1100/month", daily: "140/day" },
    { id: 5, name: "McLaren", type: "Sport", image: "/assets/car1.png", fuel: "75L", transmission: "Auto", seats: "2 Seats", monthly: "1600/month", daily: "220/day" },
  ]);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
 const swiperRef = useRef<SwiperCore | null>(null);


  return (
    <div className="py-12">
      <div className="max-w-[1312px] mx-auto flex gap-40">
        {/* Left Section */}
        <div className="w-[320px] flex flex-col gap-6">
          <h2 className="text-[20px] font-bold text-[#263238]   font-normal uppercase">Top Choices</h2>
          <p className="text-[20px] text-gray-600   font-normal leading-[px] w-[320px]">
            Explore our wide selection of popular cars that are loved by drivers everywhere.
          </p>
          <button className="w-[160px] h-[46px] rounded-full bg-[#59787C] text-white  font-normal text-[18px] font-medium">
            Explore Cars
          </button>

          {/* ✅ Arrows */}
          <div className="flex gap-3 mt-40">
  {/* Prev Button */}
{/* Prev Button */}
<button
  className={`custom-prev flex items-center justify-center px-8 py-2 rounded-full shadow transition 
    ${isBeginning ? "bg-[#59787C] opacity-50 cursor-not-allowed" : "bg-[#59787C] hover:bg-[#4a6468]"}`}
  disabled={isBeginning}
>
  <Image src="/assets/left.png" alt="Prev" width={28} height={28} />
</button>

{/* Next Button */}
<button
  className={`custom-next flex items-center justify-center px-8 py-2 rounded-full shadow transition 
    ${isEnd ? "bg-[#59787C] opacity-50 cursor-not-allowed" : "bg-[#59787C] hover:bg-[#4a6468]"}`}
  disabled={isEnd}
>
  <Image src="/assets/right.png" alt="Next" width={28} height={28} />
</button>

</div>

        </div>

        {/* Right Section (Swiper) */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView="auto"
          allowTouchMove={false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="pb-6 relative z-10"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id} style={{ width: "310px" }}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function CarCard({ car }: { car: Car }) {
  return (
    <div className="w-full max-w-[310px] h-[477px] rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col gap-4 pb-4">
      <div className="w-full h-[292px] relative">
        <Image src={car.image} alt={car.name} fill className="object-cover" />
      </div>

      <div className="w-full px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-[16px] font-semibold text-[#263238] font-[Poppins]">{car.name}</h3>
          <p className="text-[14px] text-gray-500 font-[Poppins]">{car.type}</p>
        </div>
        <Image src="/assets/heart.svg" alt="Favorite" width={24} height={24} />
      </div>

      <div className="w-full px-4 flex justify-between items-center">
        <Spec icon="/assets/petrol.svg" label={car.fuel} />
        <Spec icon="/assets/manual.svg" label={car.transmission} />
        <Spec icon="/assets/seats.svg" label={car.seats} />
      </div>

      <div className="w-full px-4 flex justify-between items-center">
        <Price icon="/assets/curr.svg" label={car.monthly} />
        <Price icon="/assets/curr.svg" label={car.daily} />
      </div>

      <div className="w-full px-4 flex justify-between items-center">
        <Action icon="/assets/cll.svg" />
        <Action icon="/assets/wat.svg" />
        <div className="w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer">
          <span className="text-white text-[15px] font-[Poppins]">Rent Now</span>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full p-[5px] shadow bg-white">
      <Image src={icon} alt={label} width={16} height={16} />
      <span className="font-[Poppins] text-[14px] text-[#374151]">{label}</span>
    </div>
  );
}

function Price({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <Image src={icon} alt="Currency" width={21} height={16} />
      <span className="font-[Poppins] text-[16px] font-semibold text-[#263238] whitespace-nowrap">{label}</span>
    </div>
  );
}

function Action({ icon }: { icon: string }) {
  return (
    <div className="w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#263337] shadow cursor-pointer">
      <Image src={icon} alt="Action" width={20} height={20} />
    </div>
  );
}
