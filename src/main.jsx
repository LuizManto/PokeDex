import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./home/home";
import Pokelist from "./pokelist";
import Details from "./details";
import Search from "./search";
import Inicial from "./inicial";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "list", element: <Pokelist /> },
      { path: "pokemon/:name", element: <Details /> },
      { path: "search", element: <Search /> },
      { path: "inicial", element: <Inicial /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
