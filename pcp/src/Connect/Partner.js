import React, { Component } from 'react'
import Image from './Partner.png'
import { Link } from 'react-router-dom'

class Partner extends Component {
  render() {
    return (
      <div>
        <h2>Partner with Us</h2>
        <p>There are a variety of great ways to contribute to PCP. In addition to becoming a donor, you also can help Myanmar students hone their skills, explore a new field, and gain cross-cultural experience.</p>
        <img src={Image} alt="A Class at PCP"/>
        <ul>
          <li><strong>Teach During Your Sabbatical: </strong>Share your expertise with a dynamic group of students and learn the thoughts and perspectives of Myanmar youth.</li>
          <li><strong>Speak While You’re In Yangon: </strong>Take an hour to give a presentation or lead a discussion on a topic you care about. Engage, encourage curiosity, and be prepared to field a bevy of questions.</li>
          <li><strong>Study With Us: </strong>Tell a young person you know about a great opportunity to do a year of high school with us in Yangon. This opportunity is open to anyone ages 16-20 who has completed grade ten and has sufficient command of English to participate in coursework.</li>
          <li><strong>Request a Research Assistant: </strong> Have a PCP student or graduate work with you on your fieldwork or archival research. You may also be interested in our <Link to="/internships">internship program</Link>.</li>
          <li><strong>Plan a Trip or Term Abroad with Us: </strong>Bring some of your high school students or undergraduates to study together with our students throughout Myanmar.</li>
        </ul>
        <Link className="lButton" to="/partnerships">See our current partners </Link>
      </div>
    )
  }
}

export default Partner

