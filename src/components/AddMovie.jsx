import React from "react";

export default function AddMovie() {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div>
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button" className="btn m-1">
                Genre
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-600 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>comedy</a>
                </li>
                <li>
                  <a>drama</a>
                </li>
                <li>
                  <a>horror</a>
                </li>
              </ul>
            </div>
            <div>
              <label for="appointment-time" className="text-black">Duration: </label>
              <input
                id="appointment-time"
                type="time"
                name="appointment-time"
                value="13:30"
                placeholder=""
                className=" p-2 border-2 border-gray-200 w-80"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                className="border-2 border-gray-200 rounded-md p-3"
                name=""
                rows={4}
                cols={16}
                id=""
                placeholder="write me some movie description"
              ></textarea>
            </div>
          </div>
          <button>Add Movie</button>
        </form>
      </div>
    </div>
  );
}
