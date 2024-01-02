

import React, { useState } from 'react'
// import { KEY_PRODUCT_DATA, KEY_SEND_TO_PRODUCT } from '/utils/localStorage';
import { Link } from 'react-router-dom';
import { LinkTag } from '../../../features/Header/Header.Style';
import styled from 'styled-components';

const CardLink = styled(Link)
  `
text-decoration:none;
color:black;`

const AddedProductsToProductPage = () => {
  const [dummyImage,setDummyImage]=useState("https://img.freepik.com/free-vector/dairy-products-realistic-composition_1284-26248.jpg?w=360&t=st=1699201773~exp=1699202373~hmac=c31f58c97983053742937ab5998a89f80edd8cebbe7a179459a099b23d091be4")
  // const products = useContext(ProductContext)
  const products = JSON.parse(localStorage.getItem("productData"))


  console.log("Added Product", products);
  // console.log("products?.pImage", products[1]?.pImage);
  return (

    <div className='mt-4'>
     
      <div className='row row-cols-1 row-cols-md-5 g-3 '>
      {
        products && products.length > 0 ? (
          products.map((product, index) => {
          
            // console.log("imageUrl",imageUrl);
            return (
              <div className='col'>
                <div className="card">
                  
                  <Link to="/product-details" className='p-3 border-bottom'><img src={product?.pImage || dummyImage} width={500}  alt="img" className="card-img-top" height={150} /></Link>

                  <div className="card-body">
                    <h4 className="card-title text-center">
                      {product.pName}
                    </h4>
                    <div className='text-center'>
                      <button className='btn btn-sm btn-secondary text-center'>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              

            )
          })
        ) : <h2>No products available</h2>
      }



    </div>
    </div>

  )
}

export default AddedProductsToProductPage