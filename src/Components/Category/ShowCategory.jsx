import React from "react";

const ShowCategory = ({ categories }) => {
  const { subCategory, pictureURL } = categories;
  return (
    <div className="mt-10">
      <div className="card bg-base-100 w-96 h-80 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={pictureURL}
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{subCategory}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
