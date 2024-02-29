import React, { useEffect, useState } from 'react';
import "../assets/css/EditProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/dashboard.css";

const EditProfile: React.FC = () => {
    const [userDetails, setUserDetails] = useState<any>({});
    const [editedDetails, setEditedDetails] = useState({
        firstName: 'string',
        lastName: 'string',
        email: 'string',
    });

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const userId = localStorage.getItem('userId');

            if (userId) {
                const response = await axios.get(`http://localhost:8082/user/getById/${userId}`);
                setUserDetails(response.data);

                // Set the initial values for editing
                setEditedDetails({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                });
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedDetails({
            ...editedDetails,
            [name]: value,
        });
    };

    const saveChanges = async () => {
        try {
            // Assuming there's an API endpoint to update user details
            const userId = localStorage.getItem('userId');
            if (userId) {
                await axios.put(`http://localhost:8087/user/update/${userId}`, editedDetails);
                // Optionally, you can refetch the updated details
                fetchUserDetails();
                console.log('Changes saved successfully!');
            }
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };


    return (
        <div className={"ep-container"}>
            <div className={"ep-header"}>

                <div className={"ep-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"ep-btn_before"}>
                    <Link to="/dashboard" className="link-button">
                        <button>Home</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>

                </div>


                <div className={"ep-btn-wrapper"}>
                    <button>Cart</button>
                    <Link to="/Myaccount">
                        <button>My Account</button>
                    </Link>
                    <Link to="/">
                        <button>Sign Out</button>
                    </Link>


                </div>


            </div>
            <div className={"ep-body"}>
                <div className={"ep-profile-first"}>
                    <div className={"ep-manage-my-account"}>
                        <h1>Manage My Account</h1>
                        <Link to="/MyAccount">
                            <button>My profile</button>
                        </Link>
                    </div>


                </div>
                <div className={"ep-profile-second"}>
                    <div className={"ep-section1"}>
                        <h3>Edit profile</h3>

                    </div>
                    <div className={"ep-section2"}>
                        <div className={"ep-info"}>
                            <div className={"ep-part1"}>
                                <label>First Name:</label>
                                <input type={"text"} name="firstName" value={editedDetails.firstName}
                                       onChange={handleInputChange}/>
                            </div>
                            <div className={"ep-part1"}>
                                <label>Last Name:</label>
                                <input type={"text"} name="lastName" value={editedDetails.lastName}
                                       onChange={handleInputChange}/>
                            </div>
                            <div className={"ep-part1"}>
                                <label>Email Address:</label>
                                <input type={"text"} name="email" value={editedDetails.email}
                                       onChange={handleInputChange}/>
                            </div>

                        </div>
                        <div className={"ep-buttons"}>
                            <button onClick={saveChanges}>SAVE CHANGES</button>
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

export default EditProfile;
