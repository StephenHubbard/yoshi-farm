import React, {Component} from 'react';
import './CoinTracker.css'

export default class CoinTracker extends Component {
    constructor() {
        super()

        this.state = {
            coinAmountHeader: 0,
        }
        this.handleCoinAmount = this.handleCoinAmount.bind(this);
    }

    handleCoinAmount() {
        this.setState({
            coinAmount: this.state.coinAmount + 1
        })
        console.log(this.state.coinAmount)
    }

    render() {
        return (
            <div className="coin-tracker-container">
                <span className="coin-count">
                    <img className="header-coin" src="./assets/coin.png" alt="coin" />
                    <h6>{this.state.coinAmountHeader}</h6>
                </span>
            </div>
        ) 
    }
}