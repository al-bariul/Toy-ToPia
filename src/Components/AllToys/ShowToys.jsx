import React from "react";

const ShowToys = ({ toys }) => {
  const {
    pictureURL,
    toyName,
    description,
    subCategory,
    price,
    rating,
    sellerName,
    sellerEmail,
  } = toys;
  //   console.log(toys);
  return (
    <div>
      <div className="card bg-base-100 w-96 h-auto shadow-sm">
        <figure className="h-60 w-full overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover object-center"
            src={pictureURL}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toyName}
            <div className="badge badge-secondary">🏆 {rating}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions">
            <div className="badge badge-outline">{subCategory}</div>
            <div className="badge badge-outline">{price} $</div>
            <div className="mt-6">
              <div className="sellerName">Seller Name : {sellerName}</div>
              <div className="sellerEmail">Seller Email : {sellerEmail}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowToys;
