import React, { useState } from "react";
import "../Css/Experiencia.css";
import { FaLaptopCode, FaUserTie } from "react-icons/fa"; // Importamos los iconos

const experiencia = [
  {
    cargo: "Desarrollador Full Stack",
    empresa: "Empresa X",
    periodo: "2020 - Presente",
    descripcion: "Desarrollando aplicaciones web con React y Node.js.",
    icono: <FaLaptopCode />,
  },
  {
    cargo: "Atención al Cliente",
    empresa: "Empresa Y",
    periodo: "2018 - 2020",
    descripcion: "Resolviendo consultas y brindando soporte a clientes.",
    icono: <FaUserTie />,
  },
];

function Experiencia() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  const abrirModal = (trabajo) => {
    setTrabajoSeleccionado(trabajo);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setTrabajoSeleccionado(null);
  };

  return (
    <div className="experiencia-container">
      <h2 className="experiencia-titulo">Experiencia</h2>
      <div className="experiencia-grid">
        {experiencia.map((trabajo, index) => (
          <div key={index} className="experiencia-item" onClick={() => abrirModal(trabajo)}>
            <div className="icono">{trabajo.icono}</div>
            <p>{trabajo.cargo}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && trabajoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{trabajoSeleccionado.cargo}</h3>
            <p><strong>{trabajoSeleccionado.empresa}</strong> - {trabajoSeleccionado.periodo}</p>
            <p>{trabajoSeleccionado.descripcion}</p>
            <button className="modal-cerrar" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiencia;
