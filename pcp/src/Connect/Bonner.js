import React, { Component } from 'react'
import './Bonner.css'

class Bonner extends Component {
  render() {
    return (
      <div>
        <img src={require("./bonner.png")} alt="Bonner logo" width="20%"/>
        <h1>The Bonner Foundation</h1>
        <p>The Bonner Network encompasses more than 65 liberal arts colleges and lives up to its motto of
Access to Education, Opportunity to Serve. Extensive information is available at <a href="http://www.bonner.org">bonner.org</a></p>
        <p>Aligning with many of the components of your Bonner developmental model — including service
leadership, capacity building, education and reflection — the PCP-Myanmar Partnership offers you the
opportunity to learn and apply professional skills to advance the mission of the organization with which
you will serve. Applicants will choose from among five internship opportunities: 1) promoting public
health through journalism; 2) embedded in classroom teaching and learning; 3) developing a new website
for PCP, your host organization; 4) documentary filmmaking; and 5) creating short videos of physics
experiments to make high school science come alive. </p>
        <p>The Bonner/PCP Myanmar experience will center on the following six grounding values and
learning goals: </p>
        <li>Service to others.</li>
        <li>Understanding of a diverse local culture.</li>
        <li>Acquisition of basic Burmese language.</li>
        <li>Understanding of the history and growth of the field within which you will be working.</li>
        <li>Documentation of your experience.</li>
        <li>Communication of the process and results of your internship both within Myanmar and upon
return to the US.</li>
        <p>The Bonner/PCP Partnership Myanmar will select three interns. Each Bonner intern will
be paired with a Yangon-based Pre-Collegiate graduate. All internship work will be done as a team. </p>
        <a href={require("./Bonner_PCP-Application-Packet-Myanmar-2019-.pdf")}>Click here to see our 2019 application packet</a>
      </div>
    )
  }
}

export default Bonner

