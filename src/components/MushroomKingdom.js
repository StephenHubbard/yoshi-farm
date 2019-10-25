import React, {Component} from 'react';
import Yoshi from "./Yoshi";
import axios from 'axios';
import './MushroomKingdom.css';

export default class MushroomKingdom extends Component {
    constructor() {
        super()

        this.state = {
            yoshi: []
        }
        this.releaseYoshi = this.releaseYoshi.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/yoshiKingdom')
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }

    releaseYoshi(id) {
        axios
            .delete(`api/yoshiKingdom/${id}`)
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }

    render() {
        return (
            <body>
                <div className="wallpaper" />
                <h3 className="title">Mushroom Kingdom</h3>
                <div className="Isle">
                    {this.state.yoshi.map(el => (
                        <Yoshi
                        yoshiObj={el} key={el.id}
                        releaseYoshiFn={this.releaseYoshi}
                        />
                    ))}
                </div>
            </body>
        )
    }
}