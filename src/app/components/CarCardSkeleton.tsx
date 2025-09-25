"use client";

import { Skeleton } from "@/components/ui/skeleton";

const CarCardSkeleton = () => {
  return (
    <div className="w-full max-w-[310px] h-auto rounded-[16px] overflow-hidden shadow-md bg-white flex flex-col pb-4 mx-auto">
      {/* Car Image */}
      <div className="min-w-[280px] h-[180px] relative">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Name + Heart */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col justify-center h-[52px] gap-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2.5 w-24" />
        </div>
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>

      {/* Fuel / Transmission / Seats */}
      <div className="w-full flex justify-between items-center px-4 gap-[5px] mt-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="flex-1 flex items-center gap-2 rounded-full p-[5px] shadow bg-white justify-center 2xl:min-w-[86px]"
          >
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-3 w-10" />
          </div>
        ))}
      </div>

      {/* Rent Conditions */}
      <div className="px-4 mt-2 flex justify-between items-start relative">
        <Skeleton className="w-[30px] h-[20px] rounded" />
        <div className="flex flex-col gap-1 items-end">
          <Skeleton className="h-2.5 w-28" />
          <Skeleton className="h-2.5 w-32" />
        </div>
      </div>

      {/* Monthly / Daily Prices */}
      <div className="w-full flex justify-between items-center px-4 mt-2">
        <div className="flex flex-col items-start gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-between items-center px-4 mt-3 gap-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Skeleton key={idx} className="flex-1 h-[40px] rounded-full shadow" />
        ))}
      </div>
    </div>
  );
};

export default CarCardSkeleton;
