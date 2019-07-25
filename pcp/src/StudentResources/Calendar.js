import React, { Component } from 'react'

class Calendar extends Component {
  constructor(){
    super();
    this.state = {
      events: {
        "2/12/1998": "Charleys Birthday",
        "1/1/11-2/3/5": "Wow!",
        "2/22/22": "Yeet "
      }
    }
    var months = {1:"January", 2:"Febuary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}
  }




  render() {
    return (
      <div>
        <table>
          <tbody>
            <th colspan="2"><strong>Fall 2019</strong></th>
            {Object.entries(this.state.events).map(([key, value]) => (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default Calendar

