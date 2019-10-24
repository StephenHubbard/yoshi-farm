import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Yoshi Farm!</h1>
            <nav>
                <Link to="/">Farm</Link>
                <div></div>
                <Link to="/nest">Nest</Link>
            </nav>
        </header>

    )
}

export default Header