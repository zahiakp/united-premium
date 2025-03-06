import Nav from '@/components/common/Nav';
import { Metadata } from 'next';
import React from 'react'
import Hero from './Hero';

export const metadata: Metadata  = {
    title: "Products - United Premium",
    description: "United Premium",
  };

function page() {
  return (
    <div>
      <Nav active="Products"/>
      <Hero/>
    </div>
  )
}

export default page
