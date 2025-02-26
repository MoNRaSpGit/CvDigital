import React, { useState } from "react";
import "../Css/Educacion.css";
import { FaUniversity, FaSchool, FaLaptopCode } from "react-icons/fa"; // Importamos íconos

const estudios = [
  { 
    icono: <FaUniversity />, 
    titulo: "Analista en TI", 
    institucion: "Universidad ORT",
    estado: "Cursando",
    detalles: "Inicié la carrera en 2020 y actualmente sigo cursando.",
    imagen: "/assets/comprobante_ort.jpg"
  },
  { 
    icono: <FaSchool />, 
    titulo: "Bachillerato", 
    institucion: "UTU",
    estado: "Finalizado",
    detalles: "Finalicé el bachillerato en UTU en 2018.",
    imagen: "/assets/comprobante_utu.jpg"
  },
  { 
    icono: <FaLaptopCode />, 
    titulo: "Curso de Programación", 
    institucion: "BIOS",
    estado: "Finalizado",
    detalles: "Finalicé el curso de Programación en BIOS en 2019.",
    imagen: "/assets/comprobante_bios.jpg"
  }
];

function Educacion() {
  const [modal, setModal] = useState(null);

  return (
    <div className="educacion-container">
      <h2 className="educacion-titulo">Educación</h2>
      <div className="educacion-lista">
        {estudios.map((item, index) => (
          <div 
            key={index} 
            className="educacion-item" 
            onClick={() => setModal(item)}
          >
            <div className="educacion-icono">{item.icono}</div>
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.institucion} - {item.estado}</p>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modal.titulo}</h2>
            <p><strong>Institución:</strong> {modal.institucion}</p>
            <p><strong>Estado:</strong> {modal.estado}</p>
            <p>{modal.detalles}</p>
            <img src={modal.imagen} alt="Comprobante" className="modal-imagen"/>
            <button className="modal-cerrar" onClick={() => setModal(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Educacion;
