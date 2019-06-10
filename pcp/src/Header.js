import React, { Component } from 'react'
import './Header.css'
import Logo from './images/Logo_V1.svg'

class Header extends Component {
  render() {
    return (
      <div  className="expanded row header">
        <img src={Logo} alt="Pre-Collegiate Program Yangon" width="60%"/>
        <div id="Header" className="headline text-center small-12 columns">
        </div>
      </div>
    )
  }
}

export default Header