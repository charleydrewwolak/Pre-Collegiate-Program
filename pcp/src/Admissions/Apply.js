import React, { Component } from 'react'
import image from './Apply.png'

class Apply extends Component {
  render() {
    return (
      <div>
        <h2>Apply</h2>
        <p>We are now accepting applications for 2020. <br/><br/>

    If you are from Myanmar, have finished the Grade 10 Exam or IGCSE, and are aged 16-20, you are eligible to apply for our next class, which will begin in February 2020. <br/><br/>

    In order to join PCP, we will hold two entrance exams at our campus in downtown Yangon. The first will be on the 25th of August (Sunday) from 9:00 AM to 12:00 PM and the second will be in November. Both entrance exams are the same, so you only need to take it once. The exam lasts all day and tests your English language, critical reading, math, and Myanmar language skills. You don’t need to do anything to prepare, except bring a pencil and a good attitude.</p>

    <p>Start your application <a href="https://forms.gle/36CoVymLayjmnNvX8" target="_blank" rel="noopener noreferrer">here</a>.</p>
    <img src={image} alt="PCP Students"/>
      </div>
    )
  }
}

export default Apply

