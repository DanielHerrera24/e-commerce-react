import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./commons/Loading";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    setProductDetail({ loading: true });
    const db = getFirestore();

    const oneItem = doc(db, "electrica", id);
    getDoc(oneItem)
      .then((snapshot) => {
        console.log(snapshot.data());
        setProductDetail({ ...snapshot.data(), id: snapshot.id, loading: false });
      })
      .catch((error) => {
        console.log(error);
        setProductDetail({ error: true, loading: false });
      });
  }, [id]);

  if (productDetail.loading)
    return <Loading isLoading={productDetail.loading} />;

  if (productDetail.error)
    return <h1>¡Ha ocurrido un error, intentelo nuevamente!</h1>;

  return (
    <div>
      <h2>Detalle del producto</h2>
      {productDetail && <ItemDetail { ...productDetail}/>}
    </div>
  );
}

export default ItemDetailContainer;
