import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function DetailsMovie({ movies, setMovie }) {
  const { _id, image, title, genre, duration, releaseYear, rating, summary } =
    movies || {};

  // const addToFavourite = (_id) => {
  //   console.log(_id)
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5500/addmovie/${_id}`, {
  //         method: "POST",
  //         headers:{
  //           "content-type":"application/json"
  //         },
  //         body:JSON.stringify()
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your Movie has been deleted.", "success");
  //             const remaining = movies.filter((movie) => movie._id !== _id);
  //             setMovie(remaining);
  //           }
  //         });
  //     }
  //   });
  // }

  // delete the movie
  const deleteMovie = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5500/addmovie/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Movie has been deleted.", "success");
              const remaining = movies.filter((movie) => movie._id !== _id);
              setMovie(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-4 flex justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-5xl border-2 border-gray-200  shadow-lg rounded-lg overflow-hidden  ">
        <figure>
          <img
            src={image}
            className="w-52 h-64 object-cover transform hover:scale-110 transition-all duration-300 rounded-3xl p-4"
            alt={title}
          />
        </figure>
        <div className="p-4">
          <h2 className="text-2xl font-semibold  mb-2">{title}</h2>
          <div className="flex items-center space-x-4 mb-3">
            <p className=" text-sm">{genre}</p>
            <p className="t text-sm">{duration} min</p>
          </div>
          <div className="flex items-center space-x-4 mb-3">
            <p className="t text-sm">{releaseYear}</p>
            <div className="bg-yellow-500  px-2 py-1 rounded-full text-xs">
              {rating}
            </div>
          </div>
          <p className=" text-sm mb-4">{summary}</p>
          <div className="flex space-x-3">
            <button 
              // onClick={() => addToFavourite(_id)}
            className="btn btn-outline btn-secondary">
              Add to Favorite
            </button>
            <button
              onClick={() => deleteMovie(_id)}
              className="btn btn-outline btn-error "
            >
              Delete Movie
            </button>
            <Link
              to={`/updateMovie/${_id}`}
              className="btn btn-accent "
            >
              Update Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
