import React, { use } from "react";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthenticationContext);
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
