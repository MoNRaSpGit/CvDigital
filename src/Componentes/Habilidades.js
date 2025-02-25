import React, { useState, useEffect } from "react";
import "../Css/Habilidades.css"; 

const habilidades = [
  { nombre: "React", nivel: 80 },
  { nombre: "Node.js", nivel: 70 },
  { nombre: "MySQL", nivel: 60 },
  { nombre: "JavaScript", nivel: 90 },
];

function Habilidades() {
  const [porcentajes, setPorcentajes] = useState(habilidades.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setPorcentajes(habilidades.map(() => 100)); // Carga inicial
      setTimeout(() => {
        setPorcentajes(habilidades.map((h) => h.nivel)); // Llega a su nivel real
      }, 1500);
    }, 500);
  }, []);

  return (
    <div className="habilidades-container">
      <h2 className="habilidades-titulo">Habilidades</h2>
      {habilidades.map((habilidad, index) => (
        <div key={index} className="habilidad">
          <span className="habilidad-nombre">{habilidad.nombre}</span>
          <div className="barra-container">
            <div
              className="barra-progreso"
              style={{
                width: `${porcentajes[index]}%`,
              }}
            >
              <span className="barra-texto">{porcentajes[index]}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Habilidades;
