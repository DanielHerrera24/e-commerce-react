import React from "react";
import { useState } from "react";

function Contador({ inicio, stock, onAdd }) {
  const [contador, setContador] = useState(inicio);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="flex flex-col justify-end items-center">
      <div className="cantidad flex justify-evenly w-full">
        <button className="bg-blue-800" onClick={restar}>
          -
        </button>
        <h2>{contador}</h2>
        <button className="bg-blue-800" onClick={sumar}>
          +
        </button>
      </div>
      <div className="addCarrito">
        <button onClick={() => onAdd(contador)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Contador;
