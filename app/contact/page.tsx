import Nav from '@/components/common/Nav'
import React from 'react'
import Hero from './Hero'
import Footer from '@/components/common/Footer'
import { Metadata } from 'next';
import Content from './Content';

export const metadata: Metadata  = {
  title: "Contact - United Premium",
  description: "United Premium",
};
function page() {
  return (
    <div>
      <Nav active="Contact"/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default page
