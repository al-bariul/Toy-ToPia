import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const HomeLayouts = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav >
        <Navbar></Navbar>
      </nav>

      {/* Slider */}
      <Slider></Slider>
    </div>
  );
};

export default HomeLayouts;
