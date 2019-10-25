import React, {Component} from 'react';
import Yoshi from "./Yoshi";
import axios from 'axios';
import './Isle.css';

export default class Isle extends Component {
    constructor() {
        super()

        this.state = {
            yoshi: []
        }
        this.releaseYoshi = this.releaseYoshi.bind(this)
        this.saveMushroomStatus = this.saveMushroomStatus.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/yoshiIsle')
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }

    saveMushroomStatus(id, body) {
        axios
            .put(`/api/yoshiIsle/${id}`, body)
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }


    releaseYoshi(id) {
        axios
            .delete(`api/yoshiIsle/${id}`)
            .then(res => {
                this.setState({
                    yoshi: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <div className="wallpaper" />
                <h3 className="title">Yoshi Isle</h3>
                <div className="Isle">
                    {this.state.yoshi.map(el => (
                        <Yoshi
                        yoshiObj={el} key={el.id}
                        releaseYoshiFn={this.releaseYoshi}
                        saveMushroomStatusFn={this.saveMushroomStatus}
                        />
                    ))}
                </div>
            </div>
        )
    }
}