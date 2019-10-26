import React, { Component } from 'react'
import './Yoshi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'



export default class Yoshi extends Component {
    constructor() {
        super()

        this.state = {
            mushToggle: false,
            shrinkToggle: false,
        }
    }

    toggleMushroom() {
        this.setState({
            mushToggle: !this.state.mushToggle,
            shrinkToggle: !this.state.shrinkToggle
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
                    
                    <div>
                        <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                            <img className="mushroom" src="./assets/poisinmushroom.png" alt="poisin mushroom" />
                        </button>
                    
                        <img className="shrink" src={this.props.yoshiObj.img} alt="Yoshi" />
                    </div>
                ) : 
                    <div>
                        <button onClick={() => this.toggleMushroom(this.props.yoshiObj.id)}>
                            <img className="mushroom" src="./assets/mushroom.png" alt="mushroom" />                
                        </button>
                        
                        <img className="grow" src={this.props.yoshiObj.img} alt="Yoshi" />
                    </div>
                }
                
                {/* <img className="star" src="./assets/star.png" alt="star" /> */}
            
            </div>
        )
    }
}