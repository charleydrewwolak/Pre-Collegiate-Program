import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="/">Home</Link></li>
          <li className="navButton"><Link to="/database">Database</Link></li>
          <li className="navButton"><Link to="/example">example</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;