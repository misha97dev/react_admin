import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "products", element: <Products /> },
    { path: "users", element: <Users /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
