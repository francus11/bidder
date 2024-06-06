import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components/Layout.scss";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Layout({ children , mainClass, checkLogin = true}) {
    
    const navigate = useNavigate();

    useEffect(() => { // Wywołaj navigate() wewnątrz useEffect()
        const checkLoginValidity = (token) => {
            if (!token) return false;
            
            try {
              const decoded = jwtDecode(token);
              const currentTime = Date.now() / 1000;
          
              if (decoded.exp < currentTime) {
                // Token has expired
                return false;
              } else {
                // Token is valid
                return true;
              }
            } catch (e) {
              // Invalid token
              return false;
            }
        };

        if (checkLogin && !checkLoginValidity(localStorage.getItem("token"))) {
            navigate("/login");
        }
    }, [checkLogin, navigate]);

    return (
        <>  <Header/>
            <main className={mainClass}>{children}</main>
            <Footer/>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
    mainClass: PropTypes.string,
    checkLogin: PropTypes.bool,
};

export default Layout