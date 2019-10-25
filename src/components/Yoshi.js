import React, { Component } from 'react'
import './Yoshi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'



export default class Yoshi extends Component {
    constructor() {
        super()

        this.state = {
            mushToggle: false,
        }
    }

    toggleMushroom() {
        this.setState({
            mushToggle: !this.state.mushToggle
        })
        console.log(this.state.mushToggle)
    }

    render() {
        return (
            <div className="yoshi">
                <button onClick={() => this.props.releaseYoshiFn(this.props.yoshiObj.id)}>
                    <div className="bomb">
                        <FontAwesomeIcon icon={faBomb} size="2x"/>
                    </div>    
                </button>

                {this.state.mushToggle ? (
                <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                    <img className="mushroom" src="./assets/poisinmushroom.png" />
                </button>
                ) : 
                <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                    <img className="mushroom" src="./assets/mushroom.png" />                
                </button>                
                }
                <img src={this.props.yoshiObj.img} alt="Yoshi Image" />
            </div>
        )
    }
}