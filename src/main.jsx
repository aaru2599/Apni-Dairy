import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteLayout from './navigation/routers/Route.Layout.jsx'
import store from './Redux/store.js'

import "./index.css"
import { Provider } from 'react-redux'
import ProductsLayout from './Redux/Product/ProductsLayout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouteLayout/>
</Provider>
  )


{/* <Link to={`/addproduct?restaurant=${restaurant.name}`}
  className="text-blue-400 hover:text-blue-300 bg-slate-300 hover:bg-slate-600 p-2 mx-2 rounded-xl"
>
  Add Products
</Link> */}