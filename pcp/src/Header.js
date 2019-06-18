import React, { Component } from 'react'
import './Header.css'
import Logo from './images/LOGO_NEW.svg'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="image">
          <a href="./"><img className="logo" src={Logo} alt="Pre-Collegiate Program Yangon" /></a>
        </div>

        <div className="text" >
          <h1 className="pcp"><strong>The Pre-Collegiate Program </strong>of Yangon</h1>
        </div>
      </div>
    )
  }
}

export default Header