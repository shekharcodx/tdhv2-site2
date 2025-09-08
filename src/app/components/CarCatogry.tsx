"use client";

import { useState } from "react";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, name: "Luxury Cars", image: "/assets/c2.svg"  },
  { id: 2, name: "Economy Cars", image: "/assets/c1.svg"  },
  { id: 3, name: "Sports Cars", image:"/assets/c4.svg"  },
  { id: 4, name: "Special Editions", image: "/assets/c6.svg"  },
  { id: 5, name: "Muscle Cars", image: "/assets/c1.svg"  },
  { id: 6, name: "Electric Cars", image: "/assets/c5.svg" },
];

export default function CategorySelector() {
  const [activeId, setActiveId] = useState(1);

  return (
    
    
      <div
        className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-md"
        style={{
          width: "1312px",
          height: "177px",
          gap: "16px",
        }}
      >
        {categories.map((cat) => {
          const isActive = activeId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex flex-col items-center justify-center transition-all duration-300`}
              style={{
                width: isActive ? "205.33px" : "auto",
                height: "177px",
                gap: "10px",
                borderRadius: "10px",
                padding: "24px",
                background: isActive ? "#263337" : "transparent",
                color: isActive ? "#fff" : "#000",
              }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={60}
                className="object-contain"
              />
              <span
                className="text-[18px] text-center"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  lineHeight: "130%",
                }}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

  );
}
