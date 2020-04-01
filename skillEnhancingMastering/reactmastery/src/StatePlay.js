import React, { Component } from 'react'

import CounterDisplay from "./CounterDisplay"
import ButtonComp from "./ButtonComp"
import ButtonCompTwo from "./ButtonCompTwo"



export default class StatePlay extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleClickTwo = () => {
        this.setState(prevState => {

            return {
                count: prevState.count * 2
            }
        })
    }

    render() {
        return (
            <div>
                <ButtonComp handleClick={this.handleClick} />
                <ButtonCompTwo handleClickTwo={this.handleClickTwo} />
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}

