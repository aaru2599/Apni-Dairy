import React, { useContext, useEffect, useState } from 'react'
import '../../styles.css'

const AddProductPage = ({props}) => {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDetails, setProductDetails] = useState("")
    const [productAvailable, setProductAvailable] = useState(false)
    const [sellingPrice, setSellingPrice] = useState("")
    const [productQuantity, setProductQuantity] = useState("")
    const [productSelflife, setProductSelflife] = useState("")
    // const [productImage, setProductImage] = useState(null)
    const [submittedData, setSubmittedData] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault();


        const productData = {
            pName: productName,
            pPrice: productPrice,
            pDetails: productDetails,
            pSellingPrice: sellingPrice,
            pQuantity: productQuantity,
            pSelflife: productSelflife,
            pAvailable: productAvailable,
            // pImage: productImage,

        }

        setSubmittedData([...submittedData, productData])
        console.log("Product Added");
        setProductName("")
        setProductPrice("")
        setProductDetails("")
        setProductSelflife("")
        setSellingPrice("")
        setProductQuantity("")
        setProductAvailable(false)
        // setProductImage(null)
        localStorage.setItem('productData', JSON.stringify([...submittedData, productData]))

    }
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('productData'))
        if (savedData) {
            setSubmittedData(savedData)
            console.log("savedData", savedData);

        }
    }, [])
    console.log("submittedData", submittedData);
    const onSetImage = (event) => {
        const file = URL.createObjectURL(event.target.files[0]);
        setProductImage(file)
    }
    return (

        <div >
            <div className='w-25 mx-auto'>
                <h1>Product Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label >Product Name:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label >Product Price:</label>
                        <input
                            required
                            className='form-control'

                            type="text"
                            id="productPrice"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label >Selling Price:</label>
                        <input

                            required
                            className='form-control'

                            type="text"
                            id="sellingPrice"
                            value={sellingPrice}
                            onChange={(e) => setSellingPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label > Product Quantity:</label>
                        <input
                            required
                            className='form-control'
                            type="text"
                            id="productQuantity"
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label >Product Availability:</label>
                        <input

                            className='form-check-input'
                            type="checkbox"
                            id="productAvailable"
                            checked={productAvailable}
                            onChange={(e) => setProductAvailable(e.target.checked)}
                        />
                    </div>
                    <div>
                        <label >Product Details:</label>
                        <textarea
                            required
                            className='form-control'

                            id="productDetails"
                            value={productDetails}
                            onChange={(e) => setProductDetails(e.target.value)}
                        />
                    </div>
                    <div>
                        <label >Product SelfLife:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="productSelflife"
                            value={productSelflife}
                            onChange={(e) => setProductSelflife(e.target.value)}
                        />
                    </div>
                    {/* <div>
                        <label
                            className='custom-file-label'

                        >Product Image </label>
                        <input
                            required
                            className='custom-file-input'
                            type="file"
                            accept="image/*"
                            id="productImage"

                            onChange={onSetImage}
                        />
                    </div> */}
                    <button className='btn btn-primary w-100' type="submit">Submit</button>
                </form>
            </div>
            <div className='d-flex flex-wrap justify-content-around mt-3 '>
                {
                    submittedData && submittedData.length > 0 ? (
                        submittedData.map((product, index) => {
                            return (
                                <div class="card" key={index} style={{ width: "400px" }} >
                                    {/* <img src={product.pImage} class="card-img-top" alt="Image" /> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{product.pName}</h5>
                                        <div className='d-flex justify-content-between'>
                                            <h6 class="card-title">Product Price:${product.pPrice}</h6>
                                            <h6 class="card-title">Selling Price:${product.pSellingPrice}</h6>

                                        </div>
                                        <p class="card-text">{product.pDetails}</p>
                                        <p class="card-text">{product.pQuantity}</p>

                                        <p class="card-text">
                                            <small class="text-body-secondary">{product.pAvailable ? "Available" : "Not Available"}</small></p>
                                        <button className='btn btn-primary'>Add To Cart</button>
                                    </div>
                                </div>

                            )
                        })
                    ) : <h2>No products available</h2>
                }



            </div>

        </div>


    )
}

export default AddProductPage