import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";

export default class Home extends Component {

    render() {
        return (

            <div className="home-page">
                <h1>Home Page</h1>
                <Link to ="/starhill">
                    <img className="starhill" src="./assets/starhill.jpg" alt="star hill" />
                </Link>
            </div>
        ) 
    }
}
