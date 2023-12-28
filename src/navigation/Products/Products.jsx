import React from 'react'
import Header from '../../features/Header/Header';
import AddedProducts from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';
import AddedProductsToProductPage from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';
import ProductsLayout from '../../Redux/Product/ProductsLayout';

const Products = () => {
  console.log("product");
  return (

    <div className='overflow-hidden bg-white'> <Header />
     <img src="src/assets/products.jpg" height={250} style={{ width: "-webkit-fill-available" }}  alt="" />
      {/* <AddedProductsToProductPage/> */}
      <ProductsLayout/>
    </div>

  )
}

export default Products