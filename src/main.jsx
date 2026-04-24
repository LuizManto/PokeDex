import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Pokelist from "./pokelist";
import Details from "./details";
import Search from "./search";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "list", element: <Pokelist /> },
      { path: "pokemon/:name", element: <Details /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
