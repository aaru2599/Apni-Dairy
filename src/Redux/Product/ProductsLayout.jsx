import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './products.slice';
import { getproducts } from './Products.saga';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from './Cart/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import ShimmerEffect from '../../Components/Loader/ShimmerEffect';

const ProductsLayout = () => {
  const [searchedProduct, setSearchedProduct] = useState([])
  const [inputSearched, setInputSearched] = useState("")
  const products = useSelector((state) => state.myProducts);
  const isLoading = useSelector((state) => state.myProducts.isLoading);

  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const imgClick = (product) => {
    console.log("e.target.value", product);
    navigate(`/product-details/${product.pId}`);
  };
const handleFilterProductsCategory=(e)=>{
  const filterProduct=e.target.value
  const filteredProductcategory = products.data.filter((product) =>
  product.pCategory && product.pCategory.toLowerCase().includes(filterProduct.toLowerCase())
);
setSearchedProduct(filteredProductcategory)
}
  const onSearch = (e) => {
    setInputSearched(e.target.value);
    updateSearchedProduct(e.target.value);
  };
  const onSearchBtnClick = () => {
    updateSearchedProduct(inputSearched);
  };
  // setSearchedProduct(products.data)
  const updateSearchedProduct = (searchText) => {
    if (searchText.trim() === '') {
      // If search input is empty, show all products
      setSearchedProduct(products.data);
    } else {
      const filteredProduct = products.data.filter((product) =>
        product.pName && product.pName.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedProduct(filteredProduct);
    }
  };
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatcher(getProduct());
    }, 2000);

    return () => clearTimeout(delay);
  }, [dispatcher]);

  useEffect(() => {
    console.log("Updated products state", products);
    if (inputSearched.trim() === '') {
      // If search input is empty, show all products
      setSearchedProduct(products.data);
    }
  }, [products]);

  const onAddToCart = (product) => {
    toast.success(`${product.pName} Added to cart `, {
      autoClose: 1000,
    });

    dispatcher(addToCart(product));
  };

  console.log("products", products);

  return (
    <div className='m-2 '>

      <div className="d-flex justify-content-center w-100 p-2">
        <div className='d-flex gap-2 justify-content-between border'>

          <input type="text"
            className='border-0 focus-ring'
            placeholder='Find Product...'
            onChange={onSearch}
          />
          <div>
            <select onChange={handleFilterProductsCategory} className='text-decoration-underline focus-ring link-underline-primary text-primary border-0 focus-none'
            >
              <option className='text-dark' value="">All Products </option>
              <option className='text-dark' value="Milk">Milk</option>
              <option className='text-dark' value="Ghee">Ghee</option>
              <option className='text-dark' value="Curd">Curd</option>
              <option className='text-dark' value="Butter">Butter</option>
              <option className='text-dark' value="Paneer">Paneer</option>
              <option className='text-dark' value="FlavoredMilk">Flavored Milk</option>
              <option className='text-dark' value="Sweets">Sweets</option>
              <option className='text-dark' value="IceCream">IceCream</option>
            </select>
            <button className='btn ' onClick={onSearchBtnClick}><i className='bi bi-search'></i></button>



          </div>
        </div>
      </div>


      {isLoading && <div><ShimmerEffect /></div>}

      <div className='row row-cols-1 row-cols-md-5 g-3 '>
        {searchedProduct &&
          searchedProduct.map((product, index) => (
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
                  <h6 className="card-title  text-truncate">
                    {product.pName}
                  </h6>
                  <div className=''>
                    <div className='d-flex justify-content-between'><div>&#8377; {product.pPrice}</div><div>{product.pQuantity} {product.pQtyUnit}</div></div>
                    <div className=''>
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
