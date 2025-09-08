import { useState, useRef } from "react";

export default function CategoryTabs() {
  const categories = [
    "Economy Cars",
    "Luxury Cars Rental Dubai",
    "Sports Cars Rental Dubai",
    "Muscle Cars",
    "Special Edition",
    "No Deposit Cars",
    "Electric Cars",
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (idx: number) => {
    setActiveIndex(idx);

    const container = containerRef.current;
    if (container) {
      const button = container.children[idx] as HTMLElement;
      button.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-[1292px] h-[40px] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] flex items-center overflow-x-auto gap-2 px-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(idx)}
          className="flex items-center justify-center text-sm font-medium whitespace-nowrap transition"
          style={{
            width: "246px", // fixed button space
            height: "40px",
          }}
        >
          <span
            className={`px-4 py-1 rounded-full transition ${
              activeIndex === idx
                ? "bg-[#263337] text-white"
                : "text-gray-800 hover:bg-[#263337]/80 hover:text-white"
            }`}
          >
            {cat}
          </span>
        </button>
      ))}
    </div>
  );
}
