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
        <Navbar />
        
        <Outlet />
        <Faq/>
      </header>
      <footer className='mt-10 '>
       
      <Foter />
      </footer>
    </div>
  )
}
