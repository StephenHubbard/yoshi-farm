import React, {Component} from 'react';
// import Yoshi from './Yoshi';

export default class Farm extends Component {
    constructor() {
        super()

        this.state = {
            yoshi: []
        }
    }

    componentDidMount() {
        console.log("mounted")
    }

    render() {
        return (
            <div>
                <h2>Hatched Yoshi's will go here.</h2>
            </div> 
        )
    }
}