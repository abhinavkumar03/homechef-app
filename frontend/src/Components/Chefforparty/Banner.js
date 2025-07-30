import React from "react";

const FoodBanner1 = () => {
  return (
    <div className="relative h-[350px]  bg-center" style={{ backgroundImage: "url('https://thechefkart.com/_next/image?url=%2Fsample.png&w=1920&q=75')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        What are you waiting for, when it’s
        </h2>
        <p className="text-6xl font-bold text-orange-500 mt-4">
        Good Food. Good <br/> People Good Life.
        </p>
      </div>

      {/* Floating Icons */}
      
      
    </div>
  );
};

export default FoodBanner1;