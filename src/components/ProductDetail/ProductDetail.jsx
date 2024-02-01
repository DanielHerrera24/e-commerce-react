import Contador from "../Contador/Contador";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ProductDetail({
  productName,
  categoria,
  stock,
  img,
  descripcion,
  id,
  precio,
}) {
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
        {/* TODO: BTN VER DETALLES */}
        <Contador
          categoria={categoria}
          inicio={1}
          stock={stock}
          onAdd={(cantidad) => console.log("cantidad agregada ", cantidad)}
        />
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
