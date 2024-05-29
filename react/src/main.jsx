import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Patterns  from "./pages/PatternsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

ReactDOM.createRoot(document.querySelector("body")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MainPage}></Route>
                <Route path="/patterns" Component={Patterns}></Route>
                <Route path="/login" Component={LoginPage}></Route>
                <Route path="/register" Component={RegisterPage}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
