import React, { Component } from 'react'
import './Partnerships.css'
import Zomia from './zomia.png'

class Partnerships extends Component {
  render() {
    return (
      <div>
        <h2 className="partnerships">Our Partnerships</h2>
        <div className="partner">
          <div className="pBody">
            <h3>Bonner Internship</h3>
            <p className="b">The motto "Access to Education, Opportunity to Serve" distills the overarching goal of the Bonner Program.  Since 1990, a diverse, multi-state consortium of participating colleges and universities have been joined through a common commitment to the Corella and Bertram F. Bonner Foundation’s mission to “transform students, communities, and campuses through service.” </p>
            <img className="pLogo"/>
          </div>
          <button className="pButton" href="/bonner">Learn More</button>
        </div>
        <div className="partner">
          <div className="pBody">
            <h3>Impetus Fund</h3>
            <p className="b">The Impetus Fund is a scholarship awarded to current PCP students, 
            funding their internships or educational pursuits. Awards range from 100-1000 USD 
            depending on the student’s need and standing with PCP, the project’s value, and fund availability. 
            Started by three alumni of the PCP program, the scholarship seeks to open up opportunities 
            for PCP students otherwise obstructed by financial considerations.</p>
          </div>
          <button className="pButton" href="/impetus">Learn More</button>
        </div>
        <div className="partner">
          <div className="pBody">
            <h3>Zomia SPC</h3>
            <p className="b">Zomia SPC is a social purpose corporation launched in 2014 to increase access to higher education among students from marginalized communities. We do so by providing students from marginalized communities affordable education loans that are funded by philanthropic individuals and institutions from around the world.</p>
            <img className="pLogo" src={Zomia} alt="Zomia Logo" width="100%" />
          </div>
          <button className="pButton" href="/zomia">Learn More</button>
        </div>
      </div>
    )
  }
}

export default Partnerships

