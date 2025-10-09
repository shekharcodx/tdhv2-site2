"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  page: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  totalPages,
  initialPage = 1,
  page,
  onPageChange,
}: PaginationProps) => {
  //   const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    console.log("Pagination:", page);
    // setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          className={`px-3 py-2 rounded-lg border text-sm transition ${
            pageNum === page
              ? "bg-gradient-to-r from-site-accent to- to-slate-teal text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
