import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductDetailsEffect from '../../../Components/Loader/ProductDetailsEffect';

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
        <Link className='btn btn-secondary' to="/products">Back</Link>
      </div>
      {loading ? (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'><ProductDetailsEffect/></div>
      ) : (
        showDetails && (
          <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <div class="card p-3" style={{ maxWidth: "500px", }} >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={selectedProduct.pImage} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{selectedProduct.pName}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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
