

import React from 'react'
import { KEY_SEND_TO_PRODUCT } from '../../../utils/localStorage';
import { Link } from 'react-router-dom';
import { LinkTag } from '../../../features/Header/Header.Style';
import styled from 'styled-components';
const CardLink = styled(Link)
  `
text-decoration:none;
color:black;`

const AddedProductsToProductPage = () => {
  // const products = useContext(ProductContext)
  const products = JSON.parse(localStorage.getItem(KEY_SEND_TO_PRODUCT))


  console.log("Added Product", products);
  return (

    <div className='d-flex  flex-wrap justify-content-around mt-3 '>
      {
        products && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div class="card border border-bg-gray border-radius" key={index}  >
                <CardLink to="/product-details">
                  <img src={product.pImage ? product.pImage : "https://img.freepik.com/free-vector/dairy-products-realistic-composition_1284-26248.jpg?w=360&t=st=1699201773~exp=1699202373~hmac=c31f58c97983053742937ab5998a89f80edd8cebbe7a179459a099b23d091be4"} style={{ width: "300px", height: "200px" }} class="card-img-top p-1  " alt="Image" />
                  <div className="card-body border border-radius">
                    <h5 className="card-title">{product.pName}</h5>
                    <p className="card-title d-flex" > <span>Price:</span> <span className='d-flex align-item-center gap-1'><del className='fs-6 text-secondary'>&#8377;{product.pPrice}   </del> <span className='fs-5'>{product.pSellingPrice}</span> </span></p>
                    <p className="card-text">{product.pDetails}</p>
                    <p className="card-text text-primary">
                      <small className={`${product.pAvailable ? "text-success" : "text-danger"}`}  >{product.pAvailable ? "Available" : "Not Available"}</small></p>
                    <button className='btn btn-primary'>Add To Cart</button>
                  </div>
                </CardLink>
              </div>

            )
          })
        ) : <h2>No products available</h2>
      }



    </div>

  )
}

export default AddedProductsToProductPage