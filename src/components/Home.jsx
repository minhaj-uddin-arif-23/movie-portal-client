import React from 'react'
import SlidesBanner from '../extraHome_section/SlidesBanner'
import Faq from '../extraHome_section/Faq'
import Card from '../extraHome_section/Card'

export default function Home() {
  return (
    <div className=''>
    <section className='my-20'>
    <SlidesBanner />
    <Card />
      <Faq/>
    </section>   
   
      </div>
  )
}
