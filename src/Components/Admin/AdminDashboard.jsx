import React, { useState, useEffect } from 'react';
import Header from '../../features/Header/Header';
import { Link } from 'react-router-dom';
import AddProductPage from '../AddProductForm/AddProductPage';

const AdminDashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('productData')) || [];
    setProducts(storageData);
  }, []);

  const updateProductBtnClicked = (e) => {
    setSelectedProductIndex(products[e.target.value])
    console.log("selectedProductIndex",selectedProductIndex);

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
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) =>
                product.pName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{product.pName}</th>
                    <td>{product.pPrice}</td>
                    <td>{product.sellingPrice}</td>
                    <td>{product.pQuantity}</td>
                    <td>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                    <td>{product.pSelflife}</td>
                    <td>
                      <button className='btn btn-warning' value={index} onClick={updateProductBtnClicked}>
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      {
        selectedProductIndex !== null && (
          <div>
            <AddProductPage productData={selectedProductIndex} />
          </div>
        )
      }

    </div>
  );
};

export default AdminDashboard;
