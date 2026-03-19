import React from "react";

const ToyDetailsCard = ({ toy }) => {
  const {
    pictureURL,
    toyName,
    description,
    subCategory,
    price,
    rating,
    availableQuantity,
  } = toy;

  return (
    <div>
      {/*  */}
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="rounded-sm">
          <img src={pictureURL} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <div>
            <p className="text-sm">{description}</p>
            <p className="mt-4 font-bold bg-base-300 rounded-2xl text-center w-6/12 py-1">
              {subCategory}
            </p>
          </div>
          <div className="card-actions mt-6 flex justify-center items-center text-xl">
            <p>
              <span className="font-bold">Rating :</span> 🏆{rating}
            </p>
            <p>
              <span className="font-bold">Available Quantity : </span>
              {availableQuantity}
            </p>
          </div>
          <div className="price text-xl">
            <p className="mt-6">
              <span className="font-bold">Price :</span> {price}$
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="hero mt-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <p className="text-center text-2xl font-bold">Try Now</p>
              <form>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input type="text" className="input" placeholder="Name" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />

                  <button className="btn btn-neutral mt-4">Try Now</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
