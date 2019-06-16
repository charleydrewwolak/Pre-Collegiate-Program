import React, { Component } from 'react'
import image from './Apply.png'

class Apply extends Component {
  render() {
    return (
      <div>
        <h2>Apply</h2>
        <p>We are now accepting applications for 2020. <br/><br/>

    If you are from Myanmar, have finished the Grade 10 Exam or IGCSE, and are aged 16-20, you are eligible to apply for our next class, which will begin in February 2020. <br/><br/>

    In order to join PCP, we will hold two entrance exams at our campus in downtown Yangon. The first will be on August 12th, 2018 (Sunday) from 10:00 A.M to 3 P.M and the second will be in October. Both entrance exams are the same, so you only need to take it once. The exam lasts all day and tests your English language, critical reading, math, and Myanmar language skills. You don’t need to do anything to prepare, except bring a pencil and a good attitude.</p>

    <p>Download the application <a href="https://precollegiateyangon.org/wp-content/uploads/2018/08/PCP-Application-Form-20181.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
    <img src={image} alt="PCP Students"/>
      </div>
    )
  }
}

export default Apply

