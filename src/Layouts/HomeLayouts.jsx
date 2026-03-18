import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Category from "../Components/Category/Category";

const HomeLayouts = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white ">
        <Navbar></Navbar>
      </nav>

      {/* Slider */}
      <Slider></Slider>

      {/* Shop By Category */}
      <Category></Category>
    </div>
  );
};

export default HomeLayouts;
