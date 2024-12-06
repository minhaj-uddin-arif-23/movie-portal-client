import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({sendCard}) {
  const {_id,image,title,genre,duration,releaseYear,rating,} = sendCard || {}
  return (
    <div className="my-4">
     
      {/* <h1 className="text-4xl font-semibold  ">You Can see All Movies</h1> */}
      <div className="border-2 border-gray-100 card card-compact   w-72 sm:w-80 md:w-80 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <figure>
          <img
            src={image} className="w-80 h-[280px]  s object-cover transform hover:scale-110 transition-all duration-300 "
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         <div className="flex">
         <p>{genre}</p>
          <p>
            {duration} min
          </p>
         </div>
          <div className="flex">
            <p>{releaseYear}</p>
            <div className="mr-24">
              {rating} * 
            </div>
          </div>
          <div className="card-actions mt-3">
          <Link to={`/movieDetails/${_id}`} class="btn btn-active btn-secondary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
