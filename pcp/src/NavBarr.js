import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import './Body.css'
import Logo from './images/LOGO_NEW.svg'

class NavBar extends Component {
    constructor(){
      super();       
        
        this.state = {
            menu: [
                {
                    type: 'About',
                    isOpen: false,
                    links: [
                        {
                            title: "Mission",
                            link: "/mission"
                        },
                        {
                            title: "History",
                            link: "/history"
                        },
                        {
                            title: "Alumni",
                            link: "/alumni"
                        }
                    ]
                },
                {
                    type: 'Academics',
                    isOpen: false,
                    links: [
                        {
                            title: "Liberal Arts Education",
                            link: "/liberal-arts"
                        },
                        {
                            title: "Our Faculty and Staff",
                            link: "/faculty-and-staff"
                        },
                        {
                            title: "Our Curriculum",
                            link: "/curriculum"
                        },
                        {
                            title: "Study Abroad",
                            link: "/study-abroad"
                        }
                    ]
                },
                {
                    type: 'Student Life',
                    isOpen: false,
                    links: [
                        {
                            title: "Student Life",
                            link: "/student-life"
                        },
                        {
                            title: "Blog",
                            link: "/blog"
                        }
                    ]
                },
                {
                    type: 'Admissions',
                    isOpen: false,
                    links: [
                        {
                            title: "Enroll",
                            link: "/apply"
                        },
                        {
                            title: "Fees and Financial Aid",
                            link: "/financial-aid"
                        }
                    ]
                },
                {
                    type: 'Connect',
                    isOpen: false,
                    links: [
                        {
                            title: "Partner With Us",
                            link: "/partner"
                        },
                        {
                            title: "Hire and Intern",
                            link: "/intern"
                        },
                        {
                            title: "Join Our Team",
                            link: "/join"
                        },
                        {
                            title: "Partnerships",
                            link: "/partnerships"
                        }
                    ]
                },
                {
                    type: 'Student Resources',
                    isOpen: false,
                    links: [
                        {
                            title: "Academic Calendar",
                            link: "/calendar"
                        }
                    ]
                }

            ]
        };
    }
  
    activateMenu = (type) => {
        document.addEventListener('click', this.hideDM);
        this.setState(prevState => {
            prevState.displayMenu = type;
            for(let i=0; i<prevState.menu.length; i++){
                prevState.menu[i].isOpen = prevState.menu[i].type == type ? true : false;
            }
            return prevState;
        });
    }
  
    render() {
        return (
            <header>
                <div className="image">
                    <a href="./"><img className="logo" src={Logo} alt="Pre-Collegiate Program Yangon" /></a>
                </div>
                <div className="right">
                    <div className="text" >
                        <h1 className="pcp"><strong>The Pre-Collegiate Program </strong>of Yangon</h1>
                    </div>
                    <div className="navbar">
                        <div className="dropdown">
                            { this.state.menu.map(m => (
                                <div>
                                    <button onClick={() => this.activateMenu(m.type)} className="dropbtn">{m.type} 
                                    <i className="fa fa-caret-down"></i>
                                    </button>
                                    { m.isOpen && 
                                        <div className="dropdown-content" id="ddc">
                                            { m.links.map(l => (
                                                <a href={l.link}><Link to={l.link}>{l.title}</Link></a>
                                            ))}
                                        </div>
                                    }                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </header>
        );
    };
}

export default NavBar;