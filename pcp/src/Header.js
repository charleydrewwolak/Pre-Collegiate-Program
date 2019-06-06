import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div  className="expanded row header">
        <div id="Header" className="headline text-center small-12 columns">
          <h1 id="Header">The Pre-Collegiate Program</h1>
          <h3 id="Header">of Yangon</h3>
        </div>
      </div>
    )
  }
}

export default Header