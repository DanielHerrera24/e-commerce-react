import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../commons/Loading";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProductById } from "../../serverMock/productMock";

function ProductDetailContainer() {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    setProductDetail({ loading: true });
    getProductById(itemId)
      .then((res) => setProductDetail({ data: res, loading: false }))
      .catch((error) => {
        console.error(error);
        setProductDetail({ error: true, loading: false });
      });
  }, [itemId]);

  if (productDetail.loading)
    return <Loading isLoading={productDetail.loading} color="#034494" />;

  if (productDetail.error)
    return <h1>¡Ha ocurrido un error, intentelo nuevamente!</h1>;

  return (
    <div className="flex justify-center">
      {productDetail.data && <ProductDetail {...productDetail.data} />}
    </div>
  );
}

export default ProductDetailContainer;
