import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./Product/products.slice";
import createSagaMiddleware from "redux-saga"

import rootSaga from "./root-saga";
import CartSlice from "./Product/Cart/CartSlice";
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer: {
        myProducts: productsSlice,
        myCart:CartSlice,
    },
    middleware: (current) => current({ thunk: false }).concat(sagaMiddleWare)
});
sagaMiddleWare.run(rootSaga)
export default store
