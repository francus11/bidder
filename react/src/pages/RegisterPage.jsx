import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function RegisterPage() {
    return (
        <Layout>
            <form
                id="register-form"
                className="invisible"
                action="register"
                method="POST"
            >
                <div className="form-title">Register</div>
                <input
                    type="text"
                    name="login"
                    className="login-input"
                    placeholder="Username"
                />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input
                    type="password"
                    name="password_repeat"
                    placeholder="Repeat password"
                />
                <div className="form-buttons">
                    <button className="focused" type="submit">
                        Register
                    </button>
                    <Link to={"/login"}>
                        <button id="login-swap-button" type="button">
                            Login
                        </button>
                    </Link>
                </div>
            </form>
        </Layout>
    );
}

export default RegisterPage;
