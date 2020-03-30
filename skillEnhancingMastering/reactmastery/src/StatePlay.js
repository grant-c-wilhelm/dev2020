import React, { Component } from 'react'

export default class StatePlay extends Component {
    constructor() {
        super()
        this.state = {
            clickCounter: 0
        }
        // this.handleClick = this.handleClick.bind(this)
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
                <button onClick={this.handleClick} >Click</button>
                <h1>{this.state.clickCounter}</h1>
                <h1>Testing 123</h1>
            </div>
        )
    }

}
