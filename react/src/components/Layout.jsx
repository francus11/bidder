import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components/Layout.scss";

function Layout({ children }) {
    return (
        <>  <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout