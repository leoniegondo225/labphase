"use client"

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { HeroSection } from '@/components/home/heroSection';
import Delivre from '@/components/home/delivre';
import ProductList from '@/components/home/produit';
import Vendeur from '@/components/vendeur';


function page() {
  return (
    <div>
      <Navbar></Navbar>

      <HeroSection />
      <Delivre />
      
      <ProductList />
      <Vendeur/>
      


      



      <Footer></Footer>
    </div>
  )
}

export default page
