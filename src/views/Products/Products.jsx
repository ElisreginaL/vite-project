import React from 'react';
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import './index.scss';

const Products = ({data}) => {
  const {productId} = useParams();
  const selectedProduct = data.find(product => product.id == productId);
  return (
    <section>
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct}/>
    </section>
  );
};

export default Products
