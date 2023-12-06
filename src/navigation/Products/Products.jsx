import React from 'react'
import Header from '../../features/Header/Header';
import AddedProducts from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';
import AddedProductsToProductPage from '../../Components/Admin/AddedProducts/AddedProductsToProductPage';

const Products = () => {
  console.log("product");
  return (

    <div> <Header />
      <h2 className='text-center'>Products</h2>
      <AddedProductsToProductPage/>
    </div>

  )
}

export default Products