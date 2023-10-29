import React, { useState, useEffect } from 'react';
import Header from '../../features/Header/Header';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";



const AdminDashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)


  useEffect(() => {
    const storedData = localStorage.getItem('productData');
    const storageData = JSON.parse(storedData) || [];
    setProducts(storageData);

    console.log(products);
  }, []);

  const updateProductBtnClicked = (e) => {
    setSelectedProductIndex(products[e.target.value])
    console.log("selectedProductIndex", selectedProductIndex.pName);

  }

  const adminHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const adminHeaderMainStyle = {
    width: "50%",
    margin: "0 auto 10px",
    backgroundColor: "khaki",
    padding: "20px"
  };

  const searchProduct = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <Header />
      <div style={adminHeaderMainStyle}>
        <header style={adminHeaderStyle}>
          <h3>My Products</h3>
          <input
            type="search"
            placeholder='Search'
            value={searchText}
            onKeyUp={searchProduct}
          />
          <Link className='btn btn-success' to="/addproduct">Add</Link>
        </header>
      </div>
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Selling Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Stock</th>
              <th scope="col">SelfLife</th>
              <th scope="col">Update</th>
              <th scope="col">Send To Products</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) =>
                product.pName && product.pName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((product, index) => {
                return (
                  <tr key={index}>


                    <th scope="row">{product.pName}</th>
                    <td>{product.pPrice}</td>
                    <td>{product.pSellingPrice}</td>
                    <td>{product.pQuantity}</td>
                    <td>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                    <td>{product.pSelflife}</td>
                    <td>
                      <Link className='btn btn-warning'
                        index={index} to={`/updateproduct/${index}`}
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </Link>

                    </td>
                    <td>
                      <Link className='btn btn-success'

                      >
                        <i class="bi bi-plus-square"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default AdminDashboard;
