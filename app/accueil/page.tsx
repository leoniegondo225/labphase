"use client"

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { HeroSection } from '@/components/home/heroSection';
import Delivre from '@/components/home/delivre';
import ProductList from '@/components/home/produit';

import SellerSection from '@/components/home/vendeur';
import Soldes from '@/components/home/solde';


function page() {
  return (
    <div>
      <Navbar></Navbar>

      <HeroSection />
      <Delivre />
      <Soldes/>
      
      <ProductList />
      
      <SellerSection/>
      


      



      <Footer></Footer>
    </div>
  )
}

export default page
