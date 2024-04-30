import React, { useEffect, useState } from "react";

const AboutProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/aboutproduct.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.aboutProduct));
    console.log("products", products);

    // console.log(products);
  }, []);
  console.log("newproducts", products);
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url(https://sktperfectdemo.com/themepack/dairy/wp-content/uploads/2020/06/sec2-bg.png) ",
      }}
    >
      <div className="text-center my-5">
        <div style={{ paddingTop: "5rem" }}>
          <div className="fs-5  fw-bolder text-info-emphasis ">What we </div>
          <h1 className="fw-bold">Produce</h1>
        </div>
      </div>
      <div className=" text-center  ">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {products.map((product, index) => (
            <div
              className="bg-white rounded mb-3"
              key={index}
              style={{ maxWidth: "300px" }}
            >
              <div>
                <img className="p-1" src={product.pImage} alt="" />
              </div>
              <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                {product.pName}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* <div >
             
            </div> */}
    </div>
  );
};

export default AboutProduct;
