import { ArrowUpDown, Grid2x2 as Grid, List } from "lucide-react";

interface SortingBarProps {
  sortBy?: string;
  setSortBy?: (sortBy: string) => void;
  totalResults?: number;
}

const SortingBar = ({ sortBy, setSortBy, totalResults }: SortingBarProps) => {
  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-md z-40 mb-6 mt-6 sm:mt-0">
      <div className="block sm:flex items-center justify-between">
        <div className="mx-auto sm:mx-0">
          <h2 className="text-2xl font-bold text-primary mb-1 text-center">
            Available Cars
          </h2>
          <p className="text-site-secondary text-center">
            Showing{" "}
            {/* <span className="font-semibold text-primary">{totalResults}</span>{" "} */}
            luxury vehicles
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6 sm:mt-0">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-accent" />
            <span className="text-site-secondary font-medium">Sort by:</span>
          </div>

          <select
            // value={sortBy}
            // onChange={(e) => setSortBy(e.target.value)}
            className="bg-off-white border border-gray-200 rounded-lg px-4 py-2.5 text-primary font-semibold focus:outline-none focus:border-accent transition-colors cursor-pointer"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Cars</option>
            <option value="most-booked">Most Booked</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortingBar;
