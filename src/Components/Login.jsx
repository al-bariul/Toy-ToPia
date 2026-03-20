import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthenticationContext } from "../Provider/AuthenticationContext";

const Login = () => {
  const { userSignIn } = use(AuthenticationContext);
  const navigate = useNavigate();
  // const [profile, setProfile] = useState([]);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    userSignIn(email, password)
      .then((result) => {
        // setProfile(result.user);
        console.log(result);
        event.target.reset();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-base-200 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
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
              <form onSubmit={handleLogIn}>
                <fieldset className="fieldset">
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
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              {/* Already Have An Account */}
              <p>
                New To Our Website{" "}
                <Link
                  className="text-blue-500 hover:text-blue-900"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
