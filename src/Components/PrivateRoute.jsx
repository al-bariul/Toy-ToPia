import React, { use } from "react";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthenticationContext);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/auth/login"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
