import Contador from "../Contador/Contador";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Btn, { BtnOutline } from "../commons/Btn";
import { Link } from 'react-router-dom';

function ProductDetail({
  productName,
  categoria,
  stock,
  img,
  descripcion,
  id,
  precio,
}) {
  const [productAddedCart, setProductAddedCart] = useState(0);

  const handleOnAdd = (cantidad) => {
    setProductAddedCart(cantidad);
  };

  return (
    <Card variant="outlined" key={id} className="w-full md:w-96 h-full">
      <CardMedia component="img" className="" src={img} title={productName} />
      <CardContent className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">{"$ " + precio + " MXN"}</span>
        <h2 className="text-pretty text-base md:text-xl font-semibold text-gray-500 md:mb-1">
          {productName}
        </h2>
        <h3 className="text-xl">Descripción:</h3>
        <p className="text-lg text-gray-500">{descripcion}</p>
        <p className="text-xl">Categoría: {categoria}</p>
        {productAddedCart > 0 ? (
          <div className="flex justify-evenly w-full pt-3">
            <Link to="/cart"><Btn>Terminar compra</Btn></Link>
            <Link to="/e-commerce-react"><BtnOutline>Seguir comprando</BtnOutline></Link>
          </div>
        ) : (
          <Contador
            categoria={categoria}
            inicio={0}
            stock={stock}
            onAdd={handleOnAdd}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
