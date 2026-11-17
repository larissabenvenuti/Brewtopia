"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../../styles/layout/header.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    let frameId;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (menuOpen) {
          setMenuOpen(false);
          setHidden(false);
        } else if (currentScroll > lastScrollY && currentScroll > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        setLastScrollY(currentScroll);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header ref={headerRef} className={`header ${hidden ? 'header-hidden' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">Brewtopia</div>

        <button
          className={`hamburguer-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav id="main-navigation" className={`nav ${menuOpen ? 'show' : ''}`}>
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
