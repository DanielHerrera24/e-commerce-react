import React, { useContext } from "react";
import Btn from "./commons/Btn";
import CartContext from "../context/CartContext";
import CardComp from "./Cards";

function Cart() {
  const { itemsCart } = useContext(CartContext);

  // Calculamos el total sumando los precios de todos los productos en el carrito
  const total = itemsCart.reduce((acc, currentItem) => {
    return acc + currentItem.precio * currentItem.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-semibold">Carrito de productos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 gap-[2px]">
        {itemsCart.map((product) => (
          <article key={product.id}>
            <CardComp {...product}/>
          </article>
        ))}
      </div>
      <footer className="flex fixed justify-center bottom-0 gap-16 md:w-auto w-screen bg-cyan-50">
        <p>Total: {total}</p>
        <Btn type="submit">
          <p>Comprar ahora</p>
          <span>({itemsCart.length})</span>
        </Btn>
      </footer>
    </div>
  );
}

export default Cart;

