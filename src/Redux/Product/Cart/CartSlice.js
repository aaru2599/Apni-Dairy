import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],

}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const myData = action.payload
            console.log("myData", myData);
            const existingProductIndex = state.data.findIndex(item => item.pId === myData.pId)
            if (existingProductIndex === -1) {
                state.data.push({ ...myData, count: 1 })
            }
            else {
                state.data[existingProductIndex].count++
            }
            return state

        },
        removeFromCart: (state, action) => {
            const productRemove = action.payload
            const productIndex = state.data.findIndex((item) => item.pId === productRemove.pId)
            if (productIndex !== -1) {
                state.data.splice(productIndex, 1)
            }

        },
        updateCartQuantity: (state, action) => {
            const { productId, quantity } = action.payload
            const productToUpdate = state.data.find((item) => item.pId === productId)
            if (productToUpdate) {
                productToUpdate.count = quantity;
               
                 
                    if (quantity === 0) {
                        const productIndex = state.data.findIndex((item) => item.pId === productId)
                        if (productIndex) {



                            state.data.splice(productIndex, 1)


                        }
                    }
                
            }
        }
    }
})
export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions
export default cartSlice.reducer