"use client";
import React, { useState, useEffect, useRef } from "react";
import "../styles/featured.css";

export default function Featured() {
  const destaques = [
    {
      nome: "Cerveja Pilsen",
      descricao: "Leve, clara e refrescante, com final seco e aroma suave.",
      preco: "R$ 19,90",
      imagem: "/assets/images/pilsen.jpg",
    },
    {
      nome: "Cerveja Lager",
      descricao: "Dourada, com baixa fermentação e sabor limpo e equilibrado.",
      preco: "R$ 22,50",
      imagem: "/assets/images/lager.jpg",
    },
    {
      nome: "Cerveja Weiss",
      descricao: "Feita com trigo, aroma de banana e cravo.",
      preco: "R$ 23,50",
      imagem: "/assets/images/weiss.jpg",
    },
    {
      nome: "Cerveja IPA",
      descricao: "Amargor intenso, com aromas cítricos e florais.",
      preco: "R$ 28,90",
      imagem: "/assets/images/ipa.jpg",
    },
    {
      nome: "Cerveja Stout",
      descricao: "Escura, encorpada, com notas de café e chocolate.",
      preco: "R$ 29,50",
      imagem: "/assets/images/stout.jpg",
    },
    {
      nome: "Cerveja Belgian Tripel",
      descricao: "Aromática, frutada, com alto teor alcoólico.",
      preco: "R$ 31,90",
      imagem: "/assets/images/tripel.jpg",
    },
  ];

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
        <button className="carousel-btn" onClick={prev}>&lt;</button>
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
        <button className="carousel-btn" onClick={next}>&gt;</button>
      </div>
    </section>
  );
}
