export const KEY_PRODUCT_DATA='productData'
export const KEY_SEND_TO_PRODUCT='sendToProductData'
// export const getItem=(key)=>localStorage.getItem(key)
// export const getParsedItem=JSON.parse(getItem(key));
// export const GET_STORAGE_DATA = JSON.parse() || []
export const getStringifyItem=(key,value)=>setItem(key,JSON.stringify(value))
export const setItem=(key,value)=> localStorage.setItem(key, value)