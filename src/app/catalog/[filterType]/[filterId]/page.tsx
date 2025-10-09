import CatalogHeader from "@/components/catalogue/CatalogHeader";
import FiltersPanel from "@/components/catalogue/FilterPanel";
import SortingBar from "@/components/catalogue/SortingBar";
import { notFound } from "next/navigation";
import CarCards from "@/components/catalogue/CarCards";

interface SearchParams {
  brand?: string;
  bodyType?: string;
  priceRange?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  page?: string;
}

interface PageParams {
  filterType: string;
  filterId: string;
}

const getCatalogData = async (
  filterType: string,
  filterId: string,
  pageNum: string | undefined
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cars/${filterType}/${filterId}${
        pageNum ? `?page=${pageNum}` : ""
      }`,
      {
        cache: "no-store",
      }
    );
    if (res.status === 404) {
      notFound();
    }
    if (!res.ok) {
      throw new Error(`Failed to fetch listings. Status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
};

const getFilteredData = async (params: SearchParams = {}) => {
  try {
    const urlParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        urlParams.append(key, value);
      }
    });

    const queryString = urlParams.toString();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cars/filter${
      queryString ? `?${queryString}` : ""
    }`;

    const res = await fetch(url, { cache: "no-store" });

    if (res.status === 404) {
      notFound();
    }

    if (!res.ok) {
      throw new Error(
        `Failed to fetch filtered listings. Status: ${res.status}`
      );
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch filter error:", err);
    throw err;
  }
};

const Catalog = async ({
  params,
  searchParams = {},
}: {
  params: PageParams;
  searchParams: SearchParams;
}) => {
  const search = await searchParams;
  const { brand, bodyType, priceRange, location, startDate, endDate, page } =
    search || {};
  let data;

  const hasFilters = [
    brand,
    bodyType,
    priceRange,
    location,
    startDate,
    endDate,
    page,
  ].some((val) => val && val !== "");

  if (hasFilters) {
    data = await getFilteredData({
      brand,
      bodyType,
      priceRange,
      location,
      startDate,
      endDate,
      page,
    });
  } else {
    data = await getCatalogData(params.filterType, params.filterId, page);
  }
  return (
    <>
      <CatalogHeader />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-8">
        <div className="w-full block sm:flex sm:gap-6">
          <FiltersPanel />
          <div className="w-full">
            <SortingBar />
            <CarCards data={data.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
