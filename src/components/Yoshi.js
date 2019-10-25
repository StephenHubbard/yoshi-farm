import React, { Component } from 'react'
import './Yoshi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'



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
                <button onClick={() => this.props.releaseYoshiFn(this.props.yoshiObj.id)}>
                    <div className="bomb">
                        <FontAwesomeIcon icon={faBomb} size="2x"/>
                    </div>    
                </button>
                <img src={this.props.yoshiObj.img} alt="img" />
            </div>
        )
    }
}