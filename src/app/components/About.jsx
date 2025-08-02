"use client";
import React, { useState, useEffect, useRef } from 'react';
import '../styles/about.css';

const textos = [
  "A Brewtopia nasceu da paixão por cervejas artesanais e do desejo de compartilhar sabores únicos e autênticos com o mundo. Nossa missão é unir tradição e inovação, trazendo para cada gole uma experiência inesquecível que celebra a cultura cervejeira.",
  "Utilizamos ingredientes selecionados cuidadosamente, priorizando a qualidade e a sustentabilidade, para criar receitas que encantam tanto os iniciantes quanto os conhecedores mais exigentes. Cada lote é produzido com técnicas tradicionais e processos artesanais que garantem sabor, aroma e corpo únicos.",
  "Mais do que fabricar cervejas, a Brewtopia acredita na arte e na ciência por trás de cada etapa do processo, valorizando a dedicação e o talento dos mestres cervejeiros. Nosso compromisso é promover momentos de conexão, celebração e prazer, fazendo da cerveja artesanal uma verdadeira experiência sensorial.",
  "Seja você um apaixonado por novidades ou um apreciador das clássicas, aqui na Brewtopia você encontra um universo de sabores para explorar, com produtos que refletem o cuidado, a criatividade e a autenticidade que nos definem."
];

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

  const maxIndex = Math.ceil(textos.length / visiveis) - 1;

  function handleToggle() {
    setIndice(prev => (prev === maxIndex ? 0 : prev + 1));
  }

  const textosVisiveis = textos.slice(indice * visiveis, indice * visiveis + visiveis);

  const setaDirection = indice === maxIndex ? '⬅' : '➔';
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
          {setaDirection}
        </button>
      </div>
      <div className="about-imagem">
        <img src="/assets/images/fabrica.jpg" alt="Fábrica Brewtopia" />
      </div>
    </section>
  );
}
