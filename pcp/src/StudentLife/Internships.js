import React, { Component } from 'react'
import './Table.css'

class Internships extends Component {
  constructor(){
    super();
    this.state = {
      sites: [
        {
          name: "Tagu Films",
          description: "DkKDKD meyoowooeo",
        },
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

