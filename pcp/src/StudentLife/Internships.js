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
      ]
    }
  }

  render() {
    return (
      <div className="t">
        <table>
          <tr>
            <th>Organizations</th>
          </tr>

        { this.state.sites.map(m => (
          <tr>
        
            <td><img className="logos" src={require(`./${m.name.replace(' ', '').toLowerCase()}.png`)} alt="logo"/></td>
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

