import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='bg-gradient-to-b from-black to-gray-900 text-white'>
    <header className='w-11/12 mx-auto'>
    <Navbar />
    <SlidesBanner />
    <Outlet />
    </header>
    </div>
  )
}
