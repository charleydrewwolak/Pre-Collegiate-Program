import React, { Component } from 'react'
import './Internships.css'


class Internships extends Component {
  constructor(){
    super();
    this.state = {
      sites: [
        {
          name: "360Ed",
          description: "360ed is an EduTech social enterprise based out of NASA Research Park in Silicon Valley. We leverage virtual reality (VR), augmented reality (AR) technology and other technologies to bring scalable, immediate, and exponential impacts in transforming national education and beyond.",
          link: "https://www.360ed.org/"
        },
        {
          name: "AAPP",
          description: "The Assistance Association for Political Prisoners (Burma), also known as AAPP, is a non-profit human rights organization based in Mae Sot, Thailand. AAPP was founded in 2000 by former political prisoners living in exile on the Thai/Burma border. Since then, the organization has been run by former political prisoners, with two offices being opened inside Burma in 2012, one in Rangoon and the other in Mandalay. AAPP advocates and lobbies for the release of remaining political prisoners and for the improvement of the lives of political prisoners after their release. The various assistance programs for political prisoners and their family members are aimed at ensuring they have access to education, vocational trainings, mental health counseling and healthcare.",
          link: "https://aappb.org/"
        },
        {
          name: "Tagu Films",
          description: "Established in 2013, Tagu Films is composed of local Myanmar filmmakers with international experience. Since its inception, Tagu Films has strived to showcase Myanmar through creative visual storytelling that captures this unique country.",
          link: "https://tagufilms.com/"
        }

      ]
    }
  }

  render() {
    return (
      <div className="t">
        <h2>Organizations</h2>
        <table>
        { this.state.sites.map(m => (
          <tr>
        
            <td className="RB"><a href={m.link} target="_blank" rel="noopener noreferrer"><img className="logos" src={require(`./internshipLogos/${m.name.replace(' ', '').toLowerCase()}.png`)} alt="logo" /></a></td>
            <td className="LB"><strong className="title">{m.name}</strong> <br/> {m.description}</td>
          </tr>
        ))}
        </table>
      </div>
    )
  }
}

export default Internships

