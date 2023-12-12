import React from 'react'

const SortDesceWithName = ({products,setProducts}) => {
    // const newProducts=[products]

    const onClickSort = () => {
        const sortedProducts = [...products]
        sortedProducts.sort((a, b) => b.pName.localeCompare(a.pName))
        setProducts(sortedProducts)
        console.log("products",products);
    }
    return (
        <button onClick={onClickSort} className='btn btn-success btn-sm'><i class="bi bi-sort-alpha-down-alt"></i></button>
          
    )
}

export default SortDesceWithName