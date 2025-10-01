import CatalogCardSkeleton from "@/components/catalogue/CardSkeleton";

const Loading = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <CatalogCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default Loading;
