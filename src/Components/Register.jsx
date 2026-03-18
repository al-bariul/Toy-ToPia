import React, { use } from "react";
import { Link } from "react-router";
import { AuthenticationContext } from "../Provider/AuthenticationContext";

const Register = () => {
  const { createUser } = use(AuthenticationContext);
  console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-200 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register!</h1>
      </div>
      {/* Log In Form */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* Log IN With Google and Github */}
              <div className="login-with-google-github flex items-center justify-center">
                <div className="google">
                  <button className="btn border-red-400 bg-transparent hover:bg-red-400 text-sm text-red-400 hover:text-white">
                    Log In With Google
                  </button>
                </div>
                <div className="github ml-10">
                  <button className="btn border-red-400 bg-transparent hover:bg-red-400 text-sm text-red-400 hover:text-white">
                    Log In With Github
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
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
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
    </div>
  );
};

export default Register;
