import React from "react";
import "../Css/CVlayout.css";
import Perfil from "./Perfil"; 
import Habilidades from "./Habilidades"; 
import Proyectos from "./Proyectos"; 
import Experiencia from "./Experiencia"; 
import Contacto from "./Contacto"; 

function CVLayout() {
  return (
    <div className="cv-container">
      <div className="cv-content">
        <div className="cv-column">
          <div className="cv-section">
            <Perfil />
          </div>
          <div className="cv-section">
            <Habilidades />
          </div>
          <div className="cv-section">
            <Experiencia />
          </div>
        </div>

        <div className="cv-column">
          <div className="cv-section">2</div>
          <div className="cv-section">
            <Proyectos />
          </div>
          <div className="cv-section">
            <Contacto /> {/* Sección 6: Contacto */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVLayout;
