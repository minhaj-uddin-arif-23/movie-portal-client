import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading'

export default function Private_Router({children}) {
  const {user,loading} =useContext(AuthContext)
  if(loading){
    return <Loading />
  }
  if(user && user?.email){
    return children
  }

  return <Navigate to={`/auth/signin`} ></Navigate>
}
