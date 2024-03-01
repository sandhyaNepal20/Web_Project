import React from 'react';
import "../assets/css/Contactus.css";
import {Link} from "react-router-dom";
const Contactus: React.FC = () => {
    return (
        <div className={"ct-container"}>
            <div className={"ct-header"}>

                <div className={"ct-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"ct-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus">
                        <button>Contact Us</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>

                <div className={"ct-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"}/>
                </div>
                <div className={"ct-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"ct-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to="/Myaccount">
                        <button>My Account</button>
                    </Link>
                    <Link to="/">
                        <button>Sign Out</button>
                    </Link>

                </div>


            </div>
            <div className={"ct-body"}>
                <h1>Contact Us</h1>
                <div className={"ct-address"}>
                    <i className="fa-solid fa-location-pin"></i>
                    <span>Kathmandu, Nepal</span>
                </div>
                <div className={"ct-mail"}>
                    <i className="fa-solid fa-envelope"></i>
                    <span>lugahub2024@gmail.com</span>
                </div>
                <div className={"ct-phone"}>
                    <i className="fa-solid fa-phone"></i>
                    <span>9860929065</span>
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

export default Contactus;
