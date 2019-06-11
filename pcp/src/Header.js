import React, { Component } from 'react'
import './Header.css'
import Logo from './images/LOGO_NEW.svg'

class Header extends Component {
  render() {
    return (
      <div  className="expanded row header">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"/> 
        <a href="./Homepage.js"><img className="logo" src={Logo} alt="Pre-Collegiate Program Yangon" width="150px"/></a>
        <h1 className="h1"> The Pre-Collegiate Program </h1><h1 className="ygn">of Yangon</h1>
      </div>  
    )
  }
}

export default Header