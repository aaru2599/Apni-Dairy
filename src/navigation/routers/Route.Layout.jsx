import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "bootstrap/dist/js/bootstrap.bundle"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../../features/Header/Header'
// import Home from '../Home/Home'
// import AboutUs from '../AboutUs/AboutUs'
import Products from '../Products/Products'
import AdminDashboard from '../../Components/Admin/AdminDashboard'
import AddProductPage from '../../Components/AddProductForm/AddProductPage'
import UpdateProductForm from '../../Components/AddProductForm/UpdateProductForm'
import { Provider } from 'react-redux'
import store from '../../Redux/store'
import ProductDetails from '../../Redux/Product/ProductDetails/ProductDetails'
import CartLayout from '../../Redux/Product/Cart/CartLayout'
import ShimmerEffect from '../../Components/Loader/ShimmerEffect'
import ProductDetailsEffect from '../../Components/Loader/ProductDetailsEffect'
import { Suspense } from 'react'
import React from 'react'
import { ProgressBar, ThreeCircles, ThreeDots } from 'react-loader-spinner'
// import Home from '../Home/Home'

const Home = React.lazy(() => import("../Home/Home"))
const AboutUs = React.lazy(() => import("../AboutUs/AboutUs"))

function RouteLayout() {

  const myRouter = createBrowserRouter([

    {
      path: "/",
      element: <Suspense fallback=
        {<div>
          
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
          <div><ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /></div>
            <h2 className=' '>WelCome To The Dairy Milk.... </h2></div>
        </div>}>
        <Home />
      </Suspense>
    },
    {
      path: "/aboutus",
      element: <Suspense fallback=
        {<div className='d-flex justify-content-center'><ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></div>}>
        <AboutUs />
      </Suspense>
    },
    {
      path: "/products",
      element: <Provider store={store}>
        <Products />
      </Provider>
    },
    {
      path: "/product-details/:productId",
      element: <ProductDetails />
    },
   
    {
      path: "/admin",
      element: <AdminDashboard />
    },
    {
      path: "/addproduct",
      element: <AddProductPage />
    }
    ,
    {
      path: "/updateproduct/:index",
      element: <UpdateProductForm />
    },

    {
      path: "/cart",
      element: <Provider store={store}>
        <CartLayout />
      </Provider>
    },
    {
      path: "/shimmer",
      element: <ShimmerEffect />
    }, {
      path: "/shimmerdetails",
      element: <ProductDetailsEffect />
    }
  ])
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default RouteLayout
