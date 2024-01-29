import React from 'react';
import { getProductById } from '../../serverMock/productMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardComp from '../Layout/Cards/Cards';

function ProductDetailContainer() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProductDetail(res));
  }, [id]);

  return (
    <div className="containerDetail">
      {productDetail && <CardComp {...productDetail} />}
    </div>
  );
}

export default ProductDetailContainer;