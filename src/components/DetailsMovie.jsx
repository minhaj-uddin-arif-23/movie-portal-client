import React from "react";
import Swal from "sweetalert2";

export default function DetailsMovie({ sendAllMovie ,movies,setMovie}) {
  const {_id, image, title, genre, duration, releaseYear, rating, summary } =
    sendAllMovie || {};

  const deleteMovie = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5500/addmovie/${_id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire(
          "Deleted!",
           "Your Movie has been deleted.",
           "success"
        
      );
      const remaining = movies.filter(movie => movie._id != _id);
      setMovie(remaining)
     
        }
        })
      }
    });
  };

  return (
    <div className="my-4">
      <div className="border-2 border-gray-500 card card-compact  w-96 shadow-xl">
        <figure>
          <img src={image} className="object-cover " alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{genre}</p>
          <div>{duration} min</div>
          <div className="flex">
            <p>{releaseYear}</p>
            <div className="mr-10">{rating}</div>
          </div>
          <p>{summary}</p>
          <div className="card-actions flex">
            <button class="btn btn-outline btn-secondary">
              Add to Favorite
            </button>
            <button
              onClick={()=> deleteMovie(_id)}
              class="btn btn-outline btn-error"
            >
              Delete Movie
            </button>
            <button className="btn btn-accent">Update Movie</button>
          </div>
        </div>
      </div>
    </div>
  );
}
