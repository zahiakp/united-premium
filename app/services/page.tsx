import Nav from '@/components/common/Nav'
import React from 'react'
import Hero from './Hero'
import Footer from '@/components/common/Footer'
import { Metadata } from 'next';

export const metadata: Metadata  = {
  title: "Services - United Premium",
  description: "United Premium",
};

function page() {
  return (
    <div>
      <Nav active="Services"/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default page
