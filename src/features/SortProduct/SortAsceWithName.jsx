import React from 'react'

const SortAsceWithName = ({products,setProducts,targetVal}) => {
    // const newProducts=[products]
console.log("target",targetVal);
    const onClickSort = () => {
console.log("2target",targetVal);

        
        const sortedProducts = [...products]
        
        console.log(sortedProducts);
        sortedProducts.sort((a, b) => a[targetVal].localeCompare(b[targetVal]))
        setProducts(sortedProducts)
        console.log("products",products);
    }
    return (
        <button onClick={onClickSort} className='btn btn-warning'><i class="bi bi-sort-alpha-down"></i></button>
          
    )
}

export default SortAsceWithName