import React, { Component } from 'react'
import './ServiceSites.css'

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
      ],
    }
    this.columbs=3;
  }
  
  formatList = () => {
    let siteList = []
    let siteGroup = []
    let counter = 0

    let sites = this.state.sites.sort()
    for (let i=0;i<sites.length; i++){
      var site = sites[i]
      if (counter === this.columbs){
        counter = 0;
        siteList.push(siteGroup)
        siteGroup = []
      }
      siteGroup.push(site)
      counter++
    }

    return (siteList)
  }

  render() {
    console.log(this.formatList())
    return (
      <div>
        <h3>Service Sites</h3>
        <table className="ss">
          {this.formatList().map(r => (
            <tr>
              {r.map(c => (
                <td>{c}</td>
              ))}
            </tr>
          ))}
        </table>
        
      </div>
    )
  }
}

export default ServiceSites

