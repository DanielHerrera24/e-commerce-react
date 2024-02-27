import React, { useContext } from "react";
import Btn, { BtnOutline } from "./commons/Btn";
import CartContext from "../context/CartContext";
import CardComp from "./Cards";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Cart() {
  const { itemsCart } = useContext(CartContext);

  // Calculamos el total sumando los precios de todos los productos en el carrito
  const total = itemsCart.reduce((acc, currentItem) => {
    return acc + currentItem.precio * currentItem.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-semibold md:py-0 md:pb-6 py-6">
        Carrito de productos
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 gap-[2px] mb-16">
        {itemsCart.length > 0 ? (
          <>
            {itemsCart.map((product) => (
              <article key={product.id}>
                <CardComp {...product} />
              </article>
            ))}
            <div className="flex flex-col items-center col-span-2 sm:col-span-3 pt-4">
              <Link to="/e-commerce-react">
                <BtnOutline>Volver al catálogo</BtnOutline>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center col-span-2 sm:col-span-3 gap-6">
            <LocalMallIcon fontSize="large" />
            <h2 className="text-xl">¡Empieza un carrito de compras!</h2>
            <Link to="/e-commerce-react">
              <Btn>Descubre nuestros productos</Btn>
            </Link>
          </div>
        )}
      </section>

      {itemsCart.length > 0 && (
        <footer className="flex fixed justify-evenly items-center bottom-0 md:w-auto w-screen md:gap-8 h-16 rounded-t-3xl px-4 bg-white shadow-[0_15px_60px_10px_rgba(0,0,0,0.3)]">
          <p className="text-xl">Total: ${total}</p>
          <Link to="/e-commerce-react/form">
            <Btn>
              <p>Comprar ahora</p>
              <span>({itemsCart.length})</span>
            </Btn>
          </Link>
        </footer>
      )}
    </div>
  );
}

export default Cart;
