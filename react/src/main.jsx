import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Patterns  from "./pages/PatternsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NewPatternPage from "./pages/NewPatternPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";

ReactDOM.createRoot(document.querySelector("body")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MainPage}></Route>
                <Route path="/patterns" Component={Patterns}></Route>
                <Route path="/login" Component={LoginPage}></Route>
                <Route path="/register" Component={RegisterPage}></Route>
                <Route path="/new-pattern" Component={NewPatternPage}></Route>
                <Route path="/results" Component={ResultsPage}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
