import Nav from '@/components/common/Nav';
import { Metadata } from 'next';
import React from 'react'
import Hero from './Hero';
import Footer from '@/components/common/Footer';
import Products from './Products';

export const metadata: Metadata  = {
    title: "Products - United Premium",
    description: "United Premium",
  };

function page() {
  return (
    <div>
      <Nav active="Products"/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default page
