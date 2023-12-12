import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:null,
    isLoading
}
const productsSlice=createSlice({
    name:"products",
    initialState
})