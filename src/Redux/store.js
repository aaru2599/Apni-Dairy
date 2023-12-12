import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "react-redux"
const sagaMiddleWare=createSagaMiddleware()
const store=configureStore({
    reducer:{

    },
    middleware: (current) => current({ thunk: false }).concat(sagaMiddleware)
});
// sagaMiddleWare.run(rootSaga)
