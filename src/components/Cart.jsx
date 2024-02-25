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
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 gap-[2px] mb-16">
        {itemsCart.map((product) => (
          <article key={product.id}>
            <CardComp {...product}/>
          </article>
        ))}
      </div>
      <footer className="flex fixed justify-evenly items-center bottom-0 md:w-auto w-screen md:gap-8 h-16 rounded-t-3xl px-4 bg-white shadow-[0_25px_50px_10px_rgba(0,0,0,0.3)]">
        <p className="text-xl">Total: ${total}</p>
        <Btn type="submit">
          <p>Comprar ahora</p>
          <span>({itemsCart.length})</span>
        </Btn>
      </footer>
    </div>
  );
}

export default Cart;

