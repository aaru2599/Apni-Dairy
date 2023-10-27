import React, { useContext, useEffect, useState } from 'react'
import Header from '../../features/Header/Header'

import { Link } from 'react-router-dom'


const AdminDashboard = () => {
  const [searchText, setSearchText] = useState("")
  const [products,setProducts]=useState([])
  const storageData = JSON.parse(localStorage.getItem('productData'))
  
  
  console.log("products", products);
  useEffect(()=>{
setProducts(storageData)
  },[]);
  const btnClick=(e)=>{
    console.log(products[e.target.value]);
  }

  const adminHeaderStyle = {

    display: "flex",
    justifyContent: "space-between",
    alignItem: "center"
  }
  const adminHeaderMainStyle = {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    backgroundColor: "khaki",
    padding: "20px"
  }
  const searchProduct = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
  }

  return (
    <div>
      <Header />
      {/* <AdminHeader  />
    <ProductTable/> */}
      <div style={adminHeaderMainStyle} >
        <header style={adminHeaderStyle}>
          <h3>My Products</h3>
          <input type="search"
            placeholder='search'

            onKeyUp={searchProduct}
          />
          <Link className='btn btn-success' to="/addproduct">Add</Link>
        </header>
      </div>
      <div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Stock</th>
              <th scope="col">SelfLife</th>
              <th>ProductAdd</th>
            </tr>
          </thead>
          <tbody>

            {
              products && products.length > 0 ? (products.filter((product) =>
                product.pName.toLowerCase().includes(searchText.toLowerCase())
              ).
                map((product, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{product.pName}</th>
                      <td>{product.pPrice}</td>
                      <td>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                      <td>{product.pSelflife}</td>
                      <td><button value={index} onClick={btnClick}>Add to product</button></td>
                    </tr>

                  )
                })) : <h3 className='text-center'>Please Add product</h3>
            }
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default AdminDashboard