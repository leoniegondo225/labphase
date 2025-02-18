"use client"

import Link from "next/link";
import { FaEnvelope, FaFacebook, FaFingerprint, FaGithub, FaHome, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {

   return(
    <footer className= "text-center text-lg-start bg-body-tertiary text-muted">
  
  <section className= "d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className= "me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>



    <div>
      <Link href="" className= "me-4 text-primary ">
      <FaFacebook className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-dark">
      <FaSquareXTwitter className="fs-3" />
      </Link>
      <Link href="" className= "me-4 text-reset">
      <FcGoogle className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-danger">
      <FaInstagramSquare className="fs-3" />
      </Link>
      <Link href="" className= "me-4 text-primary">
      <FaLinkedin className="fs-3"/>
      </Link>
      <Link href="" className= "me-4 text-dark ">
      <FaGithub className="fs-3" />
      </Link>
    </div>

  </section>
  


  <section className= "">
    <div className= "container text-center text-md-start mt-5">
      <div className= "row mt-3">
        
        <div className= "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className= "text-uppercase fw-bold mb-4">
            <i className= "fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        

        
        <div className= "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className= "text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link href="#!" className= "text-reset  text-decoration-none">Angular</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">React</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Vue</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Laravel</Link>
          </p>
        </div>
        

        
        <div className= "col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className= "text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Pricing</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Settings</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Orders</Link>
          </p>
          <p>
            <Link href="#!" className= "text-reset text-decoration-none">Help</Link>
          </p>
        </div>
        

        
        <div className= "col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className= "text-uppercase fw-bold mb-4">Contact</h6>
          <p><FaHome className="me-3 text-warning" /> New York, NY 10012, US</p>
          <p>
          <FaEnvelope className="me-3 text-warning" />
            info@example.com
          </p>
          <p><FaPhone className="me-3 text-warning" /> + 01 234 567 88</p>
          <p><FaFingerprint className="me-3 text-warning" /> + 01 234 567 89</p>
        </div>
        
      </div>

    </div>
  </section>
   


  <div className= "text-center p-4">
    © 2021 Copyright:
    <Link className= "text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>

</footer>
   )

}

export default Footer
