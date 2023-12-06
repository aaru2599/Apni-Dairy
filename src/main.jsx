import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteLayout from './navigation/routers/Route.Layout.jsx'
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouteLayout/>
  </React.Fragment>,
)


{/* <Link to={`/addproduct?restaurant=${restaurant.name}`}
  className="text-blue-400 hover:text-blue-300 bg-slate-300 hover:bg-slate-600 p-2 mx-2 rounded-xl"
>
  Add Products
</Link> */}