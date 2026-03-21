import React, { use } from "react";
import { AuthenticationContext } from "../Provider/AuthenticationContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthenticationContext);
  const location = useLocation();


  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
