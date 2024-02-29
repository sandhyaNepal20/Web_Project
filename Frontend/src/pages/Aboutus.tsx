import React from 'react';
import "../assets/css/Aboutus.css";
import {Link} from "react-router-dom";

const Aboutus: React.FC = () => {
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>

                <div className={"au-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"au-btn_before"}>
                    <Link to="/dashboard" className="link-button">
                        <button> Home</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>
                <div className={"au-btn-wrapper"}>
                    <Link to={"/cart"}>
                        <button> Cart</button>
                    </Link>
                    <Link to="/myaccount" className="link-button">
                        <button>Profile</button>
                    </Link>
                    <Link to="/">
                        <button> Log Out</button>
                    </Link>


                </div>

            </div>
            <div className={"au-body"}>
                <h1>About Us</h1>

                <h2>Welcome to Teddy's Collection at Sandhya's Shop </h2>
                <p>At Teddy's Collection, we take immense pride in curating a delightful assortment of teddy bears that
                    are sure to capture your heart.</p>
                <h2>Cash on Delivery</h2>
                <p>Passionate about spreading joy and warmth through these fluffy friends, Teddy's Collection offers a
                    diverse range of teddy bears to suit every taste and occasion. Whether you're looking for a charming
                    gift for a loved one or a delightful addition to your own collection, we have the perfect teddy bear
                    waiting for you. That's why we offer the convenience of Cash on Delivery (COD) for your peace of
                    mind. With COD, you can shop with confidence, knowing that you only pay when your order reaches your
                    doorstep.</p>
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

export default Aboutus;
