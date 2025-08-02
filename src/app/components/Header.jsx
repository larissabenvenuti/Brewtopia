"use client";
import React, { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${hidden ? 'header-hidden' : ''}`}>
      <div className="header-container">
        <div className="logo">Brewtopia</div>

        <button
          className={`hamburguer-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${menuOpen ? 'show' : ''}`}>
          <a href="#" className="nav-link active" onClick={toggleMenu}>Início</a>
          <a href="#menu" className="nav-link" onClick={toggleMenu}>Cardápio</a>
          <a href="#sobre" className="nav-link" onClick={toggleMenu}>Sobre</a>
          <a href="#visite" className="nav-link" onClick={toggleMenu}>Visite</a>
        </nav>

        <a href="#footer" className="contato" onClick={() => setMenuOpen(false)}>Contate-nos</a>
      </div>
    </header>
  );
}
