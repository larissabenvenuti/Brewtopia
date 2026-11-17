"use client";
import React from "react";
import { BriefcaseBusiness, Camera, Code2, Mail, MapPin, MoreHorizontal, Phone } from "lucide-react";
import "../../styles/layout/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <p>Conecte-se conosco nas redes sociais:</p>
        <div className="social-icons">
          <a href="https://github.com/larissabenvenuti" target="_blank" rel="noreferrer" aria-label="GitHub da Larissa"><Code2 /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4>Brewtopia</h4>
          <p>
            Mais do que uma cervejaria: somos um estilo de vida. Conheça a
            essência da produção artesanal com alma brasileira.
          </p>
        </div>

        <div className="footer-col">
          <h4>Produtos</h4>
          <ul>
            <li>Pilsen Artesanal</li>
            <li>IPA Tropical</li>
            <li>Weiss Clássica</li>
            <li><MoreHorizontal /> E muito mais...</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="contact-list">
            <li><MapPin /> Rua das Cervejas, 42 - RJ</li>
            <li><Mail /> contato@brewtopia.com</li>
            <li><Phone /> (21) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brewtopia — Todos os direitos reservados.</p>
        <p>
          Feito por{" "}
          <a href="https://github.com/larissabenvenuti" target="_blank" rel="noreferrer">
            Larissa Benvenuti
          </a>
        </p>
      </div>
    </footer>
  );
}
