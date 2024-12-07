import React from 'react'
import img1 from '../assets/sli1.jpeg'
export default function SlidesBanner() {
  return (
 <>
 
 <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://docs.madrasthemes.com/vodi/wp-content/uploads/sites/11/2019/02/movies-slider-style-1-output.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ytimg.com/vi/OxLyLwQuJq0/maxresdefault.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://assets-prd.ignimgs.com/2024/08/29/disney-1up-1724949128007.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.racv.com.au/royalauto/lifestyle-home/entertainment/best-upcoming-movies-australia/_jcr_content/root/container/articlepagecontent/image.coreimg.jpeg/1708927117141/1600x6002td81a5.jpeg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 </>
    )
  }