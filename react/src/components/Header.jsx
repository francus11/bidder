import { Link } from 'react-router-dom';

import logosmall from '../assets/logo_white.png';

import '../styles/components/Header.scss'

function Header() {
    return (
        <header>
            <div className="header-box">
                <div id="header-square-left" className="header-square">
                    <img src={logosmall} alt="logo-small" />
                </div>
                <div id="links">
                    <Link to="/favourite">Favourite</Link>
                    <Link to="/patterns">Patterns</Link>
                    <Link to="/account">Account</Link>
                </div>
                <div id="header-square-right" className="header-square"></div>
            </div>
        </header>
    );
}

export default Header;
