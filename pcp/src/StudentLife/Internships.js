import React, { Component } from 'react'
import './Internships.css'


class Internships extends Component {
  constructor() {
    super();
    this.state = {
      sites: [
        {
          name: "360Ed",
          description: "360ed is an EduTech social enterprise based out of NASA Research Park in Silicon Valley. We leverage virtual reality (VR), augmented reality (AR) technology and other technologies to bring scalable, immediate, and exponential impacts in transforming national education and beyond.",
          link: "https://www.360ed.org/"
        },
        {
          name: "Frontier Myanmar",
          description: "Frontier is a research and advisory firm incorporated in the United Kingdom. Since 2009 the company has undertaken work in some of the world's most exciting and challenging frontier markets.",
          link: "https://www.frontiermyanmar.com/"
        },
        {
          name: "Proximity Designs",
          description: "Proximity Designs is a social business in Myanmar. We design and deliver affordable, income-boosting products that complement the entrepreneurial spirit of rural families.",
          link: "https://proximitydesigns.org/"
        },
        {
          name: "Tagu Films",
          description: "Established in 2013, Tagu Films is composed of local Myanmar filmmakers with international experience. Since its inception, Tagu Films has strived to showcase Myanmar through creative visual storytelling that captures this unique country.",
          link: "https://tagufilms.com/"
        },
        {
          name: "Wildlife Conservation Society Myanmar",
          description: "The Wildlife Conservation Society saves wildlife and wild places worldwide. We do so through science, global conservation, education and the management of the world's largest system of urban wildlife parks, led by the flagship New York Bronx Zoo.",
          link: "https://myanmar.wcs.org/"
        },
        
      ]
    }
  }

  render() {
    return (
      <div className="t">
        <h2>Organizations</h2>
        <p> PCP students spend a term getting hands-on experience with a variety of organizations throughout Myanmar. Here are some of the places that the students have interned in the past.</p>
        <table>
          {this.state.sites.map(m => (
            <tr>
              <td className="RB"><a href={m.link} target="_blank" rel="noopener noreferrer"><img className="logos" src={require(`./internshipLogos/${m.name.replace(' ', '').toLowerCase()}.png`)} alt="logo" /></a></td>
              <td className="LB"><strong className="title">{m.name}</strong> <br /> {m.description}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Internships

