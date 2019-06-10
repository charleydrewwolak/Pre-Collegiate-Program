import React, { Component } from 'react'
import Image from './OurMission.jpg' 

class Mission extends Component {
  render() {
    return (
      <div>
        <h1>Our Mission</h1>
        <p>
The Pre-Collegiate Program was founded upon an ambitious vision: 
to support young people in Myanmar in their intellectual 
development, in their growth as whole people, and in the pursuit of their practical goals. Our mission is to create a society of educated innovators, leaders, and change-makers who solve important challenges in Myanmar and beyond.</p>

      <img src={Image} alt="Students explore Danu Self-Administered Zone on a week-long field trip"  />
      </div>
    )
  }
}

export default Mission

