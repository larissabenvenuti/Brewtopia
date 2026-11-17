"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredBeers } from "../../data/beers";
import "../../styles/sections/featured.css";

export default function Featured() {
  const destaques = featuredBeers;

  const [index, setIndex] = useState(0);
  const [animar, setAnimar] = useState(false);
  const featuredRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimar(true);
      },
      { threshold: 0.3 }
    );
    if (featuredRef.current) observer.observe(featuredRef.current);
    return () => {
      if (featuredRef.current) observer.unobserve(featuredRef.current);
    };
  }, []);

  const next = () => setIndex((index + 1) % destaques.length);
  const prev = () => setIndex((index - 1 + destaques.length) % destaques.length);

  const visiveis = [];
  for (let i = 0; i < 3; i++) {
    const idx = (index + i) % destaques.length;
    visiveis.push(destaques[idx]);
  }

  return (
    <section
      className={`featured ${animar ? "animado" : ""}`}
      ref={featuredRef}
      id="menu"
    >
      <h2>Destaques da Casa</h2>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={prev} aria-label="Cerveja anterior"><ChevronLeft aria-hidden="true" /></button>
        <div className="carousel">
          {visiveis.map((cerveja, i) => (
            <div key={i} className={`featured-card ${animar ? "slide-in" : ""}`}>
              <img src={cerveja.imagem} alt={cerveja.nome} />
              <h3>{cerveja.nome}</h3>
              <p>{cerveja.descricao}</p>
              <span className="preco">{cerveja.preco}</span>
            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={next} aria-label="Próxima cerveja"><ChevronRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}
