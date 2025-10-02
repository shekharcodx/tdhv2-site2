import { Skeleton } from "@/components/ui/skeleton";

const CatalogCardSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1080px] h-[325.6px] rounded-[12px] border border-[#E5E5E5] overflow-hidden bg-white md:gap-5 relative mr-auto shadow-sm">
      {/* Left: Car Image */}
      <div className="relative w-full md:w-[35%] h-[200px] md:h-full">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Right: Car Details */}
      <div className="flex flex-col justify-between flex-1 p-4 gap-3">
        {/* Title + Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <Skeleton className="h-6 w-40 mb-2" />
            <div className="flex gap-2 mt-2 flex-wrap">
              <Skeleton className="h-4 w-12 rounded-full" />
              <Skeleton className="h-4 w-12 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        {/* Features */}
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div className="flex flex-col gap-3 flex-1 min-w-[200px]">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-44" />
          </div>

          {/* Pricing */}
          <div className="flex flex-col gap-3 mt-1">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-4 mt-2">
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CatalogCardSkeleton;
