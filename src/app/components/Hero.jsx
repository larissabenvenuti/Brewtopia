import React from 'react';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-texto">
        <h1>Explore o Sabor Único da Brewtopia</h1>
        <p>Descubra nossas cervejas artesanais feitas com paixão e ingredientes selecionados para seu paladar.</p>
        <a href="#menu" className="btn-explore">Explorar Cardápio</a>
      </div>
      <div className="hero-imagem">
        <img src="/assets/images/cerveja.png" alt="Cerveja Brewtopia" />
      </div>
    </section>
  );
}
