import React from 'react'
import Header from '../../features/Header/Header';
import AddedProducts from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';
import AddedProductsToProductPage from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';

const Products = () => {
  console.log("product");
  return (

    <div> <Header />
     <img src="src/assets/products.jpg" height={250} style={{ width: "-webkit-fill-available" }}  alt="" />
      <AddedProductsToProductPage/>
    </div>

  )
}

export default Products