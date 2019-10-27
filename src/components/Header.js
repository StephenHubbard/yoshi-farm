import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <header>
            <Link to ="/">
                <img className="header-logo" src="./assets/yoshiIslandLogo.png" alt="alt" />
            </Link>
                <nav>
                <Link to="/isle">
                    <div className="">
                        Yoshi Isle
                    </div>
                </Link>
                <Link to="/nest">
                    <div className="nest-btn">
                        Yoshi Nest
                    </div>
                </Link>
                <Link to="/mushroomkingdom">
                    <div className="">
                        Mushroom Kingdom
                    </div>
                </Link>
                </nav>
        </header>
    )
}

export default Header