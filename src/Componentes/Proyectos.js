import React, { useState } from "react";
import "../Css/Proyectos.css";

const proyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Este es un resumen del proyecto 1.",
    link: "https://www.ejemplo1.com",
    detalles: "Detalles más amplios sobre el proyecto 1. Explicación técnica y tecnologías utilizadas.",
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Este es un resumen del proyecto 2.",
    link: "https://www.ejemplo2.com",
    detalles: "Detalles más amplios sobre el proyecto 2. Explicación técnica y tecnologías utilizadas.",
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Este es un resumen del proyecto 3.",
    link: "https://www.ejemplo3.com",
    detalles: "Detalles más amplios sobre el proyecto 3. Explicación técnica y tecnologías utilizadas.",
  }
];

function Proyectos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoSeleccionado(null);
  };

  return (
    <div className="proyectos-container">
      <h2 className="proyectos-titulo">Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-item" onClick={() => abrirModal(proyecto)}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && proyectoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{proyectoSeleccionado.nombre}</h3>
            <p>{proyectoSeleccionado.detalles}</p>
            <a href={proyectoSeleccionado.link} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
            <button className="modal-cerrar" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyectos;
