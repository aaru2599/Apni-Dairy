import React from 'react'
import "../Cart/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateCartQuantity, } from './CartSlice'
import { Link } from 'react-router-dom'

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
            
            <div>
                <h2 className='d-flex m-5'>Cart</h2>
            </div>
            {
                cartData.length > 0 ? (
                    <div className='d-flex justify-content-around'>
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
                                                                    <div><span className='border  bg-$red-300 px-1 rounded'>Size: {product.pQuantity}</span></div>
                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <div>{product.pPrice}</div>
                                                                    <div><button className='btn bi bi-star'></button>
                                                                        <button>-</button><span>{product.count}</span>
                                                                        <button>+</button></div>
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
                        <div className='w-25'>
                            <div className='d-flex flex-column gap-1 align-items-center bg-white p-4'>
                                <div><h5 className='fw-bold'> SubTotal: &#8377;{newTotalPrice}</h5></div>
                                <div className='fs-6 text-secondary'>Free Shipping</div>
                                <div><button className='btn btn-warning'>Checkout <i className='bi bi-person-lock'></i></button></div>
                                <div> or <span className='text-primary'>Continue Shopping</span></div>
                            </div>
                        </div>
                    </div>
                ) : <div className='text-center'>
                    <h3>No Product available</h3>
                    <div><Link to="/products">Continue Sopping</Link></div>
                </div>
            }
        </div>
    )
}

export default CartLayout