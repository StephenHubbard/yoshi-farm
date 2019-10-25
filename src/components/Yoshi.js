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
        this.props.saveMushroomStatusFn(this.props.yoshiObj.id, {mushToggle: !this.props.yoshiObj.mushToggle})
    }

    render() {
        return (
            <div className="yoshi">
                <button onClick={() => this.props.releaseYoshiFn(this.props.yoshiObj.id)}>
                    <div className="bomb">
                        <FontAwesomeIcon icon={faBomb} size="2x"/>
                    </div>    
                </button>

                {this.props.yoshiObj.mushToggle ? (
                <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                    <img className="mushroom" src="./assets/poisinmushroom.png" alt="poisin mushroom" />
                </button>
                ) : 
                <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                    <img className="mushroom" src="./assets/mushroom.png" alt="mushroom" />                
                </button>                
                }
                <img src={this.props.yoshiObj.img} alt="Yoshi" />
            </div>
        )
    }
}