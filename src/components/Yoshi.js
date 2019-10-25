import React, { Component } from 'react'
import './Yoshi.css';



export default class Yoshi extends Component {
    constructor() {
        super()

        this.state = {
            nickname: '',
        }
    }

    render() {
        return (
            <div className="yoshi">
                <img src={this.props.yoshiObj.img} alt="img" />
            </div>
        )
    }
}