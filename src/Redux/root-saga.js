import { all, fork } from "redux-saga/effects";
import { watchGetProduct } from "./Product/Products.saga";

export default function* rootSaga(){
    yield all([fork(watchGetProduct)])
}