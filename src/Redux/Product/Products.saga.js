export function* getUsers() {
    try {
        const productResponce = yield JSON.parse(localStorage.getItem("productData"))
        if (!productResponce) {
            yield put
        }
    } catch (err) {
        return err
    }
}
export function* watchGetUsers() {
    yield takeLatest("users/getUser", getUsers)
}