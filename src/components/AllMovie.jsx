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
        // console.log(data)
        setMovieData(data);
      });
  }, [search]);

  // console.log(search)
  return (
    <div>
      <div>
        <input
          placeholder="Search Movie"
          onChange={(e) => setSerch(e.target.value)}
          type="text"
          name="serch"
          required
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
