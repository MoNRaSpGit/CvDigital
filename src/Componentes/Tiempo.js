import React from "react";
import "../Css/Tiempo.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Trabajo", value: 8, color: "#2c3e50" }, // Azul oscuro formal
  { name: "Dormir", value: 8, color: "#34495e" }, // Azul grisáceo
  { name: "Estudio", value: 4, color: "#7f8c8d" }, // Gris medio
  { name: "Hobbies", value: 4, color: "#95a5a6" }, // Gris claro
];

function CustomLegend({ payload }) {
  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        <div key={index} className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span>{entry.payload.name}</span>
        </div>
      ))}
    </div>
  );
}

function Tiempo() {
  return (
    <div className="tiempo-container">
      <div className="titulo-container">
        <h2 className="tiempo-titulo">Distribución de Mi Tiempo</h2>
      </div>
      <div className="grafico-container">
        <PieChart width={250} height={270}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
              const RADIAN = Math.PI / 180;
              const x = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
              const y = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                  fontSize="12px"
                  fontWeight="bold"
                >
                  {value}hr
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
}

export default Tiempo;
