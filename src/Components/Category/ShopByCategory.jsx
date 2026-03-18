import React, { use } from "react";
import ShowCategory from "./ShowCategory";

const ShopByCategory = ({ shopCategory }) => {
  const shopCategories = use(shopCategory);
  //   console.log(shopCategories);

  const uniqueCategories = shopCategories.filter(
    (item, index, arr) =>
      index ===
      arr.findIndex(
        (uniqueItem) => uniqueItem.subCategory === item.subCategory,
      ),
  );
  //   console.log(uniqueCategories);
  return (
    <div className="my-28 w-11/12 mx-auto">
      <div className="header text-center">
        <h1 className="text-5xl font-bold">Shop by Category</h1>
        <p className="text-2xl mt-5">Find the perfect toy by category</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {uniqueCategories.map((categories) => (
          <ShowCategory categories={categories}></ShowCategory>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
