import React from "react";
import "../Css/Contacto.css";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa"; // Importamos los íconos

const contactos = [
  { icono: <FaWhatsapp />, texto: "092 945 696", link: "https://wa.me/59892945696" },
  { icono: <FaEnvelope />, texto: "ju4nrsuarez@gmail.com", link: "mailto:ju4nrsuarez@gmail.com" },
  { icono: <FaInstagram />, texto: "monra_suarez", link: "https://www.instagram.com/monra_suarez" },
  { icono: <FaFacebook />, texto: "Ramon Suarez", link: "https://www.facebook.com/RamonSuarez" },
];

function Contacto() {
  return (
    <div className="contacto-container">
      <h2 className="contacto-titulo">Contacto</h2>
      <div className="contacto-grid">
        {contactos.map((contacto, index) => (
          <a
            key={index}
            href={contacto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-item"
          >
            {contacto.icono}
            <span>{contacto.texto}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contacto;
