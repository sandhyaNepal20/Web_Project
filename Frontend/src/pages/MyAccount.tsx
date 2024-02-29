import React, { useEffect, useState } from 'react';
import "../assets/css/MyAccount.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const MyAccount: React.FC = () => {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState<any>({});

    // Fetch user details when the component mounts
    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            // Retrieve user ID from local storage
            const userId = localStorage.getItem('userId');

            if (userId) {
                // Fetch user details by ID using your API endpoint
                const response = await axios.get(`http://localhost:8082/user/getById/${userId}`);

                // Set the user details in the state
                setUserDetails(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    return (
        <div className={"myaccount-container"}>
            <div className={"myaccount-header"}>
                <div className={"myaccount-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"myaccount-btn_before"}>
                    <Link to="/dashboard" className="link-button">
                        <button>Home</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>
                <div className={"myaccount-btn-wrapper"}>
                    <Link to={"/cart"}>
                        <button>Cart</button>
                    </Link>
                    <Link to="/myaccount" className="link-button">
                        <button>Profile</button>
                    </Link>
                    <Link to="/" className="logout-link">
                        <button> Log Out</button>
                    </Link>
                </div>
                {/* <div className={"myaccount-searchbar"}>
                    <input type={"text"} placeholder={"Search Bags"} />
                </div>
                <div className={"myaccount-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div> */}

            </div>

            <div className={"myaccount-body"}>
                <div className={"myaccount-profile-second"}>

                    <div className={"myaccount-section2"}>
                        <div className={"myaccount-section1"}>
                            <h3>My profile</h3>
                        </div>
                        <div className={"myaccount-info"}>
                            <div className={"myaccount-part1"}>
                                <div>
                                    <label><i className="fa-solid fa-user user-icon"></i>First Name:</label>
                                    <input type="text" value={userDetails.firstName} readOnly/>
                                </div>
                                <div>
                                    <label> <i className="fa-solid fa-user user-icon"></i>Last Name:</label>
                                    <input type="text" value={userDetails.lastName} readOnly/>
                                </div>
                                <div>
                                    <label> <i className="fa-solid fa-envelope email-icon"></i>Email Address:</label>
                                    <input type="text" value={userDetails.email} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className={"myaccount-buttons"}>
                            <Link to="/EditProfile" className="link-button">
                                <button><i className="fa-solid fa-edit edit-icon"></i>Edit Profile</button>
                            </Link>
                        </div>
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

export default MyAccount;