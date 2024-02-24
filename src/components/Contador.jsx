import React from "react";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Btn from "./commons/Btn";

function Contador({ inicio, stock, onAdd }) {
  const [contador, setContador] = useState(inicio);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador >= 1) {
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
        <Btn onClick={() => onAdd(contador)} disabled={contador === 0}>
          Agregar al carrito
        </Btn>
      </div>
    </div>
  );
}

export default Contador;
