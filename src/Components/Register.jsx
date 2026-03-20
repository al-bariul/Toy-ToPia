import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const { createUser, addNamePhoto, setUser, handleGoogle } = use(
    AuthenticationContext,
  );
  //   console.log(createUser);
  const [error, setError] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, photoURL, email, password);

    // Password Validation
    const length6Pattern = /.{6,}/;
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const specialPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!length6Pattern.test(password)) {
      console.log("password didn't match");
      setError("Password must be 6 character or longer.");
      return;
    } else if (!casePattern.test(password)) {
      setError("Password must have one capital and small letter.");
      return;
    } else if (!specialPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, include one uppercase letter, and one special character (e.g., @, #, $).",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result);
        const user = result.user;
        console.log(user);
        event.target.reset();
        addNamePhoto({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch(() => {});
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    handleGoogle()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowpassword(!showpassword);
  };

  return (
    <div className="bg-base-200 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register!</h1>
      </div>
      {/* Log In Form */}
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse w-[500px]">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* Log IN With Google and Github */}
              <div className="login-with-google-github flex items-center justify-center">
                <div className="google">
                  <button
                    type="button"
                    onClick={handleGoogleLogIn}
                    className="btn border-red-400 bg-transparent hover:bg-red-400 text-sm text-red-400 hover:text-white"
                  >
                    Log In With Google
                  </button>
                </div>
              </div>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />

                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input"
                    placeholder="Photo URL"
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showpassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />

                    {/* Show Password */}
                    <button
                      className="btn btn-xs absolute right-6 top-2"
                      onClick={handleTogglePasswordShow}
                    >
                      {showpassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </button>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>

                {/* Showing Error For Password */}
                {error && <p className="text-red-500">{error}</p>}
              </form>
              {/* Already Have An Account */}
              <p>
                Already Have An Account{" "}
                <Link
                  className="text-blue-500 hover:text-blue-900"
                  to="/auth/login"
                >
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tostify */}
      <ToastContainer />
    </div>
  );
};

export default Register;
