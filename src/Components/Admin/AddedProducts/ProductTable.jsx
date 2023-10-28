import React from 'react'

const ProductTable = () => {
  const products = JSON.parse(localStorage.getItem('productData'))
  console.log("products", products);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Selling Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Stock</th>
            <th scope="col">SelfLife</th>

          </tr>
        </thead>
        <tbody>

          {
            products && products.length > 0 ? (products.map((product, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{product.pName}</th>
                  <td>{product.pPrice}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.pQuantity}</td>
                  <td>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                  <td>{product.pSelflife}</td>
                </tr>
              )
            })) : <h3 className='text-center'>Please Add product</h3>
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable