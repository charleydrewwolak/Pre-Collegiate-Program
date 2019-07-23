import React, { Component } from 'react'
import './Alumni.css'

class Alumni extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        
        {
          name: "Kitty Mewow",
          wave: "1st",
          bio: "Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd Meow mewo mewo mewow ee oeeehhee megehee jjdjdjd "
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

