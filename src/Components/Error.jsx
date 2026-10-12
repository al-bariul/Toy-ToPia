import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50">
        <Navbar></Navbar>
      </nav>
      <div className="h-[100vh] mx-auto flex items-center justify-center text-7xl text-red-600 font-bold">
        Error 404
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
