import React from 'react';
import Header from '../../features/Header/Header';
import AddedProductsToProductPage from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';
import ProductsLayout from '../../Redux/Product/ProductsLayout';

const Products = () => {
  console.log("product");
  return (
    <div >
      <div className='overflow-hidden bg-white' >
        <Header />
        <img src="/assets/products.jpg" height={250} style={{ width: "100%" }} alt="" />
        {/* <AddedProductsToProductPage/> */}
        <ProductsLayout />
      </div>
    </div>
  );
};

export default Products;
