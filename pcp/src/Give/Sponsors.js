import React, { Component } from 'react'

class Sponsors extends Component {

  render() {
    return (
      <div>
        <h1>Our Sponsors</h1>
        
        <br/>
        <h3>KBZ Brighter Future Myanmar</h3>
        <p>Thank you for your Support!</p>
        <a href="https://www.brighterfuturemyanmar.org/"><img src={require("./KBZ.png")} width="40%" alt="Sponsor Ad" /></a>
      </div>
    )
  }
}

export default Sponsors

