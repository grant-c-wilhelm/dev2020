import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false


    }
  }
  handleChange = (event) => {
    event.target.type === 'checkbox' ? this.setState({
      [event.target.name]: event.target.checked
    }) :
      this.setState({
        [event.target.name]: event.target.value
      })
  }
  render() {
    return (
      <main>
        <form>
          <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
          <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} /> <br />
          <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange} /><br />

          {/* Create radio buttons for gender here */}
          <label >
            <input type="radio" name="gender"  onChange={this.handleChange} value="Male" />
            Male
          </label>
          <label >
            <input type="radio" name="gender"  onChange={this.handleChange} value="Female" />
            Female
          </label>
          <br />

          {/* Create select box for location here */}
          <select name="destination" onChange={this.handleChange}>
            <option value="Las Vegas">Las Vegas</option>
            <option value="Salt Lake City">Salt Lake City</option>
            <option value="Jacksonville">Jacksonville</option>
            <option value="Tampa">Tampa</option>
          </select>
          <br />
          <label>
            <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan} />
            Vegetarian
          </label>
          <label>
            <input type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.isKosher} />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="isLactoseFree" onChange={this.handleChange} checked={this.state.isLactoseFree} />
            Carnivore
          </label>


          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          Vegan: {this.state.isVegan ? " Yes " : " No "} 
          Kosher: {this.state.isKosher ? " Yes " : " No "} 
          LactoseFree: {this.state.isLactoseFree ? " Yes " : " No "}
        </p>
      </main>
    )
  }
}


























// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isNice: true,
//       gender: "",
//       favColor: "blue"
//     }
//   }
//   handleChange = (event) => {
//     event.target.type === "checkbox" ?
//       this.setState({
//         [event.target.name]:
//           event.target.checked
//       }) : this.setState({
//         [event.target.name]: event.target.value
//       })
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="FirstName"
//             value={this.state.firstName}
//             onChange={this.handleChange} />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="LastName"
//             value={this.state.lastName}
//             onChange={this.handleChange} />
//           <br />
//           <textarea
//             name=""
//             rows="10"
//             value={"text area here"}></textarea>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="isNice"
//               checked={this.state.isNice}
//               onChange={this.handleChange} />
//             is nice?
//           </label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={this.state.gender === "male"}
//               onChange={this.handleChange} />
//             Male
//           </label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={this.state.gender === "female"}
//               onChange={this.handleChange} />
//             Female
//           </label>
//           <br />
//           <label>Favorite Color</label>
//           <select name="favColor"
//             value={this.state.favColor}
//             onChange={this.handleChange}>
//             <option value="red">red</option>
//             <option value="orange">orange</option>
//             <option value="yellow">yellow</option>
//             <option value="green">green</option>
//             <option value="blue">blue</option>
//           </select>


//         </form>
//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h1>{this.state.isNice}</h1>
//         <h1>you are a {this.state.gender}</h1>
//         <h1>Favorite color is: {this.state.favColor}</h1>
//       </div>

//     )
//   }
// }
