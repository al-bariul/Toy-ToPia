import React from "react";
import { Link } from "react-router";
import { ExternalLink, Mail, User } from "lucide-react";

const ShowToys = ({ toys }) => {
  const {
    toyId,
    pictureURL,
    toyName,
    description,
    subCategory,
    price,
    rating,
    availableQuantity,
    sellerName,
    sellerEmail,
  } = toys;

  return (
    <div className="w-full flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-base-300 rounded-2xl overflow-hidden flex flex-col justify-between group">
        <div>
          <figure className="h-56 w-full overflow-hidden shrink-0 relative">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              src={pictureURL}
              alt={toyName}
            />
            <div className="absolute top-3 left-3">
              <span className="badge badge-neutral text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md bg-black/60 text-white border-0">
                {subCategory}
              </span>
            </div>
          </figure>

          <div className="card-body p-5">
            <h2 className="card-title flex justify-between items-start gap-2 text-lg font-bold">
              <span className="flex-1">{toyName}</span>
              <div className="badge badge-secondary shrink-0 whitespace-nowrap">
                🏆 {rating}
              </div>
            </h2>

            <p className="text-sm text-base-content/70 line-clamp-2 mt-1">
              {description}
            </p>

            <div className="flex items-center justify-between gap-2 mt-3 flex-wrap">
              <div className="text-xl font-black text-[#FF7052]">
                ${price}
              </div>
              <div className="badge badge-outline text-xs">
                In Stock: {availableQuantity ?? "Available"}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-base-200 text-xs text-base-content/60 space-y-1">
              <div className="flex items-center gap-1.5 truncate">
                <User className="w-3.5 h-3.5 text-base-content/40 shrink-0" />
                <span className="truncate">Seller: {sellerName}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <Mail className="w-3.5 h-3.5 text-base-content/40 shrink-0" />
                <span className="truncate">{sellerEmail}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 pt-0">
          <Link
            to={`/toy-details/${toyId}`}
            className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white w-full rounded-xl font-semibold border-0 shadow-md shadow-[#FF7052]/20 flex items-center justify-center gap-2"
          >
            View Details
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowToys;
