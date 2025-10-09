"use client";

import { CarTypes } from "@/types/homePageTypes";
import HorizontalCarCard from "./HorizontalCarCard";
import { useEffect, useMemo, useState } from "react";
import Pagination from "../shared/Pagination";
import { useRouter } from "@bprogress/next/app";
import { useSearchParams } from "next/navigation";

interface CarCardsProps {
  data: { docs: CarTypes[]; totalPages: number; page: number };
}

const CarCards = ({ data }: CarCardsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [catalogData, setCatalogData] = useState(data);

  const urlSearchParams = useMemo(() => {
    const params = new URLSearchParams();
    const keys = [
      "brand",
      "bodyType",
      "priceRange",
      "location",
      "startDate",
      "endDate",
    ];

    keys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params.append(key, value);
    });

    return params.toString();
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      setCatalogData(data);
    }
  }, [data]);

  return data?.docs?.length > 0 ? (
    <>
      {catalogData.docs.map((car) => (
        <HorizontalCarCard key={car._id} car={car} />
      ))}
      <Pagination
        totalPages={catalogData.totalPages}
        page={catalogData.page}
        onPageChange={(page) => {
          const newUrl = `?page=${page}${
            urlSearchParams ? `&${urlSearchParams}` : ""
          }`;
          router.push(newUrl, { scroll: false });
        }}
      />
    </>
  ) : (
    <h1 className="text-2xl font-bold text-primary mb-1 text-center mt-20">
      No Cars Found!
    </h1>
  );
};

export default CarCards;
