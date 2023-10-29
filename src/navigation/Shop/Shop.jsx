import axios from 'axios'
import React, { useEffect } from 'react'
const Shop = () => {
const url="src/utils/productData.json"
  useEffect(()=>{
    axios.get(url)
    .then((responce)=>{
     const newData= responce.data.productData
     console.log(newData);
    }
    
    )
    
  })
  return (
   <div>
shop
   </div>
  )
}

export default Shop