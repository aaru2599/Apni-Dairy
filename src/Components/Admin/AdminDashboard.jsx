import { useState, useEffect } from "react";
import Header from "../../features/Header/Header";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { KEY_PRODUCT_DATA } from "/public/assets/utils/localStorage";
import SortAsceWithName from "../../features/SortProduct/SortAsceWithName";
import SortDesceWithName from "../../features/SortProduct/SortDesceWithName";
import { ToastContainer, toast } from "react-toastify";
import SortAsceWithPrice from "../../features/SortProduct/SortAsceWithPrice";
import SortDesceWithPrice from "../../features/SortProduct/SortDesceWithPrice";
import _ from "lodash";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const location=useLocation();
  // console.log(location.pathname.split("/")[1]);

  useEffect(() => {
    const storageData =
      JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA)) || [];
    setProducts(storageData);
    setFilteredProducts(storageData);
  }, []);

  const onRemoveItem = (e) => {
    console.log("remove btn click");
    const index = e.target.value;
    const isConfirm = confirm("Do You Want To Delete This Item");
    if (isConfirm) {
      const updatedProducts = [...products];
      const removedProduct = updatedProducts.splice(index, 1);

      setProducts(updatedProducts);

      localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify(updatedProducts));

      console.log("Removed product:", removedProduct);

      toast.error(`${removedProduct[0].pName} removed successfully`, {
        autoClose: 2000,
      });
    }
  };
  const delayedSearch = _.debounce((value) => {
    setIsSearching(true);
    setIsLoading(true);

    const filtered = products.filter(
      (product) =>
        product.pName &&
        product.pName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
    setIsSearching(false);
    setIsLoading(false);
  }, 800);

  const searchProduct = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);
    delayedSearch(inputValue);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="/assets/product-banner.jpg"
          height={200}
          style={{ width: "-webkit-fill-available" }}
          alt=""
        />
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex gap-3"></div>
      </div>
      <div className="d-flex gap-4 mx-2 my-1">
        <aside className="bg-light border rounded h-50" style={{ flex: "10%" }}>
          <div>
            <div className="btn bg-success w-100 h-50 text-light text-center">
              Sort By
            </div>
            <div className="text-center">Product Name</div>
            <div className="d-flex justify-content-center gap-3">
              <SortAsceWithName
                products={products}
                setProducts={setProducts}
                name={"pName"}
              />
              <SortDesceWithName
                products={products}
                setProducts={setProducts}
              />
            </div>
            <hr />
            <div>
              <div className="text-center">Product Price</div>
              <div className="d-flex justify-content-center gap-3 mb-3">
                <SortAsceWithPrice
                  products={products}
                  setProducts={setProducts}
                  name={"pPrice"}
                />
                <SortDesceWithPrice
                  products={products}
                  setProducts={setProducts}
                  name={"pPrice"}
                />
              </div>
            </div>
          </div>
        </aside>

        <div
          className="rounded"
          style={{ flex: "80%", backgroundColor: "white" }}
        >
          <div className="d-flex justify-content-between p-2">
            <div>
              <h3>Products List</h3>
              <input
                className="form-control w-100"
                type="search"
                placeholder="Search Product"
                value={searchText}
                onChange={searchProduct}
              />
            </div>
            <div>
              <Link className="btn btn-success" to="/addproduct">
                + Add Product
              </Link>
            </div>
          </div>
          {isSearching && (
            <div className="text-center mt-3">
              <p>Loading search results...</p>
            </div>
          )}

          {!isLoading && !isSearching && filteredProducts.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    S.No
                  </th>

                  <th className="text-center" scope="col">
                    {" "}
                    Image
                  </th>
                  <th className="" scope="col">
                    {" "}
                    Name
                  </th>
                  <th className="text-center" scope="col">
                    {" "}
                    Price
                  </th>
                  <th className="text-center" scope="col">
                    Selling Price
                  </th>
                  <th className="text-center" scope="col">
                    Quantity
                  </th>
                  <th className="text-center" scope="col">
                    Categoty
                  </th>
                  <th className="text-center" scope="col">
                    Stock
                  </th>
                  <th className="text-center" scope="col">
                    Shelf Life
                  </th>
                  <th className="text-center" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <td className="text-center" scope="row">
                      <img
                        src={product.pImage}
                        width={40}
                        height={40}
                        className="rounded-circle object-fit-contain"
                        alt="img"
                      />
                    </td>
                    <td className="">{product.pName}</td>
                    <td className="text-center">{product.pPrice}</td>
                    <td className="text-center">{product.pSellingPrice}</td>
                    <td className="text-center">
                      {product.pQuantity} {product.pQtyUnit}
                    </td>
                    <td className="text-center">{product.pCategory}</td>
                    <td className="text-center">
                      {product.pAvailable ? "InStock" : "Out of Stock"}
                    </td>
                    <td className="text-center">
                      {product.pSelflife} {product.pShelfUnit}
                    </td>
                    <td className="text-center  ">
                      <Link
                        className="  "
                        index={index}
                        to={`/updateproduct/${index}`}
                      >
                        <i className="bi bi-pencil-square "></i>
                      </Link>
                      <button
                        className="btn bi bi-trash3"
                        value={index}
                        onChange={onRemoveItem}
                      ></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                {searchText.length > 0
                  ? `No products found for '${searchText}'.`
                  : "Product Not Available"}
              </td>
            </tr>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
