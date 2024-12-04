import React from 'react'

export default function DetailsMovie({sendAllMovie}) {
  const {image,title,genre,duration,releaseYear,rating,summary} = sendAllMovie || {}
  return (
    <div className="my-4">
      <div className="border-2 border-gray-500 card card-compact  w-96 shadow-xl">
        <figure>
          <img
            src={image} className="object-cover "
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{genre}</p>
          <div>
            {duration} min
          </div>
          <div className="flex">
            <p>{releaseYear}</p>
            <div className="mr-10">
            {rating}
            </div>
          </div>
          <p>
            {summary}
          </p>
          <div className="card-actions flex">
          <button class="btn btn-outline btn-secondary">Add to Favorite</button>
          <button class="btn btn-outline btn-secondary">Delete Movie</button>
          </div>
        </div>
      </div>
    </div>
  );
}
