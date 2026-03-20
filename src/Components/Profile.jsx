import React, { use } from "react";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const { user, addNamePhoto, setUser } = use(AuthenticationContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    addNamePhoto({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </nav>

      {/* Card */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-base-100">
        <div className="card bg-base-200 shadow-xl p-10 rounded-2xl w-full max-w-sm text-center">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          {user && (
            <div className="flex flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md object-cover object-center"
                src={user?.photoURL}
                alt="User Photo"
              />
              <h2 className="text-xl font-bold mt-4">
                Name : {user?.displayName}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Email : {user?.email}
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">
              Edit Profile
            </h2>
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                <label className="label">Update Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="New name"
                />

                <label className="label mt-3">Update Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="photoURL"
                />

                <button className="btn btn-neutral w-full mt-6 text-white bg-red-400 hover:bg-white hover:text-red-400 border-none">
                  Save Changes
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Profile;
