import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Category from "../Components/Category/Category";
import PopularToys from "../Components/PopularToys/PopularToys";
import Choose from "../Components/Choose";
import Footer from "../Components/Footer";

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

      {/* Popular Toys */}
      <PopularToys></PopularToys>

      {/* Choose */}
      <Choose></Choose>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
