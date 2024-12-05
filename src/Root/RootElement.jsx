import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SlidesBanner from '../extraHome_section/SlidesBanner'
import Foter from '../Footer/Foter'
import Faq from '../extraHome_section/Faq'

export default function RootElement() {
  return (
    <div className=' '>
      <header className='w-11/12 mx-auto '>
      <div className='z-50  fixed top-0 w-11/12 mx-auto  shadow-md'>
      <Navbar />
      </div>
        
        
       <div className='my-28'>
       <Outlet />
       </div>
      
      </header>
      <footer className='mt-10 '>
       
      <Foter />
      </footer>
    </div>
  )
}
