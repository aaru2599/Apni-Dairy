import React from 'react';

const SortAsceWithPrice = ({ products, setProducts, name }) => {
  const onClickSort = () => {
    const sortedProducts = [...products];
    const propName = name;

    console.log('Before sorting:', sortedProducts);
    
    sortedProducts.sort((a, b) => a[propName]-b[propName]);

    // console.log('After sorting:', sortedProducts);

    setProducts(sortedProducts);
  };

  return (
    <button onClick={onClickSort} className='btn btn-warning btn-sm bi bi-sort-numeric-down'>
    </button>
  );
};

export default SortAsceWithPrice;
