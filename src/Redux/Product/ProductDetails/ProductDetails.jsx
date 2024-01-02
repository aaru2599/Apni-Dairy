import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductDetailsEffect from '../../../Components/Loader/ProductDetailsEffect';
import Header from '../../../features/Header/Header';

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const selectedProduct = state?.product;

  // State to control whether to display the product details
  const [showDetails, setShowDetails] = useState(false);
  // State to control loading state
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

  return (
    <div className='overflow-hidden'>
      <div>
        <Header />
      </div>
      <div className= 'd-flex justify-content-center pt-3'>
        <Link className='btn btn-secondary' to="/products">Back</Link>
      </div>
      {loading ? (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'><ProductDetailsEffect /></div>
      ) : (
        showDetails && (
          <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <div class="card p-3" style={{ maxWidth: "650px", }} >
              <div class="d-flex gap-5">
                <div class=" d-flex justify-contain-center align-items-center ">
                  <img src={selectedProduct.pImage} class="img-fluid rounded-start object-fit-contain border" width={200} alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">{selectedProduct.pName}</h5>
                    <p class="card-text text-body-secondary">{selectedProduct.pDetails}</p>
                    <div className='d-flex justify-content-between'>
                      <p class="card-text">Quantity: {selectedProduct.pQuantity} {selectedProduct.pQtyUnit}</p>

                      <p class="card-text"><small class="text-body-secondary">Best Before: {selectedProduct.pSelflife} {selectedProduct.pShelfUnit}</small></p>

                    </div>
                    <p class="card-text">&#8377; {selectedProduct.pPrice}</p>

                    <button className='btn btn-primary'>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}


    </div>
  );
};

export default ProductDetails;
