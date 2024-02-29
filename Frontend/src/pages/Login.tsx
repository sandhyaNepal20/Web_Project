import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface DecodedToken {
    roles?: string[];
    // other token properties
}
import "../assets/css/Login.css";





const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { handleSubmit } = useForm<FormData>();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8082/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const { token, userId } = await response.json();
                localStorage.setItem('token', token);
                localStorage.setItem("userId",userId)

                // Decode the token to get user roles
                const decodedToken: DecodedToken = parseJwt(token);
                console.log('Decoded Token:', decodedToken);

                // Check if the user has the 'admin' role
                if (decodedToken.roles && decodedToken.roles.includes('admin')) {
                    navigate(`/admin/products`);
                } else {
                    navigate(`/dashboard`);
                }

                // Show success message
                toast.success('Login successful!');
            } else {
                console.error('Login failed');
                toast.error('Please check your Details.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login.');
        }
    };

    // Function to decode JWT token without external libraries
    const parseJwt = (token: string) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
                .join('')
        );

        return JSON.parse(jsonPayload) as DecodedToken;
    };

    return (
        <div className={"login-container"}>
            <div className={"login-form"}>
                <div className={"login-header"}>
                    <div className={"login-logo"}>
                        <img
                            src={"images/Teddy.png"}
                            alt={"loginlogo"}
                        />
                    </div>
                    <div className={"login-text"}>
                        <h1>Login</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit(handleLogin)}>
                <div className={"login-body"}>
                    <input type={"text"} placeholder={"Email"}  value={email}
                           onChange={(e) => setEmail(e.target.value)} />

                    <input type={"password"} placeholder={"Password"}  value={password}
                           onChange={(e) => setPassword(e.target.value)}/>


                </div>
                <div className={"login-footer"}>
                    
                    <div className={"login-btn"}>
                        <button type="submit">Login</button>
                    </div>
                    <div className={"login-link"}>
                        <label>Don't have an account?</label> <Link to="/register">Register</Link>
                    </div>
                </div>
                </form>
            </div>
            <ToastContainer/>



        </div>
    );
};

export default Login;
