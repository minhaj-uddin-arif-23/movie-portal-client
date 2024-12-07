import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Update() {
  const { user } = useContext(AuthContext);
  const movies = useLoaderData();
  const {
    _id,
    image,
    title,
    genre: movieGenre,
    duration,
    releaseYear: movieRealeaseYear,
    rating: movieRatng,
    summary,
  } = movies || {};
  const [rating, setRating] = useState(movieRatng || 0);
  const [genre, setGenre] = useState(movieGenre || "");
  const [releaseYear, setReleaseYear] = useState(movieRealeaseYear || "");

  const updateMovie = (e) => {
    e.preventDefault();
    const image = e.target.image.value.trim();
    const title = e.target.title.value.trim();
    const duration = e.target.duration.value;
    const summary = e.target.summary.value.trim();

    // Validations
    if (!image || !image.startsWith("http")) {
      Swal.fire("Error", "Please provide a valid image URL!", "error");
      return;
    }
    if (!title || title.length < 2) {
      Swal.fire("Error", "Title must have at least 2 characters!", "error");
      return;
    }
    if (!genre) {
      Swal.fire("Error", "Please select a genre!", "error");
      return;
    }
    if (!duration || duration <= 60) {
      Swal.fire("Error", "Duration must be greater than 60 minutes!", "error");
      return;
    }
    if (!releaseYear) {
      Swal.fire("Error", "Please select a release year!", "error");
      return;
    }
    if (rating === 0) {
      Swal.fire("Error", "Please select a rating!", "error");
      return;
    }
    if (!summary || summary.length < 10) {
      Swal.fire("Error", "Summary must have at least 10 characters!", "error");
      return;
    }

    const updatemovie = {
      image,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email: user.email,
      displayName: user.displayName,
    };

    // console.log("Movie added:", updatemovie);

    Swal.fire("Success", "Movie added successfully!", "success");

    e.target.reset();
    setRating(0);
    setGenre("");
    setReleaseYear("");

    fetch(`https://movie-portal-server-eight.vercel.app/addmovie/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatemovie),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Movie Update Successfully",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // console.log(data);
  };
  return (
    <div className="bg-black rounded-3xl min-h-screen flex justify-center items-center ">
      <div className="bg-purple text-black card rounded-lg w-full max-w-md p- shadow-lg ">
        <h1 className="text-4xl font-semibold text-center lg:ml-40 mb-6 text-white">
          Update Movie
        </h1>
        <form
          onSubmit={updateMovie}
          className="space-y-4  bg-white/10 w-[600px] border-2 border-gray-500 p-3 shadow-2xl rounded-xl"
        >
          <div className="flex justify-evenly  ">
            <section className="space-y-5">
              <div>
                <label className="block font-medium text-white">
                  Movie Poster URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Enter Image URL"
                  className=" input input-bordered w-full bg-black border-2 border-white backdrop-blur-md text-white"
                />
              </div>

              <div>
                <label className="block font-medium text-white">
                  Movie Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Enter Movie Title"
                  className=" input input-bordered w-full bg-black border-2 border-white backdrop-blur-md text-white"
                />
              </div>

              <div>
                <label className="block font-medium text-white">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="select select-bordered  w-full bg-black border-2 border-white backdrop-blur-md text-white"
                >
                  <option value="">Select Genre</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="action">Action </option>
                  <option value="romance">Romance </option>
                  <option value="fantasy">Fantasy</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block font-medium text-white">
                  Duration (in minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  defaultValue={duration}
                  placeholder="Enter Duration"
                  className="input input-bordered w-full bg-black border-2 border-white backdrop-blur-md text-white"
                  min={61}
                />
              </div>
            </section>
            <section className="space-y-3">
              <div>
                <label className="block font-medium text-white">
                  Release Year
                </label>
                <select
                  value={releaseYear}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  className="select select-bordered w-full input  bg-black border-2 border-white backdrop-blur-md text-white"
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2022">2021</option>
                  <option value="2022">2020</option>
                  <option value="2021">2019</option>
                  <option value="2021">2018</option>
                  <option value="2021">2017</option>
                </select>
              </div>

              <div className=" items-center">
                <label className="block font-medium text-white">Rating</label>
                <Rating
                  onClick={(rate) => setRating(rate)}
                  ratingValue={rating}
                  size={25}
                  className="mt-4"
                />
              </div>

              <div>
                <label className="block font-medium text-white">Summary</label>
                <textarea
                  name="summary"
                  rows="4"
                  defaultValue={summary}
                  placeholder="Enter Movie Summary"
                  className="textarea textarea-bordered  w-full bg-black border-2 border-white backdrop-blur-md text-white"
                ></textarea>
              </div>
            </section>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#dfff2a] w-full">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
}
