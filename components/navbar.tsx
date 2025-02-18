//navbar bootstrap//
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch, FaQuestionCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow-sm">
      <div className="container">
        {/* Menu Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-warning" /> : <FaBars className="text-warning" />}
        </button>

        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-circle"
          />
        </Link>

        {/* Contenu de la Navbar */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-warning">Accueil</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-warning"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Produits
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/produits" className="dropdown-item">Catégorie 1</Link></li>
                <li><Link href="/produits" className="dropdown-item">Catégorie 2</Link></li>
                <li><Link href="/produits" className="dropdown-item">Catégorie 3</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-warning">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-warning">Contact</Link>
            </li>
          </ul>

          {/* Icônes à droite */}
          <div className="d-flex gap-3">
            <Link href="/faq" className="text-warning"><FaQuestionCircle size={24} /></Link>
            <Link href="/auth" className="text-warning"><FaUser size={24} /></Link>
            <Link href="/panier" className="text-warning"><FaShoppingCart size={24} /></Link>
            <Link href="/search" className="text-warning"><FaSearch size={24} /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;