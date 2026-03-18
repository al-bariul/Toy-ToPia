import React from "react";

/*
 ********** FROM REACT ROUTER ***********
 */
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Authentication from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
