import _ from 'lodash';
import React from 'react'
const HeaderInput = ({ searchText, setSearchText }) => {
  const debounceSearch = _.debounce((value) => {
    setSearchText(value)
  }, 1000)
  const searchProduct = (e) => {
    const inputSearch = e.target.value
    debounceSearch(inputSearch)


  }
  return (
    <input className='form-control w-100'
      type="search"
      placeholder='Search Product'
      value={searchText}
      onChange={searchProduct}
    />
  )
}

export default HeaderInput