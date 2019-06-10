import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
class NavBar extends Component {
  render() {
    return (
      <header>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"/> 
        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">About 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#mission"><Link to="/mission">Mission</Link></a>
              <a href="#history"><Link to="/history">History</Link></a>
              <a href="#alumni"><Link to="/alumni">Alumni</Link></a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Academics 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#liber-alarts"><Link to="/liberal-arts">Liberal Arts Education</Link></a>
              <a href="#faculty-and-staff"><Link to="/faculty-and-staff">Our Faculty and Staff</Link></a>
              <a href="#curriculum"><Link to="/curriculum">Our Curriculum</Link></a>
              <a href="#study-abroad"><Link to="/study-abroad">Study Abroad</Link></a>
            </div>
          </div> 
          <a href="#sl"><Link to="/studentlife">Student Life</Link></a>
          <div className="dropdown">
            <button className="dropbtn">Admissions 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#enroll"><Link to="/enroll">Enroll</Link></a>
              <a href="#financial-aid"><Link to="/financial-aid">Frees and Financial Aid</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button className="dropbtn">Connect 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#partner"><Link to="/partner">Partner With Us</Link></a>
              <a href="#intern"><Link to="/intern">Hire an Intern</Link></a>
              <a href="#join"><Link to="/join">Join our Team</Link></a>
              <a href="#partnerships"><Link to="/join">Partnerships</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button className="dropbtn">Student Resources 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#calendar"><Link to="/calendar">Academic Calendar</Link></a>
            </div>
          </div> 
        </div>
      </header>
      
      
    )
  }
}
export default NavBar;