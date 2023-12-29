import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { KEY_PRODUCT_DATA } from '/public/assets/utils/localStorage';
// import { KEY_PRODUCT_DATA } from '/public/assets/utils/localStorage';

const UpdateProductForm = () => {
    const navigate = useNavigate()
    const { index} = useParams()
    const [values, setValues] = useState({
        
        pName: "",
        pPrice: "",
        pDetails: "",
        pSellingPrice: "",
        pQuantity: "",
        pSelflife: "",
        pAvailable: "",
        pCategory:"",
        pImage: "",
    })
    // const onSetImage = (event) => {
    //     const file = URL.createObjectURL(event.target.files[0]);
    //     setValues({...values,pImage:file})
    //     // setProductImage(file)
    // }
    const productDataSubmit = (e) => {
        e.preventDefault()
        const dataValues = JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA)) || [];

        dataValues[Number(index)] = values;

        localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify(dataValues));
        console.log("values", values);


        toast.success("Product updated successfully", {
            autoClose: 1000,
        });

        setTimeout(() => {
            navigate("/admin");
        }, 3000);



    }
    useEffect(() => {
        const dataValues = JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA)) || [];
       
        console.log("dataValues",dataValues);
       
        const productToUpdate=dataValues[Number(index)]

        console.log("productToUpdate", productToUpdate);
        // setValues([...dataValues,productToUpdate])
        localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify(dataValues))

        setValues({
            ...values,
            pId:productToUpdate.pId,
            pName: productToUpdate.pName,
            pPrice: productToUpdate.pPrice ,
            pDetails: productToUpdate.pDetails ,
            pSellingPrice: productToUpdate.pSellingPrice,
            pQuantity: productToUpdate.pQuantity ,
            pSelflife: productToUpdate.pSelflife ,
            pAvailable: productToUpdate.pAvailable,
            pImage:productToUpdate.pImage,
            pCategory:productToUpdate.pCategory
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
                <div className='d-flex flex-column'>
                            <label>
                                Select an option:

                            </label>
                            <select className='form-control rounded'value={values.pCategory} 
                            onChange={e=>setValues({...values,pCategory:e.target.value})}>
                                <option value="">Select...</option>
                                <option value="Milk">Milk</option>
                                <option value="Ghee">Ghee</option>
                                <option value="Curd">Curd</option>
                                <option value="Butter">Butter</option>
                                <option value="Paneer">Paneer</option>
                                <option value="FlavoredMilk">Flavored Milk</option>
                                <option value="Sweets">Sweets</option>
                                <option value="IceCream">IceCream</option>
                            </select>
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
                        onChange={e => setValues({ ...values, pAvailable: e.target.checked })}

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
                <div>
                        <label
                            className='custom-file-label'

                        >Product Image </label>
                        <input
                            required
                            className='custom-file-input'
                            // type="file"
                            
                            id="productSelflife"
                            value={values.pImage}
                            onChange={e => setValues({ ...values, pImage: e.target.value })}
                            />
                            <img src={values.pImage} alt="" />
                    </div>
                <button className='btn btn-primary w-100' type="submit">Update</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default UpdateProductForm