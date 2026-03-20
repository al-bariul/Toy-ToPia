import React, { use } from "react";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const { user } = use(AuthenticationContext);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white ">
        <Navbar></Navbar>
      </nav>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Profile</h1>
        {user && (
          <div className="mt-5 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={user?.photoURL}
              alt="User Photo"
            />
            <h2 className="text-xl font-semibold mt-2">
              Name : {user?.displayName}
            </h2>
            <p className="text-gray-500">Email : {user?.email}</p>
          </div>
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Profile;
