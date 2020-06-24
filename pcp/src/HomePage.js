import React, { Component } from 'react'
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import c1 from './1.jpg'
import c2 from './2.jpg'
import c3 from './3.jpg'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'
class HomePage extends Component {
  render() {
    return (
      <div>
         <div className="carousel">
    
        
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
          width="100%"
        />
        <Carousel.Caption>
          <h2 className="ch">Liberal Arts Education in Yangon</h2>
          <Link to="./liberal-arts" className="aa">What is liberal arts?</Link>
          
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Third slide"
          width="100%"
        />
        <Carousel.Caption>
          <h2 className="ch">Meet our Alumni</h2>
          <Link to="./alumni" className="aa">What are they doing now?</Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
          width="100%"
        />
        <Carousel.Caption className="carousel-caption">
          <h2 className="ch">Academic Calendar</h2>
          <Link to="./calendar" className="aa"> Check when you can apply!</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        <div className="hp">
          <p className="main">
          Founded in 2003, the Pre-Collegiate Program (PCP) has had a singular mission: to create a society of educated innovators, leaders, and change-makers who solve important challenges in Myanmar and beyond. 
Since its inception, PCP has rigorously educated Myanmar youth through our intensive sixteen-month program and sent over two hundred Myanmar nationals to high calibre universities and colleges abroad. As the country moves into a new era, program graduates have demonstrated their mettle by moving into positions of competent leadership in public and private sectors. At PCP, we believe that continuing to empower young people as leaders and change-makers is a necessary investment in Myanmar’s future. Nurturing young people who can think empathetically, deeply, and critically, successfully seek out information, and persuasively communicate with others is crucial to the continued success of Myanmar’s development as a nascent democracy. 

          To become a member of the Pre-Collegiate Program is to embark on a lifelong journey of learning and engagement. 
          </p>
          <h2>Program Overview</h2>
          <div>
              <p>At the Pre-Collegiate Program, we work diligently, tirelessly, and cooperatively to ensure the success of our students and their communities.</p>
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
                  <li>Our close-knit and supportive community of <Link to="/faculty-and-staff">faculty</Link>, <Link to="/alumni">alumni</Link>, and <Link to="/partnerships"> school partners</Link> ensure that are students are poised and ready to work as leaders and agents of change when they return to Myanmar after their studies.</li>
              </ul>
          </div>
        </div>
      </div>
      
    )
  }
}

export default HomePage
