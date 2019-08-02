import React, { Component } from 'react'
import './Board.css'
class Board extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        
        {
            name: "Yan Min Aung",
            title: "Managing Director, 360ED; National Environmental Policy Consultant (UNDP)",
            degree: "M.S., Bard Center for Environmental Policy"
        },
        {
            name: "Ei Phyo Han",
            title: "General Manager, Peace Myanmar Group (PMG)",
            degree: "M.B.A., Harvard Business School"
        },
        {
            name: "Nyantha Maw Lin",
            title: "Managing Partner, Burgundy Hills Group",
            degree: "B.A., Political Science, International Relations, Carleton College"
        },
        {
            name: "Zaw Lin Myat",
            title: "Principal Architect, ZAD office; Project Director, Wyne Hotel",
            degree: "M.Arch and M.S.H.P., Architecture, Historic Preservation, Columbia University in the City of New York"
        },
        {
            name: "Lin Sun Oo",
            title: "Co-Founder and Director, Tagu Films",
            degree: "B.A., Environmental Policy and Philosophy, McDaniel College"
        },
        {
            name: "Wai Phyo Myint",
            title: "Regional Outreach Manager, Myanmar Center for Responsible Business",
            degree: "B.A., Journalism in International Politics"
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="btitle"> Pre-Collegiate Program of Yangon Members of the Board of Trustees</h1>
        { this.state.profiles.map(m => (
        <div className="board">
            <h3>{m.name}</h3>
            <p>{m.title}</p>
            <p><i>{m.degree}</i> </p>
        </div>
         ))}
      </div>
    )
  }
}

export default Board

