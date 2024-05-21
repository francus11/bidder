import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Patterns  from "./pages/PatternsPage.jsx";

ReactDOM.createRoot(document.querySelector("body")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MainPage}></Route>
                <Route path="/patterns" Component={Patterns}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
