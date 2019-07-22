import React, { Component } from 'react'
import './Table.css'

class Internships extends Component {
  constructor(){
    super();
    this.state = {
      sites: [
        {
          name: "Tagu Films",
          description: "Established in 2013, Tagu Films is composed of local Myanmar filmmakers with international experience. Since its inception, Tagu Films has strived to showcase Myanmar through creative visual storytelling that captures this unique country.",
          link: ""
        },
        {
          name: "Doh Eain",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Impact Hub",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Association for the Assistance of Political Prisoners",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Solomon School",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Instituto Oikos Myanmar",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Indigo Energy",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Proximity Designs",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "360Ed",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Design 2000",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Yangon Heritage Trust",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Frontier Magazine",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "MYEO",
          description: "DkKDKD meyoowooeo",
          link: ""
        },
        {
          name: "Centre for Economic and Social Development",
          description: "DkKDKD meyoowooeo",
        },
        {
          name: "Koe Koe Tech",
          description: "DkKDKD meyoowooeo",
        }
      ]
    }
  }

  render() {
    return (
      <div className="t">
        <table>
          <tr>
            <th>Organization</th>
            <th></th>
          </tr>

        { this.state.sites.map(m => (
          <tr>
            <td><img source={"./".concat(m.name.replace(' ', ''),".png").toLowerCase()} alt="logo"></img></td>
            <td>{m.name}</td>
            <td>{m.description}</td>
          </tr>
        ))}
        </table>
      </div>
    )
  }
}

export default Internships

