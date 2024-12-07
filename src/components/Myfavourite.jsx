import React, { useContext, useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import FavouriteCardss from "../extraHome_section/FavouriteCardss";

export default function Myfavourite({ email }) {
  const { user } = useContext(AuthContext);
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5500/api/favourite/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFavourite(data));
  }, [user?.email]);
  // console.log(favourite,user?.email)

  return (
    <div>
      <div className="my-4">
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3"> 
        
      
        {
          favourite.length === 0 ? (
            <p>No data found</p>
          ):(
            favourite?.map((item) => (
              <FavouriteCardss key={item?._id} send={item} />
            ))
          )
        }
            </div>
      </div>
    </div>
  );
}










/*
import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider'
import FavouriteCardss from '../extraHome_section/FavouriteCardss'

export default function Myfavourite({email}) {

  const {user} = useContext(AuthContext)
  const [favourite,setFavourite] = useState()
  useEffect(()=>{
    fetch(`http://localhost:5500/api/favourite/${user?.email}`)
    .then(res => res.json())
    .then(data => setFavourite(data))

  },[user?.email])
  // console.log(favourite,user?.email)



  return (
    <div>
      <div className="my-4">
     
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-3'>
    
  {
      favourite?.map(item => <FavouriteCardss key={item.email} send={item} />)
     }
  </div>
   </div>
    </div>
  )
}

*/
