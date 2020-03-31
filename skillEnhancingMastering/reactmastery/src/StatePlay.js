import React, { Component } from 'react'

import CounterDisplay from "./CounterDisplay"

export default class StatePlay extends Component {
    constructor() {
        super()
        this.state = {
            clickCounter: 0
        }

    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter + 1
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Add One</button>
                <CounterDisplay count={this.state.clickCounter} />
            </div>
        )
    }
}

