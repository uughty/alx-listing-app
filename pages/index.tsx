import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";

const filters = ["Top Villa", "Self Checkin", "Pool", "Pet Friendly", "Free WiFi", "Mountain View"];

const IndexPage = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <>
      <HeroSection />
      {/* Your filter pills and listings here */}
    </>
  );
};

export default IndexPage;
