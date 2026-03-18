import React from "react";
import Login from "../Components/Login";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AuthLayouts = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white ">
        <Navbar></Navbar>
      </nav>

      {/* Children */}
      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default AuthLayouts;
