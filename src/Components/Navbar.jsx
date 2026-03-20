import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthenticationContext } from "../Provider/AuthenticationContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthenticationContext);
  // console.log(user.photoURL);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-red-400 font-bold underline text-xl bg-transparent"
              : "text-black text-xl font-bold hover:text-white hover:bg-red-400 bg-transparent"
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  const loginBtn = (
    <Link
      to={"/auth/login"}
      className="btn bg-red-400 text-white hover:bg-white hover:text-red-400 border-2 border-red-400"
    >
      Log In
    </Link>
  );

  return (
    <div className="w-full shadow-sm  min-h-[10vh] flex items-center justify-center">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* Responsive Lists */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to={"/"}>
            <img className="w-16" src="/src/assets/logo.png" alt="" />
          </Link>
        </div>

        {/* Big Screen */}
        <div className="navbar-center hidden lg:flex">
          {/* Big Screen Lists */}
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link to="/profile">
              <img
                className={`${user?.photoURL ? "w-16 h-16 rounded-full mr-5 object-center object-cover" : ""}`}
                src={user ? user.photoURL : null}
                alt=""
                title={user?.displayName || "User Name"}
              />
            </Link>
          </div>
          {user ? (
            <a
              onClick={handleSignOut}
              className="btn bg-red-400 text-white hover:bg-white hover:text-red-400 border-2 border-red-400"
            >
              Sign Out
            </a>
          ) : (
            loginBtn
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
