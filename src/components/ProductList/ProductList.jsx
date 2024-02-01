import CardComp from "../Layout/Cards/Cards";
import { Link } from 'react-router-dom';

function ProductList({ productos }) {
  return (
    <>
      {productos.map((producto) => {
        return (
          <Link key={producto.id} to={`/e-commerce-react/id/${producto.id}`}>
            <CardComp {...producto} />
          </Link>
        );
      })}
    </>
  );
}

export default ProductList;
