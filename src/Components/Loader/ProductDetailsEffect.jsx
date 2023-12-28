import React from 'react'
import { ShimmerPostItem } from 'react-shimmer-effects'

const ProductDetailsEffect = () => {
  return (
    <div style={{width:"500px"}}>
         <ShimmerPostItem
          card
          title
          cta
          imageType="thumbnail"
          
          imageWidth={80}
          imageHeight={80}
          contentCenter
        />
    </div>
  )
}

export default ProductDetailsEffect