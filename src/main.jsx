import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/*
 ********** FROM REACT ROUTER ***********
 */
import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";
import AuthenticationProvider from "./Provider/AuthenticationProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthenticationProvider>
  </StrictMode>,
);
