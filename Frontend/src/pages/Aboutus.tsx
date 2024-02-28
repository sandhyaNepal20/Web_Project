import React from 'react';
import "../assets/css/Aboutus.css";
import { Link } from "react-router-dom";


const Aboutus: React.FC = () => {
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>
                {/* Header content remains the same */}
            </div>
            <div className={"au-body"}>
                <h1>About Sandhya's Cosmetic - Your Ultimate Beauty Destination</h1>
                <p>Welcome to Sandhya's Cosmetic, where beauty meets convenience. At Sandhya's Cosmetic, we take pride in offering a curated selection of premium cosmetics and beauty products to enhance your natural charm.</p>
                <h2>Why Choose Sandhya's Cosmetic?</h2>
                <p>Discover the unique features that make Sandhya's Cosmetic the perfect choice for your online cosmetic shopping:</p>
                <h2>Extensive Cosmetic Collection:</h2>
                <p>Indulge in a wide range of cosmetics, skincare, and beauty essentials meticulously chosen to cater to your unique beauty needs. From makeup essentials to skincare treasures, we've got you covered.</p>
                <h2>Dedication to Customer Satisfaction:</h2>
                <p>Experience our unwavering commitment to 100% customer satisfaction. Our friendly support team is here to assist you, ensuring a delightful and personalized shopping experience.</p>
                <h2>Swift and Dependable Delivery:</h2>
                <p>Enjoy prompt and reliable delivery services across Nepal. Our order tracking system keeps you informed about the status of your purchase. Free delivery is available for our valued customers in Kathmandu.</p>
                <h2>Intuitive and User-Friendly Website:</h2>
                <p>Our easy-to-navigate website lets you explore and shop for your favorite cosmetics effortlessly. Accessible on various devices, it ensures a seamless and enjoyable shopping journey.</p>
                <h2>Affordable Beauty Solutions:</h2>
                <p>Embrace your beauty without breaking the bank. Sandhya's Cosmetic is dedicated to providing quality cosmetics at affordable prices. Take advantage of our exclusive discounts and deals.</p>
                <h2>Hassle-Free Returns and Secure Payments:</h2>
                <p>Shop with confidence with our flexible 'refund or replace' returns policy and secure payment options. Your peace of mind is our priority.</p>
                <h2>Stay Beautiful with Sandhya's Cosmetic:</h2>
                <p>Explore the latest beauty trends and essentials with Sandhya's Cosmetic. It's not just an online cosmetic shop; it's your ultimate destination to stay beautiful and confident.</p>
            </div>
            <div className={"au-footer"}>
                {/* Footer content remains the same */}
            </div>
        </div>
    );
};

export default Aboutus;
