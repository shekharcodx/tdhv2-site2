// app/page.tsx
"use client";

import React from "react";
import Hero from "././components/Hero"; // ✅ cleaner with alias
//import BrandCard from "././components/BrandCard";
export default function Page() {
  return <Hero />;
}
