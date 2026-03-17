import React from "react";

/*
 ********** FROM REACT ROUTER ***********
 */
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
]);

export default router;
