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
            starToggle: false,
        }
    }

    toggleMushroom() {
        this.setState({
            mushToggle: !this.state.mushToggle,
            shrinkToggle: !this.state.shrinkToggle
        })
        this.props.saveMushroomStatusFn(this.props.yoshiObj.id, {mushToggle: !this.props.yoshiObj.mushToggle})
    }

    toggleStar() {
        this.setState({
            starToggle: !this.state.starToggle,
        })
        console.log(this.state.starToggle)
        // this.props.saveStarStatusFn(this.props.yoshiObj.id, {starToggle: !this.props.yoshiObj.starToggle})
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
                
                {this.props.yoshiObj.starToggle ? (
                    <div>
                        <button onClick={() => this.toggleStar(this.props.yoshiObj.id)}>
                            <img className="miniStar" src="./assets/purplestar.png" alt="reg star" />
                        </button>          
                    </div>
                ) : 
                    <div>
                        <button onClick={() => this.toggleStar(this.props.yoshiObj.id)}>
                            <img className="miniStar" src="./assets/ministar.png" alt="purple star" />                
                        </button>
                    </div>
                }
                


                <img className="glowingStar" src="./assets/star.png" alt="star" /> 
            </div>
        )
    }
}