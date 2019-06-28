import React, { Component } from 'react'
import './Homepage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="videoBlock">
          <div className="Left">
            <iframe width="873.6px" height="495px" src="https://www.youtube.com/embed/SxhsBBR-dOI?controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Pre-Collegiate Program of Yangon">
            </iframe>
          </div>
            
          <div className="Right">
            <h2>Education is not the filling of a pail, but the lighting of a fire.</h2>
            <h3>—William Butler Yeats</h3>
          </div>
        </div>

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


        </div>
        
      </div>
    )
  }
}

export default HomePage

