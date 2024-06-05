import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// import styles from "../styles/pages/LoginPage.module.scss";
import "../styles/pages/LoginPage.scss";
import config from "../config";

import { Helmet } from "react-helmet";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlepasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();

    const postLogin = (event) => {
        event.preventDefault();
        axios({
            url: config.apiUrl + "/api/auth/authenticate",
            method: "POST",
            headers: {},
            data: {
                username: username,
                password: password,
            },
        })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate("/patterns");
            })
            .catch((e) => {
                if (e.response && e.response.status === 403) {
                    document.getElementsByClassName("login-error")[0].innerHTML = "Wrong username or password";
                    document.getElementsByClassName("login-error")[0].style.display = 'block';
                    document.getElementsByName("password")[0].value = "";
                    setPassword("");
                }
            });
    };

    const handleLoginSubmit = (event) => {
        if (username === "" || password === "") {
            event.preventDefault();
            document.getElementsByClassName("login-error")[0].innerHTML = "Type login and password";
            document.getElementsByClassName("login-error")[0].style.display = 'block';
        } else {
            postLogin(event);
        }
    };

    return (
        <Layout mainClass="login-register" checkLogin={false}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <form
                id="login-form"
                className="visible"
                onSubmit={handleLoginSubmit}
            >
                <div className="form-title">Login</div>
                <div className="error-text login-error"></div>
                <input
                    type="text"
                    name="login"
                    className="login-input"
                    placeholder="Username"
                    onChange={handleUsernameChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlepasswordChange}
                />

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
