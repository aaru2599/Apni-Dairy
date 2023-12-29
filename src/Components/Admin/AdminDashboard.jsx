import React, { useState, useEffect } from 'react';
import Header from '../../features/Header/Header';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { KEY_PRODUCT_DATA, KEY_SEND_TO_PRODUCT } from '/public/assets/utils/localStorage';
import SortAsceWithName from '../../features/SortProduct/SortAsceWithName';
import SortDesceWithName from '../../features/SortProduct/SortDesceWithName';
import HeaderInput from './AdminHeader/HeaderInput';
import { ToastContainer, toast } from 'react-toastify';
import Switch from "react-switch";
import SortAsceWithPrice from '../../features/SortProduct/SortAsceWithPrice';
import SortDesceWithPrice from '../../features/SortProduct/SortDesceWithPrice';




const AdminDashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  // const [updatedProduct, setUpdatedProduct] = useState([])


  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA)) || [];
    setProducts(storageData);


  }, []);

  const onRemoveItem = (e) => {
    const index = e.target.value;
    const isConfirm = confirm("Do You Want To Delete This Item")
    if (isConfirm) {
      const updatedProducts = [...products];
      const removedProduct = updatedProducts.splice(index, 1);


      setProducts(updatedProducts);


      localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify(updatedProducts));


      console.log("Removed product:", removedProduct);

      toast.error(`${removedProduct[0].pName} removed successfully`, {
        autoClose: 2000,
      });
    }

  };




  // const onClickSendToProduct = (e) => {
  //   const index = e.target.value;
  //   const productToUpdate = products[Number(index)];
  //   const newProduct = JSON.parse(localStorage.getItem(KEY_SEND_TO_PRODUCT)) || [];

  //   console.log("newProduct", newProduct);
  //   console.log("productToUpdate", productToUpdate);
  //   if (productToUpdate) {
  //     const index = newProduct.findIndex((product) => product.pId === productToUpdate.pId)
  //     console.log("index", index);
  //     if (!index !== -1) {
  //       setUpdatedProduct([...updatedProduct, productToUpdate]);
  //       localStorage.setItem(KEY_SEND_TO_PRODUCT, JSON.stringify([...updatedProduct, productToUpdate]));
  //       toast.success("Product send successfully", {
  //         autoClose: 2000,
  //       });
  //     } else {
  //       toast.warning("Product Already Sent", {
  //         autoClose: 2000,
  //       });
  //     }
  //   }


  // };

  return (

    <div>

      <Header />
      <div>

        <img src="/assets/product-banner.jpg" height={150} style={{ width: "-webkit-fill-available" }} alt="" />
      </div>
      <div className='d-flex align-items-center'>
        <div className='d-flex gap-3'>
        </div>

      </div>
      <div className='d-flex gap-4 mx-2 my-1'>
        <aside className='bg-light border rounded h-50' style={{ flex: "10%" }}>
          <div>
            <div className='btn bg-success w-100 h-50 text-light text-center'>Sort By</div>
            <div className='text-center'>Product Name</div>
            <div className='d-flex justify-content-center gap-3'>
              <SortAsceWithName products={products} setProducts={setProducts} name={"pName"} />
              <SortDesceWithName products={products} setProducts={setProducts} />
            </div>
            <hr />
            <div>
              <div className='text-center'>
                Product Price
              </div>
              <div className='d-flex justify-content-center gap-3 mb-3'>
                <SortAsceWithPrice products={products} setProducts={setProducts} name={"pPrice"} />
                <SortDesceWithPrice products={products} setProducts={setProducts} name={"pPrice"} />
              </div>

            </div>
          </div>

        </aside>

        <div className='rounded' style={{ flex: "80%", backgroundColor: "white" }}  >
          <div className='d-flex justify-content-between p-2' >
            <div>
              <h3>Products List</h3>
              <HeaderInput setSearchText={setSearchText} searchText={searchText} />
            </div>
            <div>
              <Link className='btn btn-success' to="/addproduct">+ Add Product</Link>
            </div>
          </div>

          {
            products.length > 0 ? (
              <table className="table table-striped">

                <thead>

                  <tr>

                    <th className='text-center' scope="col">S.No</th>

                    <th className='text-center' scope="col">Product Image</th>
                    <th className='text-center' scope="col">Product Name</th>
                    <th className='text-center' scope="col">Product Price</th>
                    <th className='text-center' scope="col">Selling Price</th>
                    <th className='text-center' scope="col">Quantity</th>
                    <th className='text-center' scope="col">Categoty</th>
                    <th className='text-center' scope="col">Stock</th>
                    <th className='text-center' scope="col">ShelfLife</th>
                    <th className='text-center' scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    products
                      .filter((product) =>
                        product.pName && product.pName.toLowerCase().includes(searchText.toLowerCase())
                      )
                      .map((product, index) => (
                        <tr key={index}>

                          <th className='text-center'>{index + 1}</th>
                          <th className='text-center' scope="row">
                            <img src={product.pImage} width={40} height={40} className='rounded-circle' alt="img" />
                          </th>
                          <th className='text-center'>{product.pName}</th>
                          <td className='text-center'>{product.pPrice}</td>
                          <td className='text-center'>{product.pSellingPrice}</td>
                          <td className='text-center'>{product.pQuantity}</td>
                          <td className='text-center'>{product.pCategory}</td>
                          <td className='text-center'>{product.pAvailable ? "InStock" : "Out of Stock"}</td>
                          <td className='text-center'>{product.pSelflife}</td>
                          <td className='text-center  '>
                            <Link className="  " index={index} to={`/updateproduct/${index}`}>
                              <i className="bi bi-pencil-square "></i>
                            </Link>
                            <button className='btn bi bi-trash3'
                              value={index}
                              onClick={onRemoveItem}></button>


                          </td>
                        </tr>
                      ))
                  }
                </tbody>

              </table>
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  {searchText.length > 0
                    ? `No products found for '${searchText}'.`
                    : 'Product Not Available'}
                </td>
              </tr>
            )
          }

        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;


