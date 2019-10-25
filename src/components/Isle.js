import React, {Component} from 'react';
import Yoshi from "./Yoshi";
import axios from 'axios';
import './Isle.css';

export default class Farm extends Component {
    constructor() {
        super()

        this.state = {
            yoshi: []
        }
    }

    componentDidMount() {
        console.log("mounted")

        axios
            .get('/api/yoshi')
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }

    render() {
        return (
            <content>
                <h3 className="title">Yoshi Isle</h3>
                <div className="Isle">
                    {this.state.yoshi.map(el => (
                        <Yoshi
                        yoshiObj={el} key={el.id}
                        />
                    ))}
                </div>
            </content>
        )
    }
}