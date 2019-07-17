import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import './Body.css'
import Logo from './images/LOGO_NEW.svg'

class NavBar extends Component {
  constructor(){
    super();
    this.state =  { displayMenu: '' }
    this.showDM = this.showDM.bind(this);
    this.hideDM = this.hideDM.bind(this);

  }

  showDM (type) {
   this.setState({ displayMenu: type }, () => {
      document.addEventListener('click', this.hideDM);
    });
  }

  hideDM (ev) {
    this.setState({ displayMenu: '' }, () => {
      document.removeEventListener('click', this.hideDM)
    });
  }

  render() {
    return (
      <header>
        <div className="image">
          <a href="./"><img className="logo" src={Logo} alt="Pre-Collegiate Program Yangon" /></a>
        </div>
        <div className="right">
          <div className="text">
            <h1 className="pcp"><strong>The Pre-Collegiate Program </strong>of Yangon</h1>
          </div>
          <div className="navbar">
            <div className="dropdown">
              <button id="about" onClick={() => this.showDM("about")} className="dropbtn">About 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "about" ? ( 
              <div className="dropdown-content" id="ddc">
                <a href="#mission"><Link to="/mission">Mission</Link></a>
                <a href="#history"><Link to="/history">History</Link></a>
                <a href="#alumni"><Link to="/alumni">Alumni</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
            </div>
            <div className="dropdown">
              <button  onClick={() => this.showDM("academics")} className="dropbtn">Academics 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "academics" ? (
              <div className="dropdown-content" id="ddc">
                <a href="#liber-alarts"><Link to="/liberal-arts">Liberal Arts Education</Link></a>
                <a href="#faculty-and-staff"><Link to="/faculty-and-staff">Our Faculty and Staff</Link></a>
                <a href="#curriculum"><Link to="/curriculum">Our Curriculum</Link></a>
                <a href="#study-abroad"><Link to="/study-abroad">Study Abroad</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
            </div> 
            <div className="dropdown">
              <button onClick={() => this.showDM("student-life")} className="dropbtn">Student Life 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "student-life" ? (
              <div className="dropdown-content" id="ddc">
                <a href="#sl"><Link to="/studentlife">Student Life</Link></a>
                <a href="#blog"><Link to="/blog">Blog</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
            </div> 
            
            <div className="dropdown">
              <button onClick={() => this.showDM("admissions")} className="dropbtn">Admissions 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "admissions" ? (
              <div className="dropdown-content" id="ddc">
                <a href="#apply"><Link to="/apply">Enroll</Link></a>
                <a href="#financial-aid"><Link to="/financial-aid">Fees and Financial Aid</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
            </div> 
            <div className="dropdown">
              <button  onClick={() => this.showDM("connect")} className="dropbtn">Connect 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "connect" ? (
              <div className="dropdown-content" id="ddc">
                <a href="#partner"><Link to="/partner">Partner With Us</Link></a>
                <a href="#intern"><Link to="/intern">Hire an Intern</Link></a>
                <a href="#join"><Link to="/join">Join our Team</Link></a>
                <a href="#partnerships"><Link to="/partnerships">Partnerships</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
            </div> 
            <div className="dropdown">
              <button onClick={() => this.showDM("student-resources")} className="dropbtn">Student Resources 
                <i className="fa fa-caret-down"></i>
              </button>
              { this.state.displayMenu === "student-resources" ? (
              <div className="dropdown-content" id="ddc">
                <a href="#calendar"><Link to="/calendar">Academic Calendar</Link></a>
              </div>
              ):
              ( 
                null 
              )
              }
          
            </div>   
          </div>
        </div>
        <div className="line"></div>
      </header>
    )
  }
}
export default NavBar;


