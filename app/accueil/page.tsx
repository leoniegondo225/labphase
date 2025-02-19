"use client"

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="" id='carousel-container mb-5'>
        <Carousel data-bs-theme="dark" >
          <Carousel.Item>
            <img src="/img/baniere.png" alt="" />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/baniere.png" alt="" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/baniere.png" alt="" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className="rts-services-section section-gap">
        <div className="container">
          <div className="row">
            <div className=" col-xl-3 col-md-6">
              <div className="">
                <div className="row align-items-center justify-content-center">
                  <div className='col-lg-6'>
                  <img src="/img/car.png" alt="service-icon" className='img-fluid' height="80" width="80" />
                  </div>
                
                <div className="col-lg-6 ">
                
                  <h3 className="service-title">International Shipment</h3>
                  <p>Orders are shipped seamlessly
                    between countries</p>
                </div>
              </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="service-item">
                <div className="service-icon"><img src="/img/eco.png" alt="service-icon" className='img-fluid'/>
                </div>
                <div className="contents">
                  <h3 className="service-title">Online Support 24/7</h3>
                  <p>Orders are shipped seamlessly
                    between countries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="service-item">
                <div className="service-icon"><img src="/img/dollar.svg" alt="service-icon " className='img-fluid'/>
                </div>
                <div className="contents">
                  <h3 className="service-title">Money Return</h3>
                  <p>Orders are shipped seamlessly
                    between countries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="service-item">
                <div className="service-icon"><img src="/img/discount.svg" alt="service-icon" className='img-fluid'/></div>
                <div className="contents">
                  <h3 className="service-title">Member Discount</h3>
                  <p>Orders are shipped seamlessly
                    between countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>
    </div>
  )
}

export default page
