import "../assets/css/Cart.css";
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Cart: React.FC = () => {
    const calculateSubtotal = () => {
        // Assuming data is an array of items with a property itemTotalPrice
        const subtotal = data?.data.reduce((acc, item) => acc + (item.quantity * item.item.itemPerPrice), 0);
        return subtotal || 0;
    };

    const calculateGrandTotal = () => {
        // Assuming delivery charge is a fixed value of Rs. 200
        const deliveryCharge = 100;
        const grandTotal = calculateSubtotal() + deliveryCharge;
        return grandTotal || 0;
    };
    const userId = localStorage.getItem("userId");

    const {data,refetch}=useQuery({
        queryKey:["GET_Cart-ITEM_BY_USERID",userId],
        queryFn(){
            return axios.get(`http://localhost:8082/cart/getByUserId/${userId}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })

    const deleteApi = useMutation({
        mutationKey: ["DELETE-CART_ITEM"],
        mutationFn(id: number) {
            return axios.delete("http://localhost:8082/cart/deleteById/"+id, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        },
        onSuccess() {
            refetch();
            setTimeout(() => {
                toast.success('Item removed successfully!');
            }, 0);
        },
        onError(error) {
            toast.error(`Error deleting category: ${error.message}`);
        },
    });
    const handleDelete = (id: number) => {
        confirmAlert({
            title: (
                <div style={{ fontSize: '16px' }}>
                    Remove from cart
                </div>
            ),
            message: (
                <div style={{ fontSize: '14px' }}>
                    Are you sure you want to delete this item?
                </div>
            ),
            buttons: [
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Cancel
                        </div>
                    ),
                    onClick: () => {
                        // No action on cancel or you can add a cancel action if needed
                    }
                },
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Confirm
                        </div>
                    ),
                    onClick: () => deleteApi.mutate(id)

                }
            ]
        });
    };


    const checkoutApi=useMutation({
        mutationKey:["CHECKOUT_API"],
        mutationFn(payload){
            return axios.post("http://localhost:8082/order/saveAll",payload,{
                headers:{
                    "authorization":"Bearer "+localStorage.getItem("token")
                }
            })
        }
    })
    const [paymentMethodVisible, setPaymentMethodVisible] = useState(false);

    const handleCheckoutClick = () => {
        // Toggle the visibility of the payment method section
        setPaymentMethodVisible(!paymentMethodVisible);
    };


    const handleCheckout=(data)=>{

       let date =new Date()
console.log(data)
       const payload= data.map(i=>{
            return {
                userId:localStorage.getItem("userId"),
                itemId:i?.item?.id,
                deliveryStatus:"pending",
                deliveryTime:date.getTime(),
                deliveryDate: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                quantity:i?.quantity,
                size:i?.size,
                color:i?.color
            }
        })

        checkoutApi.mutate(payload,{
            onSuccess(res){
                console.log(res)
                window.location.href="/dashboard"
            },
            onError(err){
                console.log(err)
        }
        })

    }


    return (

        <div className={"c-container"}>
            <div className={"c-header"}>

                <div className={"c-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>

                <div className={"c-btn_before"}>
                    <Link to="/dashboard" className="link-button">
                        <button>Home</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>
                <div className={"c-btn-wrapper"}>
                    <button>Cart</button>
                    <Link to="/myaccount" className="link-button">
                        <button>Profile</button>
                    </Link>
                    <Link to="/">
                        <button> Log Out</button>
                    </Link>

                </div>
            </div>
            <div className={"c-body"}>
                <div className={"c-container"}>
                    <div className={"c-title"}>
                        <h2>My Cart</h2>
                    </div>

                    {data?.data.length > 0 ? (
                        <div className={"c-table"}>
                            <table>
                                <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.data.map((i) => (
                                    <tr key={i.id}>
                                        <td>
                                            <img src={"data:image/png;base64, " + i?.itemImage} width={100}
                                                 alt={i?.itemName}/>
                                        </td>
                                        <td><p>{i?.item.itemName}</p></td>
                                        <td><p>{i?.item.itemDescription}</p></td>
                                        <td><p>Rs. {i?.item.itemPerPrice}</p></td>
                                        <td><p>{i?.color}</p></td>
                                        <td><p>{i?.size}</p></td>
                                        <td><p>{i?.quantity}</p></td>
                                        <td><p>Rs. {i?.quantity * i?.item.itemPerPrice}</p></td>
                                        <td>
                                            <button className={"c-delete"} onClick={() => handleDelete(i?.id)}><i
                                                className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    ) : (
                        <div className={"no-item"}>
                            <img src={"../images/empty-cart.png"} alt={"empty-cart"} width={100}/>
                            <p>There are no items in your cart.</p>
                            <Link to="/dashboard">
                                <button>Continue Shopping</button>
                            </Link>
                        </div>
                    )}
                    {data?.data.length > 0 && (
                        <div className={"bill"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Subtotal:</th>
                                    <td><p>Rs. {calculateSubtotal()}</p></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <th>Delivery Charge:</th>
                                    <td>Rs.100</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="highlighted-row">
                                    <th>Grand Total:</th>
                                    <td>Rs. {calculateGrandTotal()}</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className={"proceed"}>
                                    <th></th>
                                    <td>
                                        <button onClick={() => handleCheckout(data?.data)}>Check Out</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <ToastContainer autoClose={4000}/>
                </div>
            </div>
            <div className={"db-footer"}>
                <div className={"home-about-us"}>
                    <h1>Teddy's Collection</h1>
                </div>

                <div className={"home-logos"}>
                    <span>Follow Us</span>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/sandhya.nepal.338"
                           target="_blank" rel="noopener noreferrer">
                            <img
                                width={43}
                                src={"images/fb.png"}
                                alt="Facebook"
                            />
                        </a>

                        <a href="https://www.instagram.com/sandhyanepal94/"
                           target="_blank" rel="noopener noreferrer">
                            <img
                                width={43}
                                src={"images/insta.png"}
                                alt="Instagram"
                            />
                        </a>
                    </div>


                </div>

                <div className={"db-get-help"}>
                    <h1>GET HELP</h1>
                    <p>Email : nsandhya192@@gmail.com</p>
                    <p>Contact Number : 9810092826</p>
                    <span>@2024 Teddy's Collection Pvt. Ltd. All Rights Reserved</span>
                </div>
            </div>
        </div>

    );
};

export default Cart;
