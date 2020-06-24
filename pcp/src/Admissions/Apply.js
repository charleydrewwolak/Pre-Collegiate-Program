import React, { Component } from 'react'
import image from './Apply.jpg'

class Apply extends Component {
  render() {
    return (
      <div>
        <h2>Apply</h2>
        <p>We are now accepting applications for 2020. <br /><br />

          If you are from Myanmar, have finished the Grade 10 Exam or IGCSE, and are aged 16-20, you are eligible to apply for our next class, which will begin in February 2020. <br /><br />

          In order to apply to join PCP, you must submit an application and then take one of our entrance exams at our campus in downtown Yangon. The first entrance exam in 2019 will be held on the 25th of August (Sunday) from 9:00 AM to 12:00 PM and the second will be in November (date and time TBA). Both entrance exams are the same, so you only need to take it once. If you take the entrance exam in August and are not invited for an interview, you are permitted to take the entrance exam again in November. 
The exam lasts half a day and tests your English and Myanmar language skills, critical reading and writing skills, and math aptitude. You don’t need to do anything to prepare, except bring a pen and a good attitude. </p>

        <a className="lButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfh-JrfGGIu5UI6v1M-tsItc4oTosTR2kQ34500c9iZeXNaDQ/viewform" target="_blank" rel="noopener noreferrer">Apply Now</a>
        <p>
        <br/>
        </p>
        <img src={image} width="100%" alt="PCP Students in a discussion" />
      </div>
    )
  }
}

export default Apply

