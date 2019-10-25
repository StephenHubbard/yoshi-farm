import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <header>
            <h1>Yoshi's Isle!</h1>
                <nav>
                <Link to="/">
                    <div className="nav-btn">
                        Yoshi's Isle
                    </div>
                </Link>
                <Link to="/nest">
                    <div className="nav-btn">
                        Yoshi Nest!
                    </div>
                </Link>
                </nav>
        </header>
    )
}

export default Header