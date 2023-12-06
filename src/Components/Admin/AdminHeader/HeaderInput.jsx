import React from 'react'

const HeaderInput = ({searchText,setSearchText}) => {
    const searchProduct=(e)=>{
    setSearchText(e.target.value)
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