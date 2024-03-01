import React from 'react';
import "../assets/css/Myorders.css";
import {Link} from "react-router-dom";
const Myorders: React.FC = () => {
    return (
        <div className={"mo-container"}>
            <div className={"mo-header"}>

                <div className={"mo-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"mo-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>

                <div className={"mo-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"}/>
                </div>
                <div className={"mo-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"mo-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}>
                        <button><i className="fa-regular fa-heart"></i>Wishlist</button>
                    </Link>
                    <Link to="/Myaccount">
                        <button>My Account</button>
                    </Link>
                    <Link to="/">
                        <button>Sign Out</button>
                    </Link>


                </div>


            </div>
            <div className={"mo-body"}>
                <div className={"mo-profile-first"}>
                    <div className={"mo-manage-my-account"}>
                        <h1>Manage My Account</h1>
                        <Link to="/MyAccount">
                            <button>My profile</button>
                        </Link>
                    </div>
                    <div className={"mo-my-orders"}>
                        <h1>My Orders</h1>
                        <Link to="/Myorders">
                            <button>My Orders</button>
                        </Link>
                        <Link to="/Myreturns">
                            <button>My Returns</button>
                        </Link>
                        <Link to="/Mycancellation">
                            <button>My Cancellations</button>
                        </Link>


                    </div>


                </div>
                <div className={"mo-profile-second"}>
                    <div className={"mo-section1"}>
                        <h3>My orders</h3>

                    </div>
                    <div className={"mo-section2"}>
                        <label>There are no orders yet. </label>


                    </div>

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

export default Myorders;
