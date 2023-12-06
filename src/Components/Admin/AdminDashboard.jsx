import React, { useState, useEffect } from 'react';
import Header from '../../features/Header/Header';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { KEY_PRODUCT_DATA, KEY_SEND_TO_PRODUCT } from '../../utils/localStorage';
import SortAsceWithName from '../../features/SortProduct/SortAsceWithName';
import SortDesceWithName from '../../features/SortProduct/SortDesceWithName';
import HeaderInput from './AdminHeader/HeaderInput';
import { ToastContainer, toast } from 'react-toastify';
import Switch from "react-switch";




const AdminDashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState([])

 
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA)) || [];
    setProducts(storageData);


  }, []);




  const onClickSendToProduct = (e) => {
    const index = e.target.value;
    const productToUpdate = products[Number(index)];
    const newProduct = JSON.parse(localStorage.getItem(KEY_SEND_TO_PRODUCT)) || [];

    console.log("newProduct", newProduct);
    console.log("productToUpdate", productToUpdate);
    if (productToUpdate) {
      const index = newProduct.findIndex((product) => product.pId === productToUpdate.pId)
      console.log("index", index);
      if (!index !== -1) {
        setUpdatedProduct([...updatedProduct, productToUpdate]);
        localStorage.setItem(KEY_SEND_TO_PRODUCT, JSON.stringify([...updatedProduct, productToUpdate]));
        toast.success("Product send successfully", {
          autoClose: 2000,
        });
      } else {
        toast.warning("Product Already Sent", {
          autoClose: 2000,
        });
      }
    }


  };

  return (

    <div>

      <Header />
      <div className='d-flex align-items-center'>
        <div className='d-flex gap-3'>
          {/* <SortAsceWithName products={products} setProducts={setProducts} targetVal="pName" /> */}
          {/* <SortDesceWithName products={products} setProducts={setProducts}  /> */}
        </div>
        {/* <div style={adminHeaderMainStyle}> */}


        {/* <header style={adminHeaderStyle}>

            /*<h3>My Products</h3>
            <SortAsceWithName products={products} setProducts={setProducts} targetVal="pPrice" />
            <SortAsceWithName products={products} setProducts={setProducts} targetVal="pQuantity" />

            <HeaderInput setSearchText={setSearchText} searchText={searchText} />
            <Link className='btn btn-success' to="/addproduct">Add</Link>
          </header> */}
        {/* </div> */}
      </div>
      <div className='d-flex gap-4 m-3'>
        <aside className='bg-light' style={{ flex: "10%" }}>
          <div>
            <div class="dropdown">
              <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                category
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button">Milk</button></li>
                <li><button class="dropdown-item" type="button">Curd</button></li>
                <li><button class="dropdown-item" type="button">Ghee</button></li>

              </ul>

            </div>
          </div>

        </aside>

        <div style={{ flex: "80%" }}  >
          <div className='d-flex justify-content-between p-2' >
            <div>
              <h3>Products List</h3>
              <HeaderInput setSearchText={setSearchText} searchText={searchText} />
            </div>
            <div>
            <Link className='btn btn-success' to="/addproduct">+ Add Product</Link>
            </div>
          </div>

          <table className="table table-striped">

            <thead>

              <tr>


                <th className='text-center' scope="col">Product Image</th>
                <th className='text-center' scope="col">Product Name</th>
                <th className='text-center' scope="col">Product Price</th>
                <th className='text-center' scope="col">Selling Price</th>
                <th className='text-center' scope="col">Quantity</th>
                <th className='text-center' scope="col">Stock</th>
                <th className='text-center' scope="col">ShelfLife</th>
                <th className='text-center' scope="col">Action</th>
                
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


                      <th className='text-center' scope="row"><img src={product.pImage} width={50} height={50} className='rounded-circle' alt="img" /></th>
                      <th className='text-center' >{product.pName}</th>
                      <td className='text-center'>{product.pPrice}</td>
                      <td className='text-center'>{product.pSellingPrice}</td>
                      <td className='text-center'>{product.pQuantity}</td>
                      <td className='text-center'>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                      <td className='text-center'>{product.pSelflife}</td>
                      <td className='text-center'>

                        <Link className="btn " index={index} to={`/updateproduct/${index}`} >
                          <i className="bi bi-pen"></i>
                        </Link>
                        <button className='btn  bi bi-plus-square'
                          value={index}

                          onClick={onClickSendToProduct}
                        >
                          {/* <i class="bi bi-plus-square"></i> */}
                        </button>
                       


                       

                      </td>
                      
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
