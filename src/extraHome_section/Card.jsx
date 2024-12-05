import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";

export default function Card() {
  return (
    <div className="rounded-2xl">
      <section className="my- p-36  " >
    
        <div className="card card-side  shadow-xl ">
         
          <div className="rounded-xl card-body bg-gradient-to-r from-pink-800 via-sky-700 to-blue-900">
            <h2 className="card-title"><span className="flex text-8xl font-semibold ml-72 abc">Watching </span><br />
            </h2>
                <h1></h1>
                <h1 className="text-7xl font-bold ml-72 text-yellow-400">Is Convincing</h1><p className="text-5xl"><MdSlowMotionVideo /></p>
            
          </div>
        </div>
      </section>
    </div>
  );
}
