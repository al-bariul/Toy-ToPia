import React, { Suspense } from "react";
import ShopByCategory from "./ShopByCategory";

const shopCategory = fetch("/public/toys.json").then((response) =>
  response.json(),
);
// console.log(shopCategory);

const Category = () => {
  return (
    <div>
      <Suspense fallback={<p>Categories are coming...</p>}>
        <ShopByCategory shopCategory={shopCategory}></ShopByCategory>
      </Suspense>
    </div>
  );
};

export default Category;
