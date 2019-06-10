import React, { Component } from 'react'
import './Header.css'
import Logo from './images/Logo.svg'

class Header extends Component {
  render() {
    return (
      <div  className="expanded row header">
        <h1 className="h1.logo" > The Pre-Collegiate Program of Yangon <img className="img.logo" src={Logo} alt="Pre-Collegiate Program Yangon"  width="150px"/> </h1>
        <div id="Header" className="headline text-center small-12 columns">
        </div>
      </div>
    )
  }
}

export default Header