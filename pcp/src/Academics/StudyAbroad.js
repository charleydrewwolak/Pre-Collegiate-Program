import React, { Component } from 'react'
import image1 from './SAT.png'
import image2 from './CollegeList.png'

class StudyAbroad extends Component {
  render() {
    return (
      <div>
        <h2>Study Abroad</h2>
        <p>After our students complete their studies with the Program, they go on to earn Bachelors’ degrees at many top colleges and universities in the US, Hong Kong, and around the world. The majority of our students earn significant scholarships, and all receive scholarships covering at least of half of their college-related expenses.</p>
        <p>Throughout the year, we meet extensively with each student and his or her family to create a personalized plan for success in higher education. Each student has a different path, which is based on his or her interests, school grades, standardized test scores, and economic resources. Throughout this time, we also prepare students for the SAT exam, to maximize their chances of earning a scholarship. Finally, we work with each student to choose which schools to apply to, and to make sure those applications show the student in the best light.</p>
        <p>We are have a strong record of success. All our students gain admission to foreign universities, and nearly 95% earn enough scholarships and financial aid. Once they get to college, our students are just as successful: over 90% of them earn their bachelor’s degrees in four years or less.</p>
        <img src={image1} alt="SAT Scores"/>
        <h4>Where Our Students Earn Their Bachelor’s Degrees</h4>
        <p>Most of our alumni graduate from American Universities. Several have found success in Hong Kong, Canada, the Phillipines, and at other world class schools in Europe and Asia. Our students usually choose <a href="./liberal-arts">liberal arts</a> colleges due to the small class sizes, personalized attention, and academic freedom that these schools offer. Here’s a list of some of the universities that PCP alumni have studied at, along with their majors.</p>
        <img src={image2} alt="College List"/>
      </div>
    )
  }
}

export default StudyAbroad

