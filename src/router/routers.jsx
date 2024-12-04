// not only public router this can be include also private

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import RootElement from "../Root/RootElement";
// import Error from "../components/Error";
import Home from "../components/Home";
import AllMovie from "../components/AllMovie";
import TvShow from "../components/TvShow";
import Blog from "../components/Blog";
import AddMovie from "../components/AddMovie";
import Myfavourite from "../components/Myfavourite";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../AuthLayout/AuthLayout";
import Private_Router from "./Private_Router";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allMovie",
        element: <AllMovie />,
      },
      {
        path: "tv",
        element: <TvShow />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "addMovie",
        element: (
          // <Private_Router>
            <AddMovie />
          // </Private_Router>
        ),
      },
      {
        path: "fovaurite",
        element: <Myfavourite />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: <Login />,
      },
      {
        path: "/auth/signUp",
        element: <Register />,
      },
    ],
  },
]);
