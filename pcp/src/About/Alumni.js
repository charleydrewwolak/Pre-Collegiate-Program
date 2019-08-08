import React, { Component } from 'react'
import './Alumni.css'

class Alumni extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        
        {
          name: "Wai Phyo Myint",
          wave: "5th",
          bio: "Wai Phyo Myint grew up in a village just outside of Monywa. Since she was young, she has had a keen eye for issues of social justice. As a schoolgirl she reported labor violations in her town and as a graduate she taught at a monastic school. In Yangon, she was a journalist for the Myanmar Times for five years before joining the Pre-Collegiate Program. She attended to Green Mountain College and during her summers she worked with both the ILO and Amnesty International. She is currently working at the Myanmar Center for Responsible Business as a Regional Outreach Manager. Now handling government relations, researching in the field, or writing a report with her team, she still carries a flame for social justice and a passion for learning peoples’ stories."
        },
        {
          name: "Lin Sun Oo",
          wave: "3rd",
          bio: "Already keen on issues of the environment and human rights, Lin Sun Oo joined PCP in 2006. For his internship, he served as an assistant to Smithsonian researchers in Myanmar’s largest tiger reserve. Majoring in environmental policy and philosophy, Lin graduated Magna Cum Laude and was awarded Phi Beta Kappa. He did research for the Center for Strategic and International Studies and left after a year to teach at the Pre-Collegiate Program. At the end of 2013 he and his colleagues opened Tagu Films. For the past two years, their productions have brought contemporary human and environmental concerns to a greater audience both in Myanmar and abroad."
        },
        {
          name: "Nyantha Maw Lin",
          wave: "1st",
          bio: "Nyantha Maw Lin was a star member of the pioneer class of the Pre-Collegiate Program. After receiving a degree in political science from Carleton College, Nyantha returned immediately after graduation to teach at the Pre-Collegiate Program. He then took a job with Proximity Designs where he assisted in field research and the development of the organization’s strategic goals. Within four years of helping start the Yangon office of Vriens, Nyantha became Managing Director in 2015. Through all of this, he has continued to support younger alumni as they think about what ways they want to become involved in Myanmar’s evolving landscape."
        },
        {
          name: "Aung Hein",
          wave: "3rd",
          bio: "Aung Hein, a 2005 entrant to the Pre-Collegiate Program, graduated from government high school in Thanlyin and taught himself English by reading voraciously. On a scholarship at Earlham, his academic work and service participation won him the honor of student speaker at the Baccalaureate Ceremony. He earned a Master’s in international political economy at the University of Kent. As a teacher at the Pre-Collegiate Program in 2013, shared his great knowledge of economics, politics, and academic inquiry. Aung Hein is currently a research supervisor at a leading think tank in Myanmar, CESD, where he conducts studies of rural livelihoods, agricultural value chains, the minimum wage, and governmental service delivery to inform national policies on these critical structural issues."
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h2 className="staff">Our Alumni</h2>
        { this.state.profiles.map(m => (
          <div className="profile">
            <img alt="Portrait" className="portrait" src={require(`./AlumniPortraits/${m.name.replace(' ','')}.jpg`)}/>
            <div className="bio">
              <div className="title">
              <strong className="Name">{m.name}</strong>
              <i>- {m.wave} Wave</i> 
              </div>
              <p>{m.bio}</p>

            </div>
          </div>
         ))}
      </div>
    )
  }
}

export default Alumni

