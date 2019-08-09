import React, { Component } from 'react'
import './ServiceSites.css'

class ServiceSites extends Component {
  constructor(){
    super();
    this.state = {
      sites: [
        'EcoDev',
        'FREDA',
        'International Development Enterprises',
        'Metta Development Foundation',
        'Ranbaxy Laboratories Limited',
        'Renewable Energy Resource Myanmar (REAM)',
        'Save the Children',
        'PACT/Myanmar',
        'Population Services International (PSI)',
        'Proximity Designs',
        'United Engineering',
        'Wildlife Conservation Society',
        'World Concern',
        'Win Consulting Limited',
        'Ranbaxy Laboratories Limited',
        'Crane Education and Business Centre',
        'International Education Center Myanmar (IECM)',
        'International Language Business Center (ILBC)',
        'Network Child Centre',
        'Stamford Business Center',
        'UNFPA',
        'UNICEF',
        'Yangon Infant and Child Development Centre',
        'MYEO',
        'CISS/SEC (Chin State)',
        '360Ed',
        'Mote Oo',
        'Equality Myanmar',
        'Frontier Research Myanmar',
        'Myanmar Marketing, Research, and Development (MMRD)',
        'Hla Day',
        'Impact Hub',
        'Colourful Flower Garden',
        'Eden Centre for Disabled Children',
        'Little Sister of the Poor Home for the Aged Poor',
        'Mary Chapman School for the Deaf',
        'Mirror of Charity (Mon State)',
        'Myanmar Compassion Project, mobile clinic and orphanage support',
        'Phileo Teaching Center',
        'Thone Htat Kyaung Monastic Education School ',
        'Yangon Kayin Baptist Women Association',
        'Colors Rainbow (LGTBQ)',
        'Aide Medicale Internationale (AMI)',
        'Health Digest',
        'Merlin',
        'Shwe Pyi Hein Kyaung',
        'Pun Hlaing Siloam',
        'Chindwin',
        'Gitameit Music Centre',
        'Design 2000',
        'Yangon Heritage Trust',
        'Doh Eain',
        'Clean Yangon',
        
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
        <h2>Service Sites</h2>
        <table className="ss">
          <tbody>
            {this.formatList().map(r => (
              <tr>
                {r.map(c => (
                  <td>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default ServiceSites

