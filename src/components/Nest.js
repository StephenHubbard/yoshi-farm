import React, {Component} from 'react';

export default class Catcher extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            img: '',
            randomNum: 0, 
            color: ''
        }
    }

    componentDidMount() {
        const randomNum = Math.ceil(Math.random() * 3)

        if (randomNum === 1) {
            this.setState({
                randomNum: 1, 
                color: "green"
            })
        }
    }

    render() {
        return (
            <div>
                <h3>Yoshi Nest</h3>
                <h4>Click to Hatch!</h4>
                <img src="egg.png" alt="Yoshi Egg"/>
                <hr />
                <button onClick={() => this.hatchEgg()}>Hatch Egg!</button>
            </div>
        )
    }
}    