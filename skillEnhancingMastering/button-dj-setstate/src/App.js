import React, { Component } from 'react'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      //click Counter
      clickCounter: 0,
      //StartingColors
      boxOneColor: "blue",
      boxTwoColor: "orange",
      boxThreeColor: "black",
      boxFourColor: "white",
      //ColorArrays
      america: ['red', 'white', 'blue', 'white']

    }

  }
  //Methods for changing Colors

  resetToggle = () => {
    this.setState({
      boxOneColor: "blue",
      boxTwoColor: "orange",
      boxThreeColor: "black",
      boxFourColor: "white"
    })
  }

  americanColorToggle = () => {
    this.setState({
      boxOneColor: this.state.america[0],
      boxTwoColor: this.state.america[1],
      boxThreeColor: this.state.america[2],
      boxFourColor: this.state.america[3],
    })
  }







  render() {
    const boxOneColor = {
      backgroundColor: this.state.boxOneColor
    }
    const boxTwoColor = {
      backgroundColor: this.state.boxTwoColor
    }
    const boxThreeColor = {
      backgroundColor: this.state.boxThreeColor
    }
    const boxFourColor = {
      backgroundColor: this.state.boxFourColor
    }
    return (
      <div>
        <div className='center'>
          <div className="box" style={boxOneColor}></div>
          <div className="box" style={boxTwoColor}></div>
          <div className="boxTwo" style={boxThreeColor}></div>
          <div className="boxTwo" style={boxFourColor}></div>
        </div>
        <button onClick={this.americanColorToggle} className="jumbo-button">Merica!</button>
        <button onClick={this.resetToggle} className="jumbo-button">Reset!</button>
      </div>
    )
  }
}

