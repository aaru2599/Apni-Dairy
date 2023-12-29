import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './products.slice';
import { getproducts } from './Products.saga';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from './Cart/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import ShimmerEffect from '../../Components/Loader/ShimmerEffect';

const ProductsLayout = () => {
  const products = useSelector((state) => state.myProducts);
  const isLoading = useSelector((state) => state.myProducts.isLoading);

  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const imgClick = (product) => {
    console.log("e.target.value", product);
    navigate(`/product-details/${product.pId}`);
  };

  useEffect(() => {
    // Simulate a delay of 2 seconds before fetching the product data
    const delay = setTimeout(() => {
      dispatcher(getProduct());
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts or if the data is already loaded
    return () => clearTimeout(delay);
  }, [dispatcher]);

  useEffect(() => {
    console.log("Updated products state", products);
  }, [products]);

  const onAddToCart = (product) => {
    toast.success(`${product.pName} Added to cart `, {
      autoClose: 1000,
    });

    dispatcher(addToCart(product));
  };

  console.log("products", products);

  return (
    <div className='mt-4 '>
      {isLoading && <div><ShimmerEffect /></div>}

      <div className='row row-cols-1 row-cols-md-5 g-3 '>
        {products.data &&
          products.data.map((product, index) => (
            <div key={product.id} className='col'>
              <div className="card bg-body-emphasis" >
                <Link
                  onClick={(e) => imgClick(e, product)}
                  to={`/product-details/${product.pId}`}
                  state={{ product }}
                  className='p-3 border-bottom '
                >
                  <img src={product?.pImage} width={500} alt="img" className="card-img-top object-fit-contain  rounded" height={150} />
                </Link>

                <div className="card-body">
                  <h4 className="card-title  text-truncate">
                    {product.pName}
                  </h4>
                  <div className=''>
                    <div>&#8377; {product.pPrice}</div>
                    <div className='text-center'>
                      <button onClick={() => onAddToCart(product)} className='text center btn btn-sm btn-secondary text-center'>Add To Cart</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsLayout;
