import React, {Component} from 'react';
import "./Starhill.css";

export default class Starhill extends Component {
    

    render() {
        return (
            <div className="star-hill">
                <h1>Starhill Page</h1>
                <h1>{this.state.coinAmountStarHill}</h1>
                <div className="coin-container">
                    <button className="coin-btn" onClick={() => this.handleCoinAmount()}>
                        <img className="coinbox" src="./assets/coinbox.png" alt="coin" />
                    </button>
                </div>
            </div>
        ) 
    }
}

