import React, { Component } from 'react'
import './Homepage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="videoBlock">
          <div className="Left">
            <iframe width="873.6px" height="495px" src="https://www.youtube.com/embed/SxhsBBR-dOI?controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
            
          <div className="Right">
            <h2>Insert Cool Factz here</h2>
          </div>
        </div>
        <div>
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
          with others will be a great asset to the country as it goes forward.
          </p>

        </div>
        
      </div>
    )
  }
}

export default HomePage

