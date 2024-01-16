import React from 'react'
import { useState } from "react";

function Contador() {
const [contador, setContador] = useState(0)

const sumar = () => {
    setContador(contador + 1)
};

const restar = () => {
    setContador(contador - 1)
};

  return (
    <div>
        <h2>{contador}</h2>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default Contador