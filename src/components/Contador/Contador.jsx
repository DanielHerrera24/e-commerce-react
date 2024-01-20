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
    <div className="flex flex-col justify-end items-center pt-3">
      <div className="cantidad flex justify-evenly text-3xl w-full pb-2">
        <button className="text-[#034494] w-10" onClick={restar}>
          <ion-icon name="remove-circle"></ion-icon>
        </button>
        <h2>{contador}</h2>
        <button className="text-[#034494] w-10" onClick={sumar}>
          <ion-icon name="add-circle"></ion-icon>
        </button>
      </div>
      <div className="addCarrito">
        <button className="bg-[#034494] text-xl text-white py-2 px-3 rounded-full" onClick={() => onAdd(contador)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Contador;