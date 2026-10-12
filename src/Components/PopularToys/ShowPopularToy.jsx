import React from "react";
import { Link } from "react-router";

const ShowPopularToy = ({ popularToy }) => {
  const { toyName, price, rating, availableQuantity, pictureURL, toyId } =
    popularToy;
  //   console.log(popularToy);
  return (
    <div>
      <div className="card bg-base-100 w-96 h-96 shadow-xl">
        <figure className="h-52 w-full overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover object-center"
            src={pictureURL}
            alt=""
          />
        </figure>
        <div className="card-body overflow-hidden shrink-0">
          <h2 className="card-title flex justify-between items-start gap-2">
            <span className="flex-1">{toyName}</span>
            <div className="badge text-yellow-400 font-bold text-[18px] border-0 shrink-0 whitespace-nowrap">
              🏆 {rating}
            </div>
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">Price : {price}$</div>
            <div className="badge badge-outline">
              In Stock : {availableQuantity}
            </div>
          </div>
        </div>
        <Link
          to={`/toy-details/${toyId}`}
          className="mb-2 btn bg-red-400 text-white rounded-xl w-48 mx-auto"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ShowPopularToy;
