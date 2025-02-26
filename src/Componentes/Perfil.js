import React, { useState, useEffect } from "react";
import "../Css/Perfil.css"; 
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiRender } from "react-icons/si"; 
import fotoPerfil1 from "../assets/equipo.jpg"; 
import fotoPerfil2 from "../assets/resolucion.jpg"; 

function Perfil() {
  const [girar, setGirar] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setGirar((prev) => !prev);
    }, 7000); // Gira cada 7 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="perfil-container">
      <h2 className="perfil-seccion-titulo">Sobre Mí</h2>
      <div className={`perfil-foto-container ${girar ? "girando" : ""}`}>
        <img src={fotoPerfil1} alt="Perfil 1" className="perfil-foto frente" />
        <img src={fotoPerfil2} alt="Perfil 2" className="perfil-foto atras" />
      </div>
      <h2 className="perfil-titulo">Ramon Suarez</h2>
      <p className="perfil-subtitulo">Desarrollador Full Stack</p>

      {/* Iconos de tecnologías */}
      <div className="perfil-tecnologias">
        <div className="perfil-tecnologias-fila">
          <FaReact className="perfil-icono react" title="React" />
          <FaNodeJs className="perfil-icono node" title="Node.js" />
          <FaDatabase className="perfil-icono mysql" title="MySQL" />
        </div>
        <div className="perfil-tecnologias-fila">
          <FaGithub className="perfil-icono github" title="GitHub" />
          <SiRender className="perfil-icono render" title="Render" />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
