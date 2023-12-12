import React from 'react';

const SortDesceWithPrice = ({ products, setProducts, name }) => {
  const onClickSort = () => {
    const sortedProducts = [...products];
    const propName = name;

    console.log('Before sorting:', sortedProducts);
    
    sortedProducts.sort((a, b) => b[propName]-a[propName]);

    // console.log('After sorting:', sortedProducts);

    setProducts(sortedProducts);
  };

  return (
    <button onClick={onClickSort} className='btn btn-warning btn-sm bi bi-sort-numeric-down-alt'>
    </button>
  );
};

export default SortDesceWithPrice;
