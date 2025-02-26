import React, { useState, useEffect } from "react";
import "../Css/Perfil.css"; 
import fotoPerfil1 from "../assets/equipo.jpg"; 
import fotoPerfil2 from "../assets/resolucion.jpg"; 

function Perfil() {
  const [girar, setGirar] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setGirar((prev) => !prev);
    }, 7000); // Gira cada 3 segundos

    return () => clearInterval(intervalo); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="perfil-container">
      <div className={`perfil-foto-container ${girar ? "girando" : ""}`}>
        <img src={fotoPerfil1} alt="Perfil 1" className="perfil-foto frente" />
        <img src={fotoPerfil2} alt="Perfil 2" className="perfil-foto atras" />
      </div>
      <h2 className="perfil-titulo">Ramon Suarez</h2>
      <p className="perfil-subtitulo">Desarrollador Full Stack</p>
    </div>
  );
}

export default Perfil;
