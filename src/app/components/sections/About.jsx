"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { aboutCopy } from '../../data/about-copy';
import '../../styles/sections/about.css';

export default function About() {
  const [indice, setIndice] = useState(0);
  const [animar, setAnimar] = useState(false);
  const [visiveis, setVisiveis] = useState(2); 
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimar(true);
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setVisiveis(1); 
      } else {
        setVisiveis(2); 
      }
      setIndice(0); 
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(aboutCopy.length / visiveis) - 1;

  function handleToggle() {
    setIndice(prev => (prev === maxIndex ? 0 : prev + 1));
  }

  const textosVisiveis = aboutCopy.slice(indice * visiveis, indice * visiveis + visiveis);

  const ariaLabel = indice === maxIndex ? 'Texto anterior' : 'Próximo texto';

  return (
    <section
      className={`about ${animar ? 'animado' : ''}`}
      id="sobre"
      ref={aboutRef}
    >
      <div className="about-texto">
        <h2>Sobre a Brewtopia</h2>
        <div className="paragrafos-container">
          {textosVisiveis.map((texto, i) => (
            <p key={`${indice}-${i}`} className="fade-text">
              {texto}
            </p>
          ))}
        </div>
        <button
          className="btn-next"
          aria-label={ariaLabel}
          onClick={handleToggle}
          type="button"
        >
          {indice === maxIndex ? <ChevronLeft aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}
        </button>
      </div>
      <div className="about-imagem">
        <img src="/assets/images/fabrica.jpg" alt="Fábrica Brewtopia" />
      </div>
    </section>
  );
}
