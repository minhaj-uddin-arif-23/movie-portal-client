import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function FavouriteCardss({ send}) {
    const {_id,image,title,genre,duration,releaseYear,rating,} = send || {}
  const navigate = useNavigate()


      // delete the movie start
  
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
        fetch(`http://localhost:5500/favourite/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Movie has been deleted.", "success");
              navigate("/allMovie");
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "Something went wrong. Please try again.",
              "error"
            );
            console.error("Error deleting movie:", error);
          });
      }
    });
  };

  // delete the movie end 

  return (
      // {/* <h1 className="text-4xl font-semibold  ">You Can see All Movies</h1> */}
     <div className="border-2 border-gray-100 card card-compact   w-72 sm:w-80 md:w-80 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
       <figure>
         <img
           src={image} className="w-80 h-[280px]   object-cover transform hover:scale-110 transition-all duration-300 "
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
         <button
            onClick={() => deleteMovie(_id)}           
          class="btn">Delete Favourits</button>
         </div>
       </div>
     </div> 
  )
}
