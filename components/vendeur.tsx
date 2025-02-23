"use client"

import Link from 'next/link'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

export function Vendeur() {
  return (
    <div className='container vend rounded-5 shadow mb-5 ' data-aos="fade-up">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
        <h1 className='text-light'>Est vous un vendeur?<br />Optez pour une nouvelle approche</h1>
      <p className='text-light'>Gagnez en visibilité et obtenez un tableau de bord pour vous faciliter la vente <br /> des vos articles via les publications</p>
      <li>
        <ul className='text-dark'><FaRegCheckCircle className='me-2 text-warning'/>Avoir des solution pour amelioré la vente des artciles</ul>
        <ul><FaRegCheckCircle className='me-2 text-warning' />Avoir des solution pour amelioré la vente des artciles</ul>
        <ul><FaRegCheckCircle className='me-2 text-warning' />Avoir des solution pour amelioré la vente des artciles</ul>
      </li>
     <Link href="/clients/users/vendeur" className='btn btn-warning btn-md'> Inscrivez vous pour commencer</Link>
        </div>
        <div className='col-lg-6' style={{ position: "relative", top: "50px" }}>
          <img src="/img/ven1.png" alt="image vendeur" className=' rounded-5 mt-4'/>
        </div>
      </div>
    </div>
  )
}

export default Vendeur