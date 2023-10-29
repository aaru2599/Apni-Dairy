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

function RouteLayout() {

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/products",
      element: <Products />
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
path:"/updateproduct/:index",
element:<UpdateProductForm/>
    }
  ])
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default RouteLayout
