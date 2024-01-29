import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Contador from "../../Contador/Contador";

const CardComp = ({ productName, categoria, img, id, precio }) => {
  return (
    <Card variant="outlined" key={id}>
      <CardMedia
        component="img"
        className=""
        src={img}
        title={productName}
      />
      <CardContent>
        <span className="text-2xl">{"$ " + precio + " MXN"}</span>
        <h2 className="text-pretty text-base md:text-lg text-gray-500 md:mb-1">{productName}</h2>
        {/* TODO: BTN VER DETALLES */}
        <Contador
          categoria={categoria}
          inicio={1}
          stock={10}
          onAdd={(cantidad) => console.log("cantidad agregada ", cantidad)}
        />
      </CardContent>
    </Card>
  );
};

export default CardComp;
