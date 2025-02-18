"use client"
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="" id='carousel-container'>
      <Carousel data-bs-theme="dark" >
      <Carousel.Item>
       <div className=" img1 pt-5">
        <h2 className='text-center text-light display-3 fw-bold'>bienvenue sur Janpan-x</h2>
        <p className='text-center text-light pt-2'>Nous sommes ravis de vous accueillir dans notre boutique en ligne. <br /> Que vous soyez à la recherche des dernières tendances ou d'offres exclusives, vous trouverez ici une sélection de produits soigneusement choisis <br /> pour répondre à vos besoins.
        Explorez, profitez, et faites de belles découvertes !</p>
        <div className='text-center pt-3'>
        <Link href="/clients/users/acheteur" className="btn btn-warning ">Commencer</Link>
        </div>
       </div>
       <Carousel.Caption>
          
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" img2 pt-5">
          <h2 className='text-center display-3 fw-bold text-light'>bienvenue sur Janpan-x</h2>
          <p className='text-center text-light pt-2'>Nous sommes heureux de vous compter parmi nos vendeurs. <br /> Vous avez désormais la possibilité de partager vos produits avec une large communauté de clients. <br /> Gagnez en visibilité et développez votre activité grâce à nos outils simples et efficaces.
          C’est le moment de briller et de faire croître votre entreprise avec nous !</p>
          <div className='text-center pt-3'>
        <Link href="/clients/users/vendeur" className="btn btn-warning ">Commencer</Link>
        </div>
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;