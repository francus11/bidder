import {useRef} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import "../styles/pages/LoginPage.scss";
import config from "../config";



function LoginPage() {
    const username = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const postLogin = event => {
        console.log(username.current.value);
        console.log(password.current.value);
        event.preventDefault();
        axios({
            url: config.apiUrl + "/api/auth/authenticate",
            method: "POST",
            headers: {
                
            },
            data: {
                username: username.current.value,
                password: password.current.value
            }
        })
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate('/patterns');
        })
        .catch(e => {
            console.log(e);
        });
    };

    const handleLoginSubmit = event => {
        postLogin(event);
    }

    return (
        <Layout>
            <form
                id="login-form"
                className="visible"
                onSubmit={handleLoginSubmit}
            >
                <div className="form-title">Login</div>
                <input
                    type="text"
                    name="login"
                    className="login-input"
                    placeholder="Username"
                    ref={username}
                />
                <input type="password" name="password" placeholder="Password" ref={password}/>

                <div className="form-buttons">
                    <Link to={"/register"}>
                        <button id="register-swap-button" type="button">
                            Register
                        </button>
                    </Link>

                    <button className="focused" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </Layout>
    );
}
export default LoginPage;
