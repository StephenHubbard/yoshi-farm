import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import CoinTracker from './CoinTracker';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    
    render() {        
        return (
            <header>
                <Link to ="/">
                    <img className="header-logo" src="./assets/yoshiIslandLogo.png" alt="logo" />
                </Link>

                    {/* <CoinTracker /> */}

                    <nav>
                        <Link to="/isle">
                            <li className="">
                                Yoshi Isle
                            </li>
                        </Link>
                        <Link to="/nest">
                            <li className="nest-btn">
                                Yoshi Nest
                            </li>
                        </Link>
                        <Link to="/mushroomkingdom">
                            <li className="">
                                Mushroom Kingdom
                            </li>
                        </Link>
                        <li className="new-li">
                        <FontAwesomeIcon className="warning-icon" icon={faBan} size="lg"/>
                            Warning: Not a mobile friendly site!  
                        <FontAwesomeIcon className="warning-icon" icon={faBan} size="lg"/>
                        </li>
                    </nav>
            </header>
        )
    }
}