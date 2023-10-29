import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const UpdateProductForm = () => {
    const navigate = useNavigate()
    const { index } = useParams()
    const [values, setValues] = useState({
        pName: "",
        pPrice: "",
        pDetails: "",
        pSellingPrice: "",
        pQuantity: "",
        pSelflife: "",
        pAvailable: "",
    })
    const productDataSubmit = (e) => {
        e.preventDefault()
        const storedData = localStorage.getItem(`productData`);
        const dataValues = JSON.parse(storedData) || [];

        dataValues[Number(index)] = values;

        localStorage.setItem(`productData`, JSON.stringify(dataValues));
        navigate('/admin')
        if(submittedData){
            toast.success("Data Added To Dashboard")
            setInterval(() => {
                window.location='./admin'
            }, 3000);
        }
        
    }
    useEffect(() => {
        const storedData = localStorage.getItem(`productData`);
        const dataValues = JSON.parse(storedData) || [];
        const productToUpdate = dataValues[Number(index)];
        setValues({
            ...values,
            pName: productToUpdate.pName,
            pPrice: productToUpdate.pPrice,
            pDetails: productToUpdate.pDetails,
            pSellingPrice: productToUpdate.pSellingPrice,
            pQuantity: productToUpdate.pQuantity,
            pSelflife: productToUpdate.pSelflife,
            pAvailable: productToUpdate.pAvailable,
        }
        )
    }, [index])
    return (
        <div className='w-25 mx-auto'>
            <h1>Product Form</h1>
            <form onSubmit={productDataSubmit}>
                <div>
                    <label >Product Name:</label>
                    <input
                        className='form-control'
                        type="text"
                        id="productName"
                        value={values.pName}
                        onChange={e => setValues({ ...values, pName: e.target.value })}
                    />
                </div>
                <div>
                    <label >Product Price:</label>
                    <input
                        required
                        className='form-control'

                        type="text"
                        id="productPrice"
                        value={values.pPrice}
                        onChange={e => setValues({ ...values, pPrice: e.target.value })}
                    />
                </div>
                <div>
                    <label >Selling Price:</label>
                    <input

                        required
                        className='form-control'

                        type="text"
                        id="sellingPrice"
                        value={values.pSellingPrice}
                        onChange={e => setValues({ ...values, pSellingPrice: e.target.value })}

                    />
                </div>
                <div>
                    <label > Product Quantity:</label>
                    <input
                        required
                        className='form-control'
                        type="text"
                        id="productQuantity"
                        value={values.pQuantity}
                        onChange={e => setValues({ ...values, pQuantity: e.target.value })}

                    />
                </div>
                <div>
                    <label >Product Availability:</label>
                    <input

                        className='form-check-input'
                        type="checkbox"
                        id="productAvailable"
                        checked={values.pAvailable}
                        onChange={e => setValues({ ...values, pAvailable: e.target.value })}

                    />
                </div>
                <div>
                    <label >Product Details:</label>
                    <textarea
                        required
                        className='form-control'

                        id="productDetails"
                        value={values.pDetails}
                        onChange={e => setValues({ ...values, pDetails: e.target.value })}

                    />
                </div>
                <div>
                    <label >Product SelfLife:</label>
                    <input
                        className='form-control'
                        type="text"
                        id="productSelflife"
                        value={values.pSelflife}
                        onChange={e => setValues({ ...values, pSelflife: e.target.value })}
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
            <ToastContainer/>
        </div>
    )
}

export default UpdateProductForm