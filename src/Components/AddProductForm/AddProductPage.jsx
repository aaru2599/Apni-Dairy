import React, { useContext, useEffect, useState } from 'react'
import '../../styles.css'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { KEY_PRODUCT_DATA } from '/utils/localStorage';

import { RendomId } from '/public/assets/utils/RendomId';
import "./formStyle.css"
import OnPreview from './OnPreview';
import { Link } from 'react-router-dom';
// import { KEY_PRODUCT_DATA } from '/public/assets/utils/localStorage';
import { KEY_PRODUCT_DATA } from '/public/assets/utils/localStorage';
// import { KEY_PRODUCT_DATA } from '/public/assets/localStorage';

const AddProductPage = () => {

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDetails, setProductDetails] = useState("")
    const [productAvailable, setProductAvailable] = useState(false)
    const [sellingPrice, setSellingPrice] = useState("")
    const [productQuantity, setProductQuantity] = useState("")
    const [productSelflife, setProductSelflife] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productImage, setProductImage] = useState(null)
    const [submittedData, setSubmittedData] = useState([])
    const [isShowPreviewModal, setIsShowPreviewModal] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false);



    // const navigate = useNavigate()
    const validateForm = () => {


        return (
            productName.trim() !== '' &&
            productPrice !== '' &&
            sellingPrice !== '' &&
            productQuantity !== '' &&
            productSelflife.trim() !== '' &&
            productImage !== ''

        )
    }
    const handleDropdownChange = (e) => {
        setProductCategory(e.target.value)
    }
    console.log("productCategory", productCategory);
    // console.log(validateForm());
    console.log("isShowPreviewModal",isShowPreviewModal);
    const onPreview = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        // setIsFormValid(isValid);
        setIsShowPreviewModal(isValid);
        console.log("isValid",isValid);
        
    if (isValid) {
    } else {
        toast.error("Please fill in all required fields.", {
            autoClose: 3000,
        });
    }

    };


    const onCloseModal = () => {
        setIsShowPreviewModal(false)
    }
    const onSaveProduct = (e) => {
        e.preventDefault();
        const productDataInfo = {
            pId: RendomId(),
            pName: productName,
            pPrice: productPrice,
            pDetails: productDetails,
            pSellingPrice: sellingPrice,
            pQuantity: productQuantity,
            pSelflife: productSelflife,
            pAvailable: productAvailable,
            pCategory: productCategory,
            pImage: productImage,
        }
        setIsShowPreviewModal(false)
        setSubmittedData([...submittedData, productDataInfo])
        console.log("productDataInfo", productDataInfo);

        setProductName("")
        setProductPrice("")
        setProductDetails("")
        setProductSelflife("")
        setSellingPrice("")
        setProductQuantity("")
        setProductCategory("")
        setProductAvailable(false)
        setProductImage("")
        localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify([...submittedData, productDataInfo]))
        toast.success("Product Added successfully", {
            autoClose: 3000,
        });


        // setTimeout(() => {
        //     navigate("/admin");
        // }, 3000);

    }

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(KEY_PRODUCT_DATA))
        if (savedData) {
            setSubmittedData(savedData)
            console.log("savedData", savedData);

        }
    }, [])
    console.log("submittedData", submittedData);
    // const onSetImage = (event) => {
    //     const file = event.target.files[0]
    //     if (file) {
    //         const fileURL = URL.createObjectURL(file);
    //         setProductImage(fileURL)
    //         console.log("productImage", productImage);
    //     }
    // }

    console.log("productAvailable", productAvailable);
    const formMain = {
        backgroundImage: "url(https://image.freepik.com/free-photo/dairy-products-black-wooden-background-top-view_88281-3088.jpg)",
        width: "100%",
        height: "100vh",
        // overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        position: "relative"
    }
    return (

        <div style={formMain} >
            <div>
                <Link to="/admin" className='btn btn-info position-absolute bi bi ' style={{ top: "50px", left: "100px" }}>Back</Link>
            </div>
            <div className='d-flex justify-content-center '>
                <div className='w-50 p-1  mt-4 text-light mx-auto border bg-transpatant rounded  '>
                    {/* ------------------------form------------------ */}
                    <h1 className='text-center'>Product Form</h1>
                    <form className='form_style'>
                        <div>
                            <label >Product Name:</label>
                            <input
                                required
                                className='form-control'
                                type="text"
                                id="productName"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className='d-flex gap-4'>
                            <div>
                                <label >Product Price:</label>
                                <input
                                    required
                                    className='form-control num-text'

                                    type="number"
                                    id="productPrice"
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label >Selling Price:</label>
                                <input

                                    required
                                    className='form-control num-text'

                                    type="number"
                                    id="sellingPrice"
                                    value={sellingPrice}
                                    onChange={(e) => setSellingPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <label > Product Quantity:</label>
                                <input
                                    required
                                    className='form-control w-50 num-text'
                                    type="number"
                                    id="productQuantity"
                                    value={productQuantity}
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                />
                            </div>
                            <div className=''>
                                <label>
                                    Select Category:

                                </label>
                                <select className='form-control rounded' value={productCategory} onChange={handleDropdownChange}>
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
                            <div className='mx-5'>
                                <label >Product Availability:</label>
                                <input

                                    className='form-check-input'
                                    type="checkbox"
                                    id="productAvailable"
                                    checked={productAvailable}
                                    onChange={(e) => setProductAvailable(e.target.checked)}
                                />
                            </div>
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
                            <label >Product ShelfLife:</label>
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
                                // type="file"
                                // accept="image/*"
                                value={productImage}
                                id="productImage"


                                onChange={(e) => setProductImage(e.target.value)}
                            />
                            <img className='p-2 rounded' width={50} src={productImage} alt="" />

                        </div>
                        <button className='btn btn-primary w-100 '
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={onPreview}

                        >
                            Preview</button>
                        {/* <OnPreview
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         setIsFormValid={setIsFormValid}
                         setIsShowPreviewModal={setIsShowPreviewModal}
                          /> */}

                        {/* -------------------------modal-----u----------------------- */}
                        <div class="modal fade text-dark" id={isShowPreviewModal?"staticBackdrop":""} data-bs-backdrop="static" data-bs-keyboard={false} tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="">Product Preview</h1>

                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <dl className='d-flex gap-5'>
                                            <dt>Prducts Name:</dt>
                                            <dd>{productName}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product productCategory:</dt>
                                            <dd>{productCategory}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product Price:</dt>
                                            <dd>${productPrice}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Selling Price:</dt>
                                            <dd>${sellingPrice}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product Quantity:</dt>
                                            <dd>{productQuantity}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Stock:</dt>
                                            <dd>{productAvailable === true ? "InStock" : "OutOfStock"}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product Details:</dt>
                                            <dd>{productDetails}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product ShelfLife:</dt>
                                            <dd>{productSelflife}</dd>
                                        </dl>
                                        <dl className='d-flex gap-5'>
                                            <dt>Product Image:</dt>
                                            <dd><img src={productImage} width={50} /></dd>
                                        </dl>

                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={onCloseModal} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit Product</button>

                                        <button onClick={onSaveProduct} type="button" data-bs-dismiss="modal" class="btn btn-primary">Save And Add more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <ToastContainer />
                </div>
            </div>


        </div>


    )
}

export default AddProductPage