import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          <a href="#home"><Link to="/">Home</Link></a>
          <a href="#db"><Link to="/database">DB</Link></a>
          <div className="dropdown">
            <button className="dropbtn">Dropdown 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#1">Link 1</a>
              <a href="#2">Link 2</a>
              <a href="#3">Link 3</a>
            </div>
          </div> 
        </div>
      </header>
      
      
    )
  }
}
export default NavBar;