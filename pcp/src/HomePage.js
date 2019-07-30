import React, { Component } from 'react'
import './Homepage.css'
import ControlledCarousel from './Carousel'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <ControlledCarousel/>
        <div className="hp">
          <p className="main">
          Since 2003 the Pre-Collegiate Program has had the singular mission
          to create a society of educated innovators, leaders, and change-makers
          who solve important challenges in Myanmar and beyond. After an intensive
          16-months of academic and personal preparation, PCP has sent nearly 200 Myanmar
          nationals to receive bachelor degrees abroad at high caliber liberal arts institutions.
          As the country moves into a new era, program graduates have shown their mettle as competent
          leaders during this period of change; continuing to empower young people with the right
          skills is a necessary investment. Nurturing young people that can think deeply,
          critically, and empathetically about an issue, successfully seek out information,
          and persuasively share this information
          with others will be a great asset to the country as it goes forward. <br/><br/>
          We always ask questions of our students that help them open their minds and their hearts. We push students to look closely at their environment and listen carefully to those who speak with them. We encourage our students to entertain ideas they do not accept. We stimulate our students to integrate their traditional values with those essential in contemporary society. We nurture our students in the hope that some will accept the challenge to become change agents.

To become a member of the Pre-Collegiate Program is to embark on a lifelong journey of learning and engagement. For those who choose to take on this challenge, the community of the Program will be with you every step of the way.
</p>
<h2>Program Overview</h2>
        <div>
            <p>At the Pre-Collegiate Program, we work to ensure the success of our students and their communities.</p>
            <ul>
                <li>Our <Link to="/curriculum">courses </Link>improve critical thinking, analysis, and and communication skills.</li>
            </ul>
            <ul>
                <li>Our field trips around Yangon, our longer excursions to Bagan and rural Myanmar, our <Link to="/partner">guest speakers</Link>, and our <Link to="/internships">internships</Link> help our student broaden their horizons get hands-on experience, and make professional connections.</li>
            </ul>
            <ul>
                <li>Our one-on-one counseling and experience ensure that our students have their best chance of <Link to="/study-abroad">earning admission and scholarships</Link> to some of the best universities in the world.</li>
            </ul>
            <ul>
                <li>Our inquisitive, supportive community of faculty, alumni, and school partners ensure that are students are ready to work as leaders and agents of change when they return to Myanmar <Link to="/alumni">after their studies</Link>.</li>
            </ul>
        </div>
        </div>
      </div>
      
    )
  }
}

export default HomePage
