"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin, FiMoreHorizontal } from "react-icons/fi";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <p>Conecte-se conosco nas redes sociais:</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
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
            <li><FiMoreHorizontal /> E muito mais...</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="contact-list">
            <li><FiMapPin /> Rua das Cervejas, 42 - RJ</li>
            <li><HiOutlineMail /> contato@brewtopia.com</li>
            <li><FiPhone /> (21) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brewtopia — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
