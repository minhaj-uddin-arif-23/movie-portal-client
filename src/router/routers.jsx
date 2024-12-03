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

export const routers = createBrowserRouter([
  {
    path:'/',
    element:<RootElement />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'allMovie',
        element:<AllMovie />
      },
      {
        path:'tv',
        element:<TvShow />,
      },
      {
        path:'blog',
        element:<Blog />
      },
      {
        path:"addMovie",
        element:<AddMovie />
      },
      {
        path:'fovaurite',
        element:<Myfavourite />
      }
    ]
  }

  
])

