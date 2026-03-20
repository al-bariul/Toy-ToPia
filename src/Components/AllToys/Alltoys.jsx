import React from "react";
import { useLoaderData } from "react-router";
import ShowToys from "./ShowToys";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Alltoys = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white ">
        <Navbar></Navbar>
      </nav>
      <div className="w-11/12 mx-auto flex flex-wrap gap-10 items-center justify-center my-10">
        {data.map((toys) => (
          <ShowToys toys={toys}></ShowToys>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Alltoys;
