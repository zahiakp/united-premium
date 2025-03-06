import React from 'react'
import Hero from './Hero'
import Nav from '@/components/common/Nav'
import WhyUs from '@/components/Home/WhyUs'
import About from '@/components/Home/About'
import { Metadata } from 'next'

export const metadata: Metadata  = {
    title: "About - United Premium",
    description: "United Premium",
  };
  
function page() {
  return (
    <div>
      <Nav active="About"/>
      <Hero/>
      <About/>
      <WhyUs/>
    </div>
  )
}

export default page
