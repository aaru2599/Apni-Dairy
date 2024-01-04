import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductDetailsEffect from '../../../Components/Loader/ProductDetailsEffect';
import Header from '../../../features/Header/Header';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartQuantity } from '../Cart/CartSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const selectedProduct = state?.product;
  const dispatcher=useDispatch()

  // State to control whether to display the product details
  const [showDetails, setShowDetails] = useState(false);
  // State to control loading state
  const [quantity, setQuantity] = useState(1); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data from an API) with a timeout
    const fetchData = async () => {
      try {
        // Simulating an API call with a delay of 1000 milliseconds (1 second)
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShowDetails(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Trigger the asynchronous operation
    fetchData();
  }, []);

  // const onClickProductDec=()=>{
  //   dispatcher(updateCartQuantity({selectedProduct, quantity:selectedProduct.count - 1 }))
  // }
  const on_AddToCart=(selectedProduct)=>{
    toast.success(`${selectedProduct.pName} Added Successfully`,{
      autoClose:1000
    } )
    dispatcher(addToCart(selectedProduct))
  }
  console.log("selectedProduct", selectedProduct);
  return (
    <div className=' bg-white'>
      <div>
        <Header />
      </div>
      <div>
        <img src="/assets/product-banner.jpg" height={150} style={{ width: "-webkit-fill-available" }} alt="" />

      </div >
      <nav className='px-4 py-2 d-flex align-items-center gap-5' style={{ '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")' }} aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item"><Link className='text-success text-decoration-none' to={"/"}>Home</Link></li>
          <li className="breadcrumb-item"><Link className='text-success text-decoration-none' to={"/products"}>{selectedProduct.pCategory}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{selectedProduct.pName}</li>
        </ol>

        {/* <div className='d-flex justify-content-center pt-3'> */}
        {/* <Link className='btn btn-secondary' to="/products">Back</Link> */}
        {/* </div> */}
      </nav>
      {loading ? (
        <div  className='px-4 '><ProductDetailsEffect /></div>
      ) : (
        showDetails && (
          <div className='d-flex px-4 gap-5 '>

            <div >
              <img src={selectedProduct.pImage} className=' rounded object-fit-contain' width={450} height={450} alt="productImage" style={{ background: "url(https://www.w3schools.com/cssref/paper.gif)" }} />
            </div>
            <div>
              <table className='table '>
                <tbody>
                  <tr>
                    <td className='d-flex flex-column gap-2'>
                      <div className='text-success '>{selectedProduct.pCategory}</div>
                      <div className='fs-3 fw-semibold'>{selectedProduct.pName}</div>
                      <div className='  ' style={{ fontSize: "14px" }}>
                        <span className='fw-bold mx-1 text-success' style={{ fontSize: "14px" }}> &#8377;{selectedProduct.pSellingPrice}</span>
                        <span className='text-decoration-line-through mx-1' style={{ fontSize: "13px" }}>&#8377;{selectedProduct.pPrice}</span>

                        <span className='text-warning-emphasis' style={{ fontSize: "13px" }}>({(((selectedProduct.pPrice - selectedProduct.pSellingPrice) / selectedProduct.pPrice) * 100).toFixed(2)}% Off)</span>
                      </div>


                    </td>
                  </tr>
                  <tr>
                    <td >
                      <div className='my-2 d-flex gap-1'>
                        <button className='btn-sm btn btn-outline-secondary'>200{selectedProduct.pQtyUnit}</button>
                        <button className='btn-sm btn btn-outline-secondary'>500{selectedProduct.pQtyUnit}</button>
                        <button className='btn-sm btn btn-outline-secondary'>1000{selectedProduct.pQtyUnit}</button>
                      </div>
                      <div class="p-3 input-group input-spinner">
                        <button type="button"  onClick={() => onClickProductDec(selectedProduct.pId)} class="btn btn-sm btn-outline-secondary" data-field="quantity" >-</button>
                        <input style={{ width: "25px" }} type="number" value={quantity}  max="10"  name="quantity" class="btn   btn-sm btn-outline-  outline-0 border-secondary" />
                        <button type="button" class=" button-plus btn btn-sm btn-outline-secondary" data-field="quantity" >+</button>
                      </div>
                      <div class="py-2 row justify-content-start g-2 align-items-center">
                        <div class="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">

                          <button onClick={()=>on_AddToCart(selectedProduct)} type="button" class="d-flex gap-2 btn btn-success btn-sm">
                            <div class="bi bi-bag"></div>
                 <div >Add To Card</div>
                          </button>
                        </div>
                        <div class="col-md-4 col-4 ">
                          <a class="btn btn-sm mx-1 btn-light" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                          <a class="btn btn-sm mx-1 btn-light" href="/cart" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="bi bi-heart"></i></a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table class="table table-borderless mb-0">
                        <tbody style={{ fontSize: "15px" }}>
                          <tr>
                            <td className='text-secondary'>Product Code:</td>
                            <td className='text-secondary'>{selectedProduct.pId.slice(0, 5).toUpperCase()}</td>
                          </tr>
                          <tr>
                            <td className='text-secondary'>Availability: </td>
                            <td className='text-secondary'>{selectedProduct.pAvailable ? "In Stock" : "Out Of Stock"}</td>
                          </tr>
                          <tr>
                            <td className='text-secondary'> Category:</td>
                            <td className='text-secondary'>{selectedProduct.pCategory}</td>
                          </tr>
                          <tr className=''>
                            <td className='text-secondary'>Shipping:</td>
                            <td className='text-secondary w-75'>01 day shipping. ( Free pickup today)</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      )}
<ToastContainer/>

    </div>
  );
};

export default ProductDetails;
