import React from 'react'
import { toast } from 'react-toastify';

const OnPreview = ({ setIsFormValid, setIsShowPreviewModal }) => {
    console.log("setIsFormValid", { setIsFormValid });
    const validateForm = () => {
        console.log("productImage", productImage);

        return (
            productName.trim() !== '' &&
            productPrice !== '' &&
            sellingPrice !== '' &&
            productQuantity !== '' &&
            productSelflife.trim() !== '' &&
            productImage !== ''
             
        )
    }
    const onPreview = () => {
        e.preventDefault();
        const isValid = validateForm();
        setIsFormValid(isValid);

        if (isValid) {
            setIsShowPreviewModal(true);
        } else {
            toast.error("Please fill in all required fields.", {
                autoClose: 3000,
            });
        }
    }
    return (
        <button className='btn btn-primary w-100 '
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={onPreview}

        >
            Preview</button>
    )
}

export default OnPreview