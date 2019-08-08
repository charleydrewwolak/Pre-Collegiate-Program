import React, { Component } from 'react'
import image from './LiberalArts.jpg'

class LiberalArts extends Component {
  render() {
    return (
      <div>
        <h2>What are the Liberal Arts?</h2>
        <p>The Pre-Collegiate Program is proud to be the first liberal arts school in Myanmar’s history. The term “liberal arts” comes from ancient Greece and describes the knowledge and skills that were considered necessary for an individual to be an educated and informed member of society. 
          Today, “liberal arts education” means gaining familiarity with a wide range of academic subjects, developing transferable intellectual and social skills such as communication and problem-solving, and cultivating a sense of social responsibility as a global citizen.  
Universities and employers around the world continue to prize liberal arts education because liberal arts graduates are widely recognized for their abilities to think broadly and deeply on a range of issues. Through our small, discussion-based classes covering a range of liberal arts subjects, PCP gives students the critical thinking and analytical skills necessary to become empowered leaders in a variety of fields. </p>
        
        <img src={image} width="100%" alt="PCP students and teachers in a discussion"  />
        <p>At the moment, liberal arts colleges are most commonly found in America. That’s one reason why most PCP graduates have earned their bachelor’s degrees in the USA. However, there are many world-class liberal arts universities throughout Europe and increasingly also in Asia. Complex contemporary global challenges require sophisticated, intelligent, and compassionate answers. At PCP, we believe that liberal arts education is the best way to prepare students to find them.</p>
      </div>
    )
  }
}

export default LiberalArts

