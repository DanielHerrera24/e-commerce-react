import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Contador from "../../Contador/Contador";

const CardComp = ({ producto }) => {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        className=""
        src={producto.img}
        title={producto.productName}
      />
      <CardContent>
        <span className="text-2xl">{"$ " + producto.precio + " MXN"}</span>
        <h2 className="text-pretty text-base md:text-lg text-gray-500 md:mb-1">{producto.productName}</h2>
        {/* TODO: BTN VER DETALLES */}
        <Contador
          inicio={1}
          stock={10}
          onAdd={(cantidad) => console.log("cantidad agregada ", cantidad)}
        />
      </CardContent>
    </Card>
  );
};

export default CardComp;
