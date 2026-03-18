import React, { use } from "react";
import ShowPopularToy from "./ShowPopularToy";

const PopularToy = ({ showPopularToys }) => {
  const showPopularToy = use(showPopularToys);
  const firstSixData = showPopularToy.slice(0, 6);

  return (
    <div className="my-28 w-11/12 mx-auto">
      <div className="header text-center">
        <h1 className="text-5xl font-bold">Popular Toys</h1>
        <p className="text-2xl mt-5">
          Top picks loved by kids and parents alike
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {firstSixData.map((popularToy) => (
          <ShowPopularToy popularToy={popularToy}></ShowPopularToy>
        ))}
      </div>
      <div className="show-all text-center">
        <button className="btn mt-20 text-2xl px-10 py-6 text-white bg-red-500 rounded-xl">Show All</button>
      </div>
    </div>
  );
};

export default PopularToy;
