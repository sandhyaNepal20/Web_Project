// Dashboard.tsx
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import "../assets/css/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";
import React, {useState} from "react";

function Dashboard() {
    const navigate=useNavigate();

    const {data}=useQuery({
        queryKey:["GET_Dashboard_ITEM_ALL"],
        queryFn(){
            return axios.get("http://localhost:8082/item/getAll", {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })

    const [searchData, setSearchData] = useState();
    const { data: searchByName, refetch } = useQuery({
        queryKey: ["SEARCHBYNAME"],
        queryFn: () => {
            return axios.get("http://localhost:8082/item/searchByName/" + searchData, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        enabled: false, // Set to false initially
    });

    const handleSearch = () => {
        // Trigger the query when the search button is clicked
        refetch();
    };


    console.log(data?.data)
    return (
        <div className={"db-container"}>
            <div className={"db-header"}>

                <div className={"db-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"db-btn_before"}>
                    <Link to="/dashboard" className="link-button">
                        <button>Home</button>
                    </Link>
                    <Link to="/Aboutus">
                        <button>About Us</button>
                    </Link>
                </div>
                <div className={"db-btn-wrapper"}>
                    <Link to={"/cart"}>
                        <button>Cart</button>
                    </Link>
                    <Link to="/myaccount" className="link-button">
                        <button>Profile</button>
                    </Link>
                    <Link to="/">
                        <button onClick={() => {
                            localStorage.clear();
                            window.location.href = "/login"
                        }}>Sign Out
                        </button>
                    </Link>
                </div>

                <div className={"s-searchbar"}>
                    <input
                        type={"text"}
                        placeholder={"Search Teddy's"}
                        onChange={(e) => {
                            setSearchData(e.target.value);
                        }}
                    />
                </div>
                <div className={"s-search_button"}>
                    <button type="submit" onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>


            </div>
            <div className={"db-body"}>
                <div className={"db-dash1"}>
                    <div className={"db-img-dash1"}>
                        <img
                            className="d-block w-100"
                            src="images/b1.jpg"
                            alt="Pic"
                        />
                    </div>


                    <div className={"db-product-dash1"}>
                        {searchData && searchByName?.data && searchByName.data.length > 0 ? (
                            searchByName.data.map((i) => (
                                <div onClick={() => {
                                    navigate("/products/" + i?.id)
                                }} className={"item-section"} key={i.itemId}>
                                    <div className={"item-image"}>
                                        <img src={"data:image/png;base64, " + i?.itemImage} width={100}
                                             alt={i?.itemName}/>
                                    </div>

                                    <div className={"item-info"}>
                                        <p>{i?.itemName}</p>
                                        <p>{i?.itemDescription}</p>
                                    </div>
                                    <div className={"item-desc"}>
                                        <div className={"item--desc-detail"}>
                                            <p>Rs.{i?.itemPerPrice}</p>
                                        </div>
                                        <div className={"item-quantity"}>
                                            <p>Stock:({i?.itemQuantity})</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            searchData ? (
                                <div className={"product-not-found-message"}>
                                    <p>Product not found.</p>
                                </div>
                            ) : (
                                data?.data.length > 0 ? (
                                    data?.data.slice(0, 12).map((i) => (
                                        <div onClick={() => {
                                            navigate("/products/" + i?.id)
                                        }} className={"item-section"} key={i.itemId}>
                                            <div className={"item-image"}>
                                                <img src={"data:image/png;base64, " + i?.itemImage} width={100}
                                                     alt={i?.itemName}/>
                                            </div>

                                            <div className={"item-info"}>
                                                <p>{i?.itemName}</p>
                                                <p>{i?.itemDescription}</p>
                                            </div>
                                            <div className={"item-desc"}>
                                                <div className={"item--desc-detail"}>
                                                    <p>Rs.{i?.itemPerPrice}</p>
                                                </div>
                                                <div className={"item-quantity"}>
                                                    <p>Stock:({i?.itemQuantity})</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className={"product-not-found-message"}>
                                        {searchData && <p>Product not found.</p>}
                                    </div>
                                )
                            )
                        )}
                    </div>


                </div>
                {/* <div className={"db-dash2"}>
                    <div className={"db-product-dash2"}>
                        {data?.data.slice(12).map((i) => (
                            <div onClick={() => { navigate("/products/" + i?.id) }} className={"item-section"} key={i.itemId}>
                                <div className={"item-image"}>
                                    <img src={"data:image/png;base64, " + i?.itemImage} width={100} alt={i?.itemName} />
                                </div>

                                <div className={"item-info"}>
                                    <p>{i?.itemName}</p>
                                    <p>{i?.itemDescription}</p>
                                </div>
                                <div className={"item-desc"}>
                                    <div className={"item--desc-detail"}>
                                        <p>Rs.{i?.itemPerPrice}</p>
                                    </div>
                                    <div className={"item-quantity"}>
                                        <p>Stock:({i?.itemQuantity})</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div> */}
                {/* </div> */}
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
}

export default Dashboard;
