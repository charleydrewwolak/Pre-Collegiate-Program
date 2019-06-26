import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
    document.getElementsByClassName("dropdown-content").classList.toggle("show");
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      var myDropdown = document.getElementsByClassName("dropdown-content");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  render() {
    return (
      <header>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"/> 
        <div className="navbar">
          <div className="dropdown">
            <button onClick={this.handleClick} className="dropbtn">About 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#mission"><Link to="/mission">Mission</Link></a>
              <a href="#history"><Link to="/history">History</Link></a>
              <a href="#alumni"><Link to="/alumni">Alumni</Link></a>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={this.handleClick} className="dropbtn">Academics 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#liber-alarts"><Link to="/liberal-arts">Liberal Arts Education</Link></a>
              <a href="#faculty-and-staff"><Link to="/faculty-and-staff">Our Faculty and Staff</Link></a>
              <a href="#curriculum"><Link to="/curriculum">Our Curriculum</Link></a>
              <a href="#study-abroad"><Link to="/study-abroad">Study Abroad</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button onClick={this.handleClick} className="dropbtn">Student Life 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#sl"><Link to="/studentlife">Student Life</Link></a>
              <a href="#blog"><Link to="/blog">Blog</Link></a>
            </div>
          </div> 
          
          <div className="dropdown">
            <button onClick={this.handleClick} className="dropbtn">Admissions 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#apply"><Link to="/apply">Enroll</Link></a>
              <a href="#financial-aid"><Link to="/financial-aid">Fees and Financial Aid</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button  onClick={this.handleClick} className="dropbtn">Connect 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#partner"><Link to="/partner">Partner With Us</Link></a>
              <a href="#intern"><Link to="/intern">Hire an Intern</Link></a>
              <a href="#join"><Link to="/join">Join our Team</Link></a>
              <a href="#partnerships"><Link to="/partnerships">Partnerships</Link></a>
            </div>
          </div> 
          <div className="dropdown">
            <button onClick={this.handleClick} className="dropbtn">Student Resources 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
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