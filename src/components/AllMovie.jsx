import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function AllMovie() {
  const getData = useLoaderData();
  const [search, setSerch] = useState("");
  const [movieData, setMovieData] = useState(getData);
  // multiple time search needed that's why we use useeffect not loader
  useEffect(() => {
    fetch(`http://localhost:5500/addmovie?serchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data)
      //  {movieData ?  setMovieData(data) : "NO MOVIE FOUND"}
      });
  }, [search]);

  // console.log(search)
  return (
    <div className="">
      <div>
        <input
          placeholder="Search Movie"
          onChange={(e) => setSerch(e.target.value)}
          type="text"
          name="serch"
          required
          className="input input-bordered border-2 border-gray-400 backdrop-blur-md w-96 dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
          id=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {movieData?.map((data) => (
          <MovieCard key={data._id} sendCard={data} />
        ))}
      </div>
    </div>
  );
}
