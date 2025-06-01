// components/HeroSection.tsx
import React from "react";

const HeroSection = () => (
  <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Welcome to MySite</h1>
      <p className="mt-4 text-lg md:text-xl">Find your perfect place to stay</p>
    </div>
  </section>
);

export default HeroSection;
