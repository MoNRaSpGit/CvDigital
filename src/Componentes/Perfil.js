import React from "react";
import "../Css/Perfil.css"; 
import fotoPerfil from "../assets/equipo.jpg"; 

function Perfil() {
  return (
    <div className="perfil-container">
      <img src={fotoPerfil} alt="Mi Foto" className="perfil-foto" />
      <h2>Tu Nombre</h2>
      <p>Desarrollador Full Stack</p>
    </div>
  );
}

export default Perfil;
