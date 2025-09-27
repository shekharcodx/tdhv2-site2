"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarCard from "./CarCard";
import { type CarTypes } from "@/types/homePageTypes";
import SwiperCore from "swiper";
import { SwiperOptions } from "swiper/types";
import { AnimatePresence, motion } from "framer-motion";
import { defaultCarouselBreakpoints } from "@/util/carouselBreakpoints";
import CarCardSkeleton from "./CarCardSkeleton";

interface CarCardProps {
  uId: number;
  animateVal?: string;
  title?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClasses?: string;
  innerStyle?: React.CSSProperties;
  innerClasses?: string;
  arrows?: boolean;
  autoplay?: boolean;
  needWrapper?: boolean;
  swiperRef?: React.RefObject<SwiperCore | null>;
  setIsBeginning?: (isBeginning: boolean) => void;
  setIsEnd?: (isEnd: boolean) => void;
  carouselBreakpoints?: SwiperOptions["breakpoints"];
  data: CarTypes[];
}

const CarCarousel = ({
  uId,
  animateVal,
  title,
  wrapperStyle,
  wrapperClasses,
  innerStyle,
  innerClasses,
  arrows = true,
  autoplay = false,
  needWrapper = true,
  swiperRef,
  setIsBeginning,
  setIsEnd,
  carouselBreakpoints = defaultCarouselBreakpoints,
  data,
}: CarCardProps) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    console.log("CarCarousel:data", data);
    setDomLoaded(true);
  }, [data]);

  const content = (
    <>
      {title && (
        <div className="w-full mb-6">
          <p className="text-base md:text-[25px] font-medium text-black">
            {title}
          </p>
        </div>
      )}

      {domLoaded ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={animateVal}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            <Swiper
              observer={true}
              observeParents={true}
              watchOverflow={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={12}
              slidesPerView={4}
              onBeforeInit={(swiper) => {
                if (swiperRef) {
                  swiperRef.current = swiper;
                }
              }}
              onSlideChange={(swiper) => {
                setIsBeginning?.(swiper.isBeginning);
                setIsEnd?.(swiper.isEnd);
              }}
              loop={false}
              className="relative z-10 !pb-[5px] w-full"
              navigation={{
                prevEl: `.custom-prev-${uId}`,
                nextEl: `.custom-next-${uId}`,
              }}
              pagination={{
                el: `.custom-pagination-${uId}`,
                clickable: true,
              }}
              autoplay={
                autoplay
                  ? { delay: 3000, disableOnInteraction: false }
                  : undefined
              }
              breakpoints={carouselBreakpoints}
            >
              {/* <AnimatePresence mode="wait">
            <motion.div
              key={tab} // 👈 only re-animate the whole slide group
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="contents" // 👈 lets children (slides) render normally
            > */}
              {domLoaded
                ? data?.map((car: CarTypes) => (
                    <SwiperSlide key={car._id}>
                      {/* <motion.div
                    key={tab + car._id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  > */}
                      <CarCard car={car} />
                      {/* </motion.div> */}
                    </SwiperSlide>
                  ))
                : Array.from({ length: 4 }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <CarCardSkeleton />
                    </SwiperSlide>
                  ))}
              {/* </motion.div>
          </AnimatePresence> */}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="flex overflow-x-auto gap-3 px-1 scrollbar-hide">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex-shrink-0 w-[280px] max-w-[310px]">
              <CarCardSkeleton />
            </div>
          ))}
        </div>
      )}

      {/* Custom Arrows and Pagination */}
      {domLoaded && arrows && (
        <div className="w-full hidden md:flex justify-between items-center mt-6">
          <div
            className={`custom-pagination-${uId} flex justify-start gap-2`}
          ></div>

          <div className="flex justify-end gap-6">
            <button
              className={`custom-prev-${uId} w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40`}
            >
              <Image src="/assets/left.png" alt="Prev" width={20} height={20} />
            </button>
            <button
              className={`custom-next-${uId} w-[86px] h-[40px] flex items-center justify-center rounded-full bg-[#59787C] shadow cursor-pointer transition-opacity disabled:opacity-40`}
            >
              <Image
                src="/assets/right.png"
                alt="Next"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );

  if (!needWrapper) return content;

  return (
    <div
      className={
        wrapperClasses ? wrapperClasses : "w-full pt-4 md:pt-10 relative"
      }
      style={wrapperStyle}
    >
      <div
        className={innerClasses ? innerClasses : "max-w-[1312px] mx-auto"}
        style={innerStyle}
      >
        {content}
      </div>
    </div>
  );
};

export default CarCarousel;
