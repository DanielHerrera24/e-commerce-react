import Contador from "./Contador";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useContext } from "react";
import Btn, { BtnOutline } from "./commons/Btn";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function ItemDetail({
  productName,
  categoria,
  stock,
  img,
  descripcion,
  id,
  precio,
}) {
  const { addItems } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const onAdd = (quantity) => {
    setProductQuantity(quantity);
    const item = {
      precio,
      productName,
      quantity,
      id,
      img,
    };
    addItems(item);
  };

  return (
    <Card variant="outlined" key={id} className="w-full md:w-96 h-auto">
      <CardMedia
        component="img"
        className="w-full"
        src={img}
        title={productName}
      />
      <CardContent className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">{"$ " + precio + " MXN"}</span>
        <h2 className="text-pretty text-base md:text-xl font-semibold text-gray-500 md:mb-1">
          {productName}
        </h2>
        <h3 className="text-xl">Descripción:</h3>
        <p className="text-lg text-gray-500">{descripcion}</p>
        <p className="text-xl">Categoría: {categoria}</p>
        {productQuantity > 0 ? (
          <div className="flex justify-evenly w-full pt-3">
            <Link to="/e-commerce-react/cart">
              <Btn>Terminar compra</Btn>
            </Link>
            <Link to="/e-commerce-react">
              <BtnOutline>Seguir comprando</BtnOutline>
            </Link>
          </div>
        ) : (
          <Contador
            categoria={categoria}
            inicio={0}
            stock={stock}
            onAdd={onAdd}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default ItemDetail;
