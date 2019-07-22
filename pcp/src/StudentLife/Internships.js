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
          link: "https://tagufilms.com/"
        },
      ]
    }
  }

  render() {
    return (
      <div className="t">
        <h2>Organizations</h2>
        <table>
        { this.state.sites.map(m => (
          <tr>
        
            <td><a href={m.link}><img className="logos" src={require(`./${m.name.replace(' ', '').toLowerCase()}.png`)} alt="logo"/></a></td>
            <td><strong className="title">{m.name}</strong> <br/> {m.description}</td>
          </tr>
        ))}
        </table>
      </div>
    )
  }
}

export default Internships

