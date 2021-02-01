import React from 'react';
import './Navbar.styles.css';

function Navbar() {
    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Neflix logo" />
        </div>
    )
}

export default Navbar;
