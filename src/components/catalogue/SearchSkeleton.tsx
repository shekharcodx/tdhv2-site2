import { Skeleton } from "@/components/ui/skeleton"

export default function SearchSkeleton() {
  return (
    <div className="absolute top-[80%] md:top-[unset] md:bottom-0 md:translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-128px)] h-[336px] sm:h-[260px] md:h-[300px] lg:h-[202px] bg-white rounded-[24px] p-4 md:p-6 shadow-lg flex flex-col justify-between gap-6">
      
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-10 w-20 rounded-full" />
      </div>

      {/* Input Row */}
      <div className="flex gap-[10px] lg:gap-6 items-end flex-wrap">
        {/* Location */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <Skeleton className="h-4 w-20 mb-2 mx-4" />
          <Skeleton className="h-12 w-full rounded-full" />
        </div>

        {/* Car make & model */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <Skeleton className="h-4 w-28 mb-2 mx-4" />
          <Skeleton className="h-12 w-full rounded-full" />
        </div>

        {/* Pricing */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <Skeleton className="h-4 w-16 mb-2 mx-4" />
          <Skeleton className="h-12 w-full rounded-full" />
        </div>

        {/* Extra Select */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <Skeleton className="h-4 w-20 mb-2 mx-4 opacity-0" /> {/* Hidden label */}
          <Skeleton className="h-12 w-full rounded-full" />
        </div>

        {/* Search Button */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <Skeleton className="h-4 w-6 mb-1 opacity-0" /> {/* Placeholder label */}
          <Skeleton className="h-12 w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}
