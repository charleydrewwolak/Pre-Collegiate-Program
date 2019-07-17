import React, { Component } from 'react';
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
            ],
            isActive: null
        };
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    activateMenu = (type) => {
        this.setState(prevState => {
            if (prevState.displayMenu){
                document.getElementById(prevState.displayMenu).classList.remove("underlined")
            }
            prevState.displayMenu = type;
            for(let i=0; i<prevState.menu.length; i++){
                prevState.menu[i].isOpen = prevState.menu[i].type === type ? true : false;
                
            }
            document.getElementById(type).classList.add("underlined")
            return prevState;
        });

    }

    setMenuWrapper = node => {
        this.setState({isActive: node});
    }


    handleClickOutside = e => {         
        if (this.state.isActive && !this.state.isActive.contains(e.target)) {
            this.setState(prevState => {
                for(let i=0; i<prevState.menu.length; i++){
                    prevState.menu[i].isOpen = false;
                   // document.getElementById(prevState.menu[i].type).classList.remove("underlined")
                }
                if (prevState.displayMenu){
                    document.getElementById(prevState.displayMenu).classList.remove("underlined")
                }
                
                return prevState;
            })
        }
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
                        <div ref={this.setMenuWrapper} id="set-menu-wrapper">
                            { this.state.menu.map(m => (
                                <div className="dropdown">
                                    <button id={m.type} onClick={() => this.activateMenu(m.type)} className="dropbtn">{m.type} 
                                    <i className="fa fa-caret-down"></i>
                                    </button>
                                    { m.isOpen && 
                                        <div className="dropdown-content" id="ddc">
                                            { m.links.map(l => (
                                                <a href={l.link}>{l.title}</a>
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