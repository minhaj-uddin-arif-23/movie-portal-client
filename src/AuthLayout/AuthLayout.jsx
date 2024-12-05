import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className=''>
    <header className='w-11/12 mx-auto'>
    <Navbar />
   
    <Outlet />
    </header>
    </div>
  )
}
