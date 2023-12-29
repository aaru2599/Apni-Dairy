import React from 'react'
import "../Cart/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateCartQuantity, } from './CartSlice'
import { Link } from 'react-router-dom'
import Header from '../../../features/Header/Header'
import { ToastContainer, toast } from 'react-toastify'

const CartLayout = () => {
    const cartList = useSelector((state) => state.myCart)
    const dispatcher = useDispatch()
    const cartData = cartList.data
    console.log("cartData", cartData);
    const totalPrice = cartData.reduce((acc, item) => {
        return Number(acc) + (Number(item.pPrice) * Number(item.count))
    }, 0)
    const newTotalPrice = totalPrice - (totalPrice * 10) / 100
    console.log(newTotalPrice);

    const onClickProductRemove = (productId) => {
        const removeProduct = cartData.find((item) => item.pId === productId)
        console.log(removeProduct);
        const isCoonfirm = confirm(`Do you want to remove ${removeProduct.pName} product`)
        if (isCoonfirm) {
            
            dispatcher(removeFromCart(removeProduct))
                toast.warning(`${removeProduct.pName} Removed`,{
                    autoClose:1000
                }) 
            
        }
    }

    const onClickDecrease = (productId) => {
        const productToUpdate = cartData.find((item) => item.pId === productId);

        if (productToUpdate && productToUpdate.count > 0) {
            dispatcher(updateCartQuantity({ productId, quantity: productToUpdate.count - 1 }));
        }
    };

    const onClickIncrease = (productId) => {
        const productToUpdate = cartData.find((item) => item.pId === productId);

        if (productToUpdate) {
            dispatcher(updateCartQuantity({ productId, quantity: productToUpdate.count + 1 }));
        }
    };


    return (
        <div className='main-div'>
            <Header />

            <div  className='d-flex justify-content-center'>
                <div className='text-center  w-10 bg-success fs-2 fw-bold  rounded  my-3'>Cart</div>
            </div>
            {
                cartData.length > 0 ? (
                    <div className='d-flex p-4 justify-content-around'>
                        <div className='bg-white rounded p-2'>

                            <table className='p-1  table table-hover  ' style={{ width: "35rem" }}>

                                <tbody>
                                    {
                                        cartData.map((product) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <div className='fs-5 fw-bold'>{product.pName}</div>
                                                            <div className='text-secondary'>{product.pCategory}</div>
                                                        </div>
                                                        <div className='d-flex gap-4'>
                                                            <div ><img className='border bg-light object-fit-contain' src={product.pImage} width={100} height={100} alt="" /></div>
                                                            <div className='w-75 d-flex flex-column gap-3'>
                                                                <div className='d-flex justify-content-between flex-column gap-2'>
                                                                    <div className='text-body-secondary'>{product.pDetails}</div>
                                                                    <div><span className='border  bg-$red-300 px-1 rounded'>Size: {product.count}</span></div>
                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <div>&#8377; {product.pPrice}</div>
                                                                    <div><button className=' btn  bi bi-trash-fill text-body-secondary ' onClick={() => onClickProductRemove(product.pId)}></button>
                                                                        <button className=' btn  bi bi-dash-circle fw-bold' onClick={() => onClickDecrease(product.pId)}></button><span className='text-body-secondary'>{product.count}</span>
                                                                        <button className=' btn bi bi-plus-circle' onClick={() => onClickIncrease(product.pId)}></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>

                                {/* <tbody>

                                    {
                                        cartData.map((product => {
                                            return (
                                                <tr>
                                                    <th className='text-center' scope="row"><div>
                                                        <img className='' src={product.pImage} alt="img" width={60} height={60} /></div>
                                                        <div className='text-center'>{product.pName}</div>
                                                    </th>
                                                    <td className='text-center'>
                                                        <button className='btn ' onClick={() => onClickDecrease(product.pId)} >-</button> {product.count}
                                                        <button className='btn' onClick={() => onClickIncrease(product.pId)}>+</button>
                                                    </td>
                                                    <td className='text-center'>&#8377;{product.pPrice * product.count}</td>
                                                    <td className='text-center ' ><button className='btn bi bi-x-circle' onClick={() => onClickProductRemove(product.pId)}></button></td>
                                                </tr>
                                            )
                                        }))
                                    }
                                </tbody> */}
                                {/* <tfoot>
                                    <tr>
                                        <th className='text-center' scope="col">Discount</th>
                                        <th className='text-center' scope="col"></th>
                                        <th className='text-center' scope="col">10%</th>
                                        <th className='text-center' scope="col"></th>

                                    </tr>

                                </tfoot> */}
                            </table>
                        </div>
                        <div className='w-25 '>
                            <div className='d-flex rounded flex-column gap-1 align-items-center bg-white p-4'>
                                <table className=' table '>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div>Order Summary</div>
                                                <div>
                                                    {
                                                        cartData.map((item) => {
                                                            return (
                                                                <div className='d-flex justify-content-between' key={item.pId}>
                                                                    <div><span>{item.count}*</span><span>{item.pName}</span></div>
                                                                    <div>&#8377; {item.pPrice * item.count}</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>

                                                <div className='d-flex justify-content-between text-secondary'>
                                                    <div>Fast Delivery with</div>
                                                    <div>&#8377; 50</div>
                                                </div>
                                                <div>
                                                    <div ><span className='text-secondary bi bi-truck'></span> <span className='mx-1'>Ecom Express</span></div>
                                                    <div><span className='bi bi-geo-alt'></span><span className='text-secondary mx-2'>Deliver to </span> <span>Your Home</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex justify-content-between'>

                                                    <div>Total Amount:</div>
                                                    <div>&#8377; {totalPrice + 50}</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>Discount:</div>
                                                    <div>-10%</div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='d-flex justify-content-between'>
                                                <div>Total Payable Amount:</div>
                                                <div>{newTotalPrice}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className='btn btn-warning w-100'>CheckOut</button>
                                                <div className='text-center '>
                                                    <Link to={"/products"}>Continue Shopping</Link>

                                                </div>                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div><h5 className='fw-bold'> SubTotal: &#8377;{newTotalPrice}</h5></div>
                                <div className='fs-6 text-secondary'>Free Shipping</div>
                                <div><button className='btn btn-warning'>Checkout <i className='bi bi-person-lock'></i></button></div>
                                <div> or <span className='text-primary'>Continue Shopping</span></div> */}
                            </div>

                        </div>
                    </div>
                ) : <div className='text-center'>
                    <h3>No Product available</h3>
                    <div><Link to="/products">Continue Sopping</Link></div>
                </div>
            }
            <ToastContainer/>
        </div >
    )
}

export default CartLayout