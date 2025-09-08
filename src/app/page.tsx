// app/page.tsx
"use client";

import React from "react";
import Hero from "././components/Hero"; // ✅ cleaner with alias
//import BrandCard from "././components/BrandCard";
//import CarCarousel from "./components/CarCard";
export default function Page() {
  return <Hero/>;
}
