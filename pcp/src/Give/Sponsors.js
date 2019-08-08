import React, { Component } from 'react'

class Sponsors extends Component {

  render() {
    return (
      <div>
        <h1>Our Sponsors</h1>
        
        <br/>
        <h3>KBZ BFM</h3>
        <p>Thank you for your Support!</p>
        <img src={require("./KBZ.jpeg")} width="40%" alt="Sponsor Ad" />
      </div>
    )
  }
}

export default Sponsors

