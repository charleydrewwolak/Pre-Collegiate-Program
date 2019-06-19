import React, { Component } from 'react'
import './Partnerships.css'

class Partnerships extends Component {
  render() {
    return (
      <div>
        <h2 className="partnerships">Our Partnerships</h2>
        <div className="partner">
          <div className="pBody">
            <h3>Bonner Internship</h3>
            <p className="b">The term “liberal arts” comes from ancient Greece and describes the skills that were considered necessary for an individual to be an educated, independent member of society. Although the curriculum has been updated in the last 2,000 years, universities and employers around the world continue to prize liberal arts education because liberal arts graduates are widely recognized for their abilities to think broadly and deeply on a range of issues.</p>
            <img className="pLogo"/>
          </div>
          <button className="pButton" href="/bonner">Learn More</button>

          
        </div>
        
      </div>
    )
  }
}

export default Partnerships

