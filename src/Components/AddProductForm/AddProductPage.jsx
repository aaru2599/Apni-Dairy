import React, { useEffect, useState } from 'react'
import '../../styles.css'
import AddedProducts from '../Admin/AddedProducts/AddedProducts'

const AddProductPage = () => {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDetails, setProductDetails] = useState("")
    const [productAvailable, setProductAvailable] = useState(false)
    const [productSelflife, setProductSelflife] = useState("")
    const [productImage, setProductImage] = useState(null)
    const [submittedData, setSubmittedData] = useState([])

 
  

    const handleSubmit = (e) => {
        const productData = {
            pName: productName,
            pPrice: productPrice,
            pDetails: productDetails,
            pSelflife: productSelflife,
            pAvailable: productAvailable,
            pImage: productImage
        }
        setSubmittedData([...submittedData, productData])
        setProductName("")
        setProductPrice("")
        setProductDetails("")
        setProductSelflife("")
        setProductAvailable(false)
        setProductImage(null)
        localStorage.setItem('productData', JSON.stringify([...submittedData, productData]))

    }
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('productData'))
        if (savedData) {
            setSubmittedData(savedData)
            console.log("savedData",savedData);
        }
    }, [])
    console.log("submittedData",submittedData);
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
                        <label >Product Availability:</label>
                        <input
                            required
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
                    <div>
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
                    </div>
                    <button className='btn btn-primary w-100' type="submit">Submit</button>
                </form>
            </div>
            <AddedProducts submittedData={submittedData}/>
        </div>
        
    )
}

export default AddProductPage