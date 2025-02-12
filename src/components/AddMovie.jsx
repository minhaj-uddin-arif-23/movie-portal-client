import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

export default function AddMovie() {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const addMovie = (e) => {
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

    const movieData = {
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

    // console.log("Movie added:", movieData);

    Swal.fire("Success", "Movie added successfully!", "success");

    e.target.reset();
    setRating(0);
    setGenre("");
    setReleaseYear("");

    fetch(`https://movie-portal-server-eight.vercel.app/addmovie`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // console.log(user)

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-white text-black dark:bg-[#22262f] dark:text-white">
      <Helmet>
        <title>Movie Portal | Add Movie</title>
      </Helmet>
      <div className="bg-white card rounded-lg w-full max-w-2xl p-6 shadow-lg border-2 border-red-600 dark:bg-[#22262f] dark:border-gray-700">
        <h1 className="text-2xl font-semibold text-center mb-6">Add Movie</h1>
        <form onSubmit={addMovie} className="space-y-4 w-full">
          {/* Image URL */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <section className="space-y-5 w-full">
              <div>
                <label className="block font-medium">Movie Poster URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter Image URL"
                  className="input input-bordered w-full border-2 backdrop-blur-md bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                />
              </div>

              <div>
                <label className="block font-medium">Movie Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Movie Title"
                  className="input input-bordered w-full border-2 backdrop-blur-md bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                />
              </div>

              {/* Genre */}
              <div>
                <label className="block font-medium">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="select select-bordered w-full border-2 bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                >
                  <option value="">Select Genre</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="action">Action</option>
                  <option value="romance">Romance</option>
                  <option value="fantasy">Fantasy</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block font-medium">
                  Duration (in minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  placeholder="Enter Duration"
                  className="input input-bordered w-full border-2 backdrop-blur-md bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                  min={61}
                />
              </div>
            </section>

            <section className="space-y-3 w-full">
              <div>
                <label className="block font-medium">Release Year</label>
                <select
                  value={releaseYear}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  className="select select-bordered w-full input border-2 backdrop-blur-md bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
              </div>

              <div className="items-center">
                <label className="block font-medium">Rating</label>
                <Rating
                  onClick={(rate) => setRating(rate)}
                  ratingValue={rating}
                  size={25}
                  className="mt-4"
                />
              </div>

              <div>
                <label className="block font-medium">Summary</label>
                <textarea
                  name="summary"
                  rows="4"
                  placeholder="Enter Movie Summary"
                  className="textarea textarea-bordered w-full border-2 backdrop-blur-md bg-white dark:bg-[#2a2e38] dark:border-gray-700"
                ></textarea>
              </div>
            </section>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn text-white text-xl w-full dark:bg-[#e63971]"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
