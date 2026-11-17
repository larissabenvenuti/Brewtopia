"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Beer, Factory, Send, Users } from 'lucide-react';
import '../../styles/sections/visit.css';

export default function Visit() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [animar, setAnimar] = useState(false);
  const visitRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimar(true);
        }
      },
      { threshold: 0.3 }
    );
    if (visitRef.current) observer.observe(visitRef.current);
    return () => {
      if (visitRef.current) observer.unobserve(visitRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Solicitação de visita enviada! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '' });
  };

  return (
    <section 
      className={`visit ${animar ? 'animado' : ''}`}
      id="visite"
      ref={visitRef}
    >
      <div className="visit-container">
        <div className="visit-content">
          <h2>Experimente</h2>
          <p>
            Mergulhe no universo cervejeiro da Brewtopia! Conheça nossos processos artesanais, 
            participe de degustações exclusivas e descubra os segredos por trás de cada receita. 
            Nossa cervejaria oferece tours interativos, ambiente acolhedor e experiências únicas 
            para todos os apaixonados por cerveja artesanal.
          </p>
          <div className="visit-highlights">
            <div className="highlight-item">
              <span className="highlight-icon"><Beer aria-hidden="true" /></span>
              <span>Degustação Gratuita</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"><Factory aria-hidden="true" /></span>
              <span>Tour pela Fábrica</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon"><Users aria-hidden="true" /></span>
              <span>Ambiente Acolhedor</span>
            </div>
          </div>
        </div>
        
        <form className="visit-form" onSubmit={handleSubmit}>
          <h3>Agende Sua Visita</h3>
          <div className="form-group">
            <input 
              type="text" 
              name="nome"
              placeholder="Seu nome completo" 
              value={formData.nome}
              onChange={handleInputChange}
              required 
            />
            <span className="input-focus-border"></span>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Seu melhor email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <span className="input-focus-border"></span>
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="telefone"
              placeholder="Seu telefone (opcional)" 
              value={formData.telefone}
              onChange={handleInputChange}
            />
            <span className="input-focus-border"></span>
          </div>
          <button type="submit" className="btn-visitar">
            <span>Quero Visitar!</span>
            <span className="btn-icon"><Send aria-hidden="true" /></span>
          </button>
        </form>
      </div>
    </section>
  );
}