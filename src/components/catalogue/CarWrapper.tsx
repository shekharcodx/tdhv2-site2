"use client";

import { CarTypes } from "@/types/homePageTypes";
import CardCat from "./Card";

interface CarWrapperProps {
  data: {
    docs: CarTypes[];
    totalDocs: number;
    page: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  };
}

const CarWrapper = ({ data }: CarWrapperProps) => {
  console.log("CarWrapper:data", data);
  return (
    <div className="px-[16px] md:px-[32px] lg:px-[64px] mt-[120px] mb-[20px]">
      {data.docs.length > 0 ? (
        data.docs.map((car, i) => <CardCat key={i} car={car} />)
      ) : (
        <h1 className="text-center py-28 w-full text-2xl">No cars found!</h1>
      )}
    </div>
  );
};

export default CarWrapper;
