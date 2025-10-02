import CatalogCardSkeleton from "@/components/catalogue/CardSkeleton";
import catalogHeroImg from "@/assets/images/catalog-hero.svg";
import SearchSkeleton from "@/components/catalogue/SearchSkeleton";

const Loading = () => {
  return (
    <>
      <div
        className={`relative w-full h-[280px] md:h-[600px] mx-auto bg-cover bg-center`}
        style={{ backgroundImage: `url(${catalogHeroImg.src})` }}
      >
        <div className="w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-128px)] mx-auto flex justify-start items-center max-w-[1312px] h-full text-white">
          <h1 className="text-base font-bold md:text-[25px] md:font-semibold text-center">
            Catalogue
          </h1>
        </div>

        <SearchSkeleton />
      </div>
      <div className="px-[16px] md:px-[32px] lg:px-[64px] mt-[120px] mb-[20px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <CatalogCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default Loading;
