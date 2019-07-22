import React, { Component } from 'react'
import './FacultyStaff.css'

class FacultyStaff extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        
        {
          name: "Kristen Hartman",
          title: "Director",
          bio:"holds an MA and BA in English Literature and has been teaching composition and literature at the university level since 2001. In addition to teaching, she has worked at the Centre for the Study and Teaching of Writing, the Digital Media Project, and as assistant editor for the academic journal “American Periodicals.” Prior to joining the Pre-Collegiate Program of Yangon, Kristen directed the Access Academy at the Asian University for Women."
        },
        {
          name: "Joseph McClellan",
          title: "Philosophy",
          bio:"earned a PhD from Columbia University’s Department of Religion where he specialized in Indo-Tibetan Buddhist philosophy and continental philosophy. He has taught philosophy, religion, and gender studies at a number of universities. He is author of Trans*am: Cis Men and Trans Women in Love (ThreeL Media), and has published translations from Tibetan and French."
        },
        {
          name: "Khaing Ei Mon",
          title: "Dean of Administration",
          bio: "is a graduate of the Pre-Collegiate Program of Yangon. Upon her graduation from the Asian University for Women in 2014 with a major in Public Health Sciences and a minor in Asian Studies, she joined PCP as the Dean of Administration. "
        },
        {
          name: "Khaing Ei Mon",
          title: "",
          bio: ""
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h2 className="staff">Our Faculty and Staff</h2>
        { this.state.profiles.map(m => (
          <div className="profile">
            <div className="bio">
              <img alt="Portrait" className="portrait" src={require(`./staff/${m.name.replace(' ','')}.jpg`)}/>
            </div>
            <div className="background">
              <h2>{m.name}</h2>
              <i>{m.title}</i> 
              <p>{m.bio}</p>

            </div>
          </div>
         ))}
      </div>
    )
  }
}

export default FacultyStaff

