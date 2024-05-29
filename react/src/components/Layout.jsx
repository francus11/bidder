import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components/Layout.scss";

function Layout({ children , mainClass}) {
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
};

export default Layout