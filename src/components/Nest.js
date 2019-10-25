import React, {Component} from 'react';
import './Nest.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default class Catcher extends Component {
    constructor() {
        super()
        
        this.state = {
            color: '',
            img: "egg.png",
        }
    }

    componentDidMount() {
        this.setState({
            img: "./assets/egg.png",
            color: '',
        })
    }

    sendToIsle() {
        if (this.state.color) {
            axios.post('/api/yoshiIsle', this.state)
            .then(res => {
                this.componentDidMount()
            }) 
        } else {
            alert("cannot send egg")
        }
    }

    sendToKingdom() {
        if (this.state.color) {
            axios.post('/api/yoshiKingdom', this.state)
            .then(res => {
                this.componentDidMount()
            })
        } else {
            alert("cannot send egg")
        }
    }

    hatchEgg() {
         const randomNum = Math.ceil(Math.random() * 5)
        
        if (randomNum === 1) {
            this.setState({
                color: "green", 
                img: "./assets/greenyoshi.png"
            })
        } else if (randomNum === 2) {
            this.setState({
                color: "blue", 
                img: "./assets/blueyoshi.png"
            })
        } else if (randomNum === 3) {
            this.setState({
                color: "red", 
                img: "./assets/redyoshi.png"
            })
        } else if (randomNum === 4) {
            this.setState({
                color: "pink", 
                img: "./assets/pinkyoshi.png"
            })
        } else if (randomNum === 5) {
            this.setState({
                color: "black", 
                img: "./assets/blackyoshi.png"
            })
        }
    }


    render() {
        return (
            <div className="nest">
                <h3 className="title">Yoshi Nest</h3>
                    <div className="three-el">


                    <div className="left-container">
                        <button className="side-icon" onClick={() => this.sendToIsle()}>
                            <div className="left-arrow">
                                <FontAwesomeIcon icon={faArrowLeft} size="4x"/>
                            </div>
                            <img className="yoshi-pic" src="./assets/yoshilogo.png" alt="yoshi logo"/>
                                <p className="left-text">Send to Yoshi Isle</p>
                        </button>
                    </div>


                        <img className="middle-pic" src={this.state.img} alt={this.state.color} />
                        <button className="side-icon" onClick={() => this.sendToKingdom()}>
                            <div className="right-arrow">
                                <FontAwesomeIcon icon={faArrowRight} size="4x"/>
                            </div>
                            <img className="castle-pic" src="./assets/castle.png" alt="castle" />
                                <p>Send to Mushroom Kingdom</p>
                        </button>
                    </div>

                    <div className="bottom-btns">
                        <button className="nav-btn" onClick={() => this.hatchEgg()}>Hatch Egg!</button>
                        <button className="nav-btn" onClick={() => this.componentDidMount()}>New Egg!</button>
                    </div>
            </div>
        )
    }
}    