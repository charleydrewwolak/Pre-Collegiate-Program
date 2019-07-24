import React, { Component } from 'react'

class ServiceSites extends Component {
  constructor(){
    super();
    this.state = {
      sites: [
        'example 1',
        'example 2',
        'example 3',
        'example 4',
        'example 5',
        'example 6',
        'example 7',
        'example 8',
        'example 9',
        'example 10',
      ]
    }
  }
  render() {
    return (
      <div>
        <table>
          <th>Meow</th>
          <th>Meosw</th>
        </table>
      </div>
    )
  }
}

export default ServiceSites

