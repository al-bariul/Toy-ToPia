import { Car, Gift, Shield, Star } from "lucide-react";
import React from "react";

const Choose = () => {
  return (
    <div className="w-11/12 mx-auto my-28">
      <div className="header text-center">
        <h2 className="text-5xl font-bold">Why Toy-ToPia?</h2>
        <p className="text-2xl mt-5">
          What makes us the best place for kid's toys
        </p>
      </div>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 mt-10">
        <div className="card bg-base-100 w-full shadow-lg">
          <figure className="px-10 pt-10">
            <Shield className="text-green-600 w-[50px] h-[50px]"></Shield>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Safe & Certified</h2>
            <p>All toys meet safety standards</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-lg">
          <figure className="px-10 pt-10">
            <Car className="text-blue-600 w-[50px] h-[50px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fast Delivery</h2>
            <p>Quick shipping from local sellers</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-lg">
          <figure className="px-10 pt-10">
            <Gift className="text-orange-600 w-[50px] h-[50px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Gift Wrapping</h2>
            <p>Free gift wrapping available</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-lg">
          <figure className="px-10 pt-10">
            <Star className="text-yellow-600 w-[50px] h-[50px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Top Rated</h2>
            <p>4.8★ average from happy families</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
