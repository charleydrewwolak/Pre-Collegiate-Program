import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import './Body.css'
class NavBar extends Component {
  showDM = () => {
    this.setState(() => {
      document.addEventListener('click', this.hideDM);
      document.getElementById("ddc").classList.toggle('show');
    });
  }

  hideDM = (ev) => {
    this.setState(() => {
      document.removeEventListener('click', this.hideDM);
      document.getElementById("ddc").classList.remove('show');

    });
  }

  render() {
    return (
      <header>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"/> 
        <div className="navbar">
          <div className="dropdown">
            <button onClick={this.showDM} className="dropbtn">About 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#mission"><Link to="/mission">Mission</Link></a>
              <a href="#history"><Link to="/history">History</Link></a>
              <a href="#alumni"><Link to="/alumni">Alumni</Link></a>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={this.showDM} className="dropbtn">Academics 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#liber-alarts"><Link to="/liberal-arts">Liberal Arts Education</Link></a>
              <a href="#faculty-and-staff"><Link to="/faculty-and-staff">Our Faculty and Staff</Link></a>
              <a href="#curriculum"><Link to="/curriculum">Our Curriculum</Link></a>
              <a href="#study-abroad"><Link to="/study-abroad">Study Abroad</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button onClick={this.showDM} className="dropbtn">Student Life 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#sl"><Link to="/studentlife">Student Life</Link></a>
              <a href="#blog"><Link to="/blog">Blog</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button onClick={this.showDM} className="dropbtn">Admissions 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#apply"><Link to="/apply">Enroll</Link></a>
              <a href="#financial-aid"><Link to="/financial-aid">Fees and Financial Aid</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button  onClick={this.showDM} className="dropbtn">Connect 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#partner"><Link to="/partner">Partner With Us</Link></a>
              <a href="#intern"><Link to="/intern">Hire an Intern</Link></a>
              <a href="#join"><Link to="/join">Join our Team</Link></a>
              <a href="#partnerships"><Link to="/partnerships">Partnerships</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button onClick={this.showDM} className="dropbtn">Student Resources 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content" id="ddc">
              <a href="#calendar"><Link to="/calendar">Academic Calendar</Link></a>
            </div>
          </div>   
        </div>
        <div className="line"></div>
      </header>
      
      
    )
  }
}
export default NavBar;