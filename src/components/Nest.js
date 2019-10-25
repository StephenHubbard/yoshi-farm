import React, {Component} from 'react';
import './Nest.css';
import axios from 'axios';


export default class Catcher extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            img: "egg.png",
            color: ''
        }
    }

    componentDidMount() {
        this.setState({
            img: "egg.png"
        })
    }

    sendToIsle() {
        axios.post('/api/yoshi', this.state)
        .then(res => {
            this.componentDidMount()
        })
    }

    hatchEgg() {
         const randomNum = Math.ceil(Math.random() * 3)
        
        if (randomNum === 1) {
            this.setState({
                color: "green", 
                img: "greenyoshi.png"
            })
        } else if (randomNum === 2) {
            this.setState({
                color: "blue", 
                img: "blueyoshi.png"
            })
        } else if (randomNum === 3) {
            this.setState({
                color: "red", 
                img: "redyoshi.png"
            })
        }
    }


    render() {
        return (
            <div className="nest">
                <h3 className="title">Yoshi Nest</h3>
                <h4>Click to Hatch!</h4>
                <img src={this.state.img} alt="Yoshi Egg"/>
                <hr />
                <button className="nav-btn" onClick={() => this.hatchEgg()}>Hatch Egg!</button>
                <button className="nav-btn" onClick={() => this.componentDidMount()}>New Egg!</button>
                <hr />
                <button className="nav-btn" onClick={() => this.sendToIsle()}>Send to Yoshi's Isle</button>
            </div>
        )
    }
}    