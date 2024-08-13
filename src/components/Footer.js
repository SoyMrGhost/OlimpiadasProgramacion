// src/components/Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos">Términos de Servicio</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
