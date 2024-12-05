import React from 'react'

export default function Foter() {
  return (
    <div>
      <footer className="footer p-20">
  <nav>
    <h6 className="text-2xl font-semibold ">Services</h6>
    <a className="link link-hover my-3 font-medium">Movies</a>
    <a className="link link-hover font-medium">TV Channel</a>
    <a className="link link-hover my-3 font-medium">Chinema Ticket</a>
    <a className="link link-hover font-medium ">Newsletter</a>
    <a className="link link-hover my-3 font-medium ">Blogs article</a>
  </nav>
  <nav>
    <h6 className=" text-2xl  font-semibold">Company</h6>
    <a className="link link-hover my-3 font-medium">Patnership</a>
    <a className="link link-hover font-medium" >Terms of Use</a>
    <a className="link link-hover my-3 font-medium">About us</a>
    <a className="link link-hover font-medium">Contact</a>
    <a className="link link-hover my-3 font-medium">Jobs</a>
    <a className="link link-hover font-medium"  >Press kit</a>
  </nav>
  <nav>

   
    <h6 className="text-2xl font-semibold">Legal</h6>
    <a className="link link-hover my-3 font-medium">Terms of use</a>
    <a className="link link-hover font-medium">Privacy policy</a>
    <a className="link link-hover my-3 font-medium">Cookie policy</a>
   
  </nav>
  
  <form>
  
    <h6 className="text-2xl">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered join-item" />
        <button className="btn btn- join-item">Subscribe</button>
      </div>
    </fieldset>
    <aside className='mt-3'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Movie Portal Industry</p>
  </aside>
  </form>
</footer>
    </div>
  )
}
