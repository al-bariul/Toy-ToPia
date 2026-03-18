import React from "react";

/*
 ********** FROM REACT ROUTER ***********
 */
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Authentication from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../Components/PrivateRoute";
import ToyDetails from "../Components/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/toy-details/:toyId",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/public/toys.json"),
  },
]);

export default router;
