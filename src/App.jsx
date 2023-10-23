import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './features/molecule/Home/Home'
import AboutUs from './features/molecule/AboutUs/AboutUs'
import Products from './features/molecule/Products/Products'
import Shop from './features/molecule/Shop/Shop'
import Header from './features/Header/Header'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AdminDashboard from './Components/Admin/AdminDashboard'

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
  }

])
  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
