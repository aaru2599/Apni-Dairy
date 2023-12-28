import { put, takeLatest } from "redux-saga/effects";
import { getProduct, getProductFailed, getProductSuccess } from "./products.slice";
export function* getproducts() {
    try {
        const productResponse = JSON.parse(localStorage.getItem("productData")) || [];
        // const productResponse= yield apiResponce

        console.log("productResponce", productResponse);
        if (!productResponse) {
            yield put(getProductFailed())
            return;
        }
        yield put(getProductSuccess({ result: productResponse }))
    } catch (err) {
        yield put(getProductFailed())
    }
}
export function* watchGetProduct() {
    yield takeLatest(getProduct, getproducts)
}