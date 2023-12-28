


import { ShimmerPostList, ShimmerSimpleGallery } from 'react-shimmer-effects'

const ShimmerEffect = () => {
    return (
        <div className='bg-light'>
            {/* <ShimmerPostList postStyle="STYLE_FOUR" col={4} imageHeight={100} row={3}  /> */}
            <ShimmerSimpleGallery card imageHeight={200} sty width={100}  col={4} gap={10} row={3} caption />

        </div>)
}

export default ShimmerEffect
