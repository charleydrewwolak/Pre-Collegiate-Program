import React, { Component } from 'react'
import Image from './Partner.png'
import { Link } from 'react-router-dom'

class Partner extends Component {
  render() {
    return (
      <div>
        <h2>Partner with Us</h2>
        <p>There are a variety of great ways to contribute to PCP. Besides donating, you also can help Myanmar students hone their skills, explore a new field, and gain cross-cultural experience.</p>
        <img src={Image} alt="A Class at PCP"/>
        <ul>
          <li><strong>Teach During Your Sabbatical: </strong>Share your expertise with a dynamic group of students and learn the thoughts and perspectives of Myanmar youth.</li>
          <li><strong>Speak While You’re In Town:</strong> Take an hour to&nbsp;give a presentation or lead a discussion on a topic you care about. Engage, encourage curiosity,&nbsp;and be prepared to&nbsp;field a bevy of questions.</li>
          <li><strong>Study At Us:</strong> Tell a young person you know about a great opportunity to do a year of high school with us in Yangon. This opportunity is open to anyone ages 16-19 who speaks fluent English.</li>
          <li><strong>Request a Research Assistant:</strong> Have a PCP graduate work with you on your fieldwork or archive research. You may also be interested in our <a href="./intern">internship program</a>.</li>
          <li><strong>Plan a Term Abroad with Us:</strong> Bring some of your undergraduates to study together with our students throughout Myanmar.</li>
        </ul>
        <Link className="lButton" to="/partnerships">See our current partners </Link>
      </div>
    )
  }
}

export default Partner

