import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Products from './Components/Products/Products'
import Shop from './Components/Shop/Shop'
import Header from './features/Header/Header'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AdminDashboard from './Components/Admin/AdminDashboard'

import AddProductPage from './Components/AddProductForm/AddProductPage'

function App() {

const myRouter=createBrowserRouter([
  {
    path:"/",
    element:<Header/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/shop",
    element:<Shop/>

  },
  {
    path:"/admin",
    element:<AdminDashboard/>
  },
  {
    path:"/addproduct",
    element:<AddProductPage/>
  }

])
  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
