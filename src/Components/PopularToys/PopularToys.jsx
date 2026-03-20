import React, { Suspense } from "react";
import PopularToy from "./PopularToy";

const showPopularToys = fetch("/toys.json").then((response) =>
  response.json(),
);

const PopularToys = () => {
  return (
    <div>
      <Suspense fallback={<p>coming...</p>}>
        <PopularToy showPopularToys={showPopularToys}></PopularToy>
      </Suspense>
    </div>
  );
};

export default PopularToys;
