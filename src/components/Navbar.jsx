import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { RiMovieAiLine } from "react-icons/ri";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="navbar text-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               <NavLink to={`/`} className="mt-2">
                Home
              </NavLink>
              <NavLink to={`/allMovie`} className="mt-2">
                All Movie
              </NavLink>
              <NavLink to={`/tv`} className="mt-2">
               Tv Show
              </NavLink>
              <NavLink to={`/blog`} className="mt-2">
                Blog
              </NavLink>
               {/* this is private route */}
              <NavLink to={`/addMovie`} className="mt-2">
                Add Movie
              </NavLink>
              <NavLink to={`/fovaurite`} className="mt-2">
                My Favorites
              </NavLink>
              <div className="flex">
                {user && user?.email ? (
                  <div className="flex gap-2">
                    <Link to={`/profile`} className="flex gap-3">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full relative"
                        title={user?.displayName}
                        alt=""
                      />
                      <button
                        onClick={logOut}
                        className="btn bg-green-300 text-black"
                      >
                        Sign Out
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-3 ">
                    <FaUserCircle />

                    {user && user?.email ? (
                      <button
                        onClick={logOut}
                        className="btn bg-green-300 text-black"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <div className="flex gap-3">
                        <Link
                          to={`/auth/login`}
                          className="btn bg-green-300 font-semibold text-md text-black"
                        >
                          Sign in
                        </Link>
                        <div>
                          <Link
                            to={`/auth/register`}
                            className="btn bg-green-300 font-semibold text-md text-black"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                
              </div>
            </ul>
          </div>
          <div className=" ">
            <Link
              to={`/`}
              className="w-96 text-2xl md:ml-2 flex gap-3 lg:ml-2 font-semibold  "
            >
            <RiMovieAiLine />
                Movie <span className="text-yellow-400">Portal</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1  invisible md:visible">
            <div className="flex gap-5 font-medium text-lg invisible md:visible lg:visible ">
              <NavLink to={`/`} className="mt-2">
                Home
              </NavLink>
              <NavLink to={`/allMovie`} className="mt-2">
                All Movie
              </NavLink>
              <NavLink to={`/tv`} className="mt-2">
               Tv Show
              </NavLink>
              <NavLink to={`/blog`} className="mt-2">
                Blog
              </NavLink>
               {/* this is private route */}
              <NavLink to={`/addMovie`} className="mt-2">
                Add Movie
              </NavLink>
              <NavLink to={`/fovaurite`} className="mt-2">
                My Favorites
              </NavLink>
            </div>
          </ul>
         
        </div>
        <div className=" navbar-end gap-3 invisible md:visible">
          <div className="flex">
            {user && user?.email ? (
              <div className="flex gap-2">
                <Link to={`/profile`}>
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    title={user?.displayName}
                    alt=""
                  />
                </Link>
              </div>
            ) : (
              <div className="mt-3 ">
                <FaUserCircle />
              </div>
            )}
          </div>
          {user && user?.email ? (
            <>
              <button onClick={logOut} className="btn bg-green-300 text-black">
                Sign Out
              </button>
             
            </>
          ) : (
            <div className="flex gap-3">
              <Link
                to={`/auth/login`}
                className="btn btn-outline font-semibold text-md text-white"
              >
                Sign in
              </Link>
              <div>
                <Link
                  to={`/auth/register`}
                  className="btn btn-outline font-semibold text-md text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

