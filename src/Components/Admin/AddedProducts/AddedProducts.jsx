import React from 'react'

const AddedProducts = ({ submittedData }) => {
console.log("Added Product",submittedData);
  return (
    <div className='d-flex flex-wrap justify-content-around mt-3 '>
      {
        submittedData && submittedData.length > 0 ?(
          submittedData.map((product, index) => {
            return (
              <div class="card" key={index} style={{ width: "400px" }} >
                <img src={product.pImage} class="card-img-top" alt="Image" />
                <div class="card-body">
                  <h5 class="card-title">{product.pName}</h5>
                  <h6 class="card-title">Price:${product.pPrice}</h6>
                  <p class="card-text">{product.pDetails}</p>
                  <p class="card-text">
                    <small class="text-body-secondary">{product.pAvailable ? "Available" : "Not Available"}</small></p>
                  <button className='btn btn-primary'>Add To Cart</button>
                </div>
              </div>
  
            )
          })
        ):<h2>No products abailable</h2>
      }



    </div>
  )
}

export default AddedProducts