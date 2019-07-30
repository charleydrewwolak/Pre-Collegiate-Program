import React, { Component } from 'react'
import './Partnerships.css'
import { Link } from 'react-router-dom'

class Partnerships extends Component {
  constructor() {
    super();
    this.state = {
      partners: [
        {
          name: "The Bonner Foundation",
          link: "bonner",
          bio: 'The motto "Access to Education, Opportunity to Serve" distills the overarching goal of the Bonner Program.  Since 1990, a diverse, multi-state consortium of participating colleges and universities have been joined through a common commitment to the Corella and Bertram F. Bonner Foundation’s mission to “transform students, communities, and campuses through service.”',
          logo: 'bonner.png',
        },
        {
          name: "Impetus Fund",
          link: "impetus",
          bio: "The Impetus Fund is a scholarship awarded to current PCP students, funding their internships or educational pursuits. Awards range from 100-1000 USD depending on the student’s need and standing with PCP, the project’s value, and fund availability. Started by three alumni of the PCP program, the scholarship seeks to open up opportunities for PCP students otherwise obstructed by financial considerations.",
          logo: 'impetus.png',
        },
        {
          name: "Zomia SPC",
          link: "zomia",
          bio: 'Zomia SPC is a social purpose corporation launched in 2014 to increase access to higher education among students from marginalized communities. We do so by providing students from marginalized communities affordable education loans that are funded by philanthropic individuals and institutions from around the world.',
          logo: 'zomia.png',
        },
        {
          name: "Koe Koe Tech",
          link: "koe-koe-tech",
          bio: 'Koe Koe Tech crafts software to reduce maternal and child mortality rates in Myanmar, to improve health indicators, and to increase access to information, resulting in positive social impacts for the people of Myanmar.',
          logo: 'KKT.png',
        },
        {
          name: "International University Alliance",
          link: "iua",
          bio: 'The IUA is committed to creating more opportunities for students and inspiring cross-cultural exchange, ultimately leading to better, healthier, and more peaceful, respectful and sustainable communities.',
          logo: 'IUA.png',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Partnerships</h1>
        {this.state.partners.map(m => (
          <div className="partner">
            <div className="pBody">
              <h3>{m.name}</h3>
              <p className="b">{m.bio}</p>
              <Link className="lButton" to={`/${m.link}`}>Learn More</Link>
            </div>
            <div className="pLogo">
              <Link to={`/${m.link}`}><img id={m.link} src={require(`./${m.logo}`)} alt="Logo"/></Link>
              
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Partnerships

