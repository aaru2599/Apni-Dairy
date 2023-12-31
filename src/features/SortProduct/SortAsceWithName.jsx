import React from 'react';

const SortAsceWithName = ({ products, setProducts, name }) => {
  const onClickSort = () => {
    const sortedProducts = [...products];
    const propName = name;

    console.log('Before sorting:', sortedProducts);
    
    sortedProducts.sort((a, b) => a[propName].localeCompare(b[propName]));

    // console.log('After sorting:', sortedProducts);

    setProducts(sortedProducts);
  };

  return (
    <button onClick={onClickSort} className='btn btn-warning btn-sm bi bi-sort-alpha-down'>
    </button>
  );
};

export default SortAsceWithName;
