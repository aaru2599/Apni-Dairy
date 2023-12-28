import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "bootstrap/dist/js/bootstrap.bundle"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../../features/Header/Header'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Products from '../Products/Products'
import Shop from '../Shop/Shop'
import AdminDashboard from '../../Components/Admin/AdminDashboard'
import AddProductPage from '../../Components/AddProductForm/AddProductPage'
import UpdateProductForm from '../../Components/AddProductForm/UpdateProductForm'
import Cart from '../Cart/Cart'
import ProductsLayout from '../../Redux/Product/ProductsLayout'
import { Provider } from 'react-redux'
import store from '../../Redux/store'
import ProductDetails from '../../Redux/Product/ProductDetails/ProductDetails'
import CartLayout from '../../Redux/Product/Cart/CartLayout'
import ShimmerEffect from '../../Components/Loader/ShimmerEffect'
import ProductDetailsEffect from '../../Components/Loader/ProductDetailsEffect'

function RouteLayout() {

  const myRouter = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/products",
      element:<Provider store={store}>
          <Products/>
        </Provider>
    },
    {
      path:"/product-details/:productId",
      element:<ProductDetails/>
    },
    {
      path: "/shop",
      element: <Shop />

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
      element:<Provider store={store}>
      <CartLayout/>
    </Provider>
    },
    {
      path:"/shimmer",
      element:<ShimmerEffect/>
    },{
      path:"/shimmerdetails",
      element:<ProductDetailsEffect/>
    }
  ])
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default RouteLayout
