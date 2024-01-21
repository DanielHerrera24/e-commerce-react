import React from "react";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

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
      <div className="cantidad flex justify-evenly text-2xl w-full pb-2">
        <button className="text-[#034494] w-6" onClick={restar}>
          <FaMinusCircle />
        </button>
        <h2>{contador}</h2>
        <button className="text-[#034494] w-6" onClick={sumar}>
          <FaPlusCircle />
        </button>
      </div>
      <div className="addCarrito">
        <button className="bg-[#034494] text-sm text-white md:p-1 py-2 px-3 rounded-full" onClick={() => onAdd(contador)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Contador;
