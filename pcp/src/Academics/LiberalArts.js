import React, { Component } from 'react'
import image from './LiberalArts.png'

class LiberalArts extends Component {
  render() {
    return (
      <div>
        <h2>What are the Liberal Arts?</h2>
        <p>The Pre-Collegiate Program is proud to be Myanmar’s first liberal arts school. Through our classes in the natural sciences, social sciences, and humanities, we give students the critical thinking and analytical skills to become leaders in a variety of fields. Employers know this, and it helps explains why they are so eager to hire students with degrees from liberal arts colleges.</p>
        <p>The term “liberal arts” comes from ancient Greece and describes the skills that were considered necessary for an individual to be an educated, independent member of society. Although the curriculum has been updated in the last 2,000 years, universities and employers around the world continue to prize liberal arts education because liberal arts graduates are widely recognized for their abilities to think broadly and deeply on a range of issues.</p>
        <img src={image} alt="PCP students in a discussion"  />
        <p>At the moment, liberal arts colleges are most commonly found in America. That’s one reason why most PCP graduates to date have earned their bachelor’s degrees in the USA. However, there are many world-class universities throughout Europe, and increasingly, Asia. Contemporary global challenges require sophisticated, intelligent, and compassionate answers. At PCP, we believe that liberal arts education is the best way to prepare students to find them.</p>
      </div>
    )
  }
}

export default LiberalArts

