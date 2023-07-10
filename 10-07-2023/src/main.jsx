import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./routes/error";
import ProductsStatic from "./routes/products";
import Products from "./routes/products";
import Locations from "./routes/locations";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/welcome",
    element: <h1>CIAOOOO QUESTA È UN MESSAGGIO DI BENVENUTO</h1>,
  },
  {
    path: "/products",
    element: <ProductsStatic />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
