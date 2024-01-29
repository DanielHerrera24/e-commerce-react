import CardComp from "../Layout/Cards/Cards";

function ProductList({ productos }) {
  return (
    <>
      {productos.map((productos) => {
        return <CardComp {...productos} />;
      })}
    </>
  );
}

export default ProductList;
