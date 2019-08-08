import React, { Component } from 'react'
import image1 from './SAT.png'
import image2 from './CollegeList.jpg'


class StudyAbroad extends Component {
  render() {
    return (
      <div>
        <h2>Study Abroad</h2>
        <p>After our students complete their studies with the Program, they go on to earn Bachelors’ degrees at many top colleges and universities in the US, Europe, China, India, Thailand, Hong Kong, and around the world. The majority of our students earn significant scholarships, and nearly all those eligible receive scholarships covering at least of half of their college-related expenses.</p>
        <p>We meet extensively with each student to create a personalized plan for success in higher education. Each student has a different path, based on his or her interests, academic achievement, standardized test scores, and family’s economic resources. Throughout the school year, we also prepare students for the SAT exam, attend closely to their academic strengths and weaknesses, and guide them through the development of their personal essay.  Finally, we work with each student to choose which schools to apply to and to make sure those applications show the student in the best light. Taken together, these efforts maximize students’ chances of earning admission and a significant scholarship to a university or college abroad.</p>
        <p>We have a strong record of success. Historically, nearly 95% of PCP graduates have earned scholarships and financial aid sufficient to attend university abroad. Once they get to college, our students are just as successful: over 90% of them earn their bachelor’s degrees in four years or less.</p>
        <img src={image1} height="150px" width="auto" alt="SAT Scores" />
        <h4>Where Our Students Earn Their Bachelor’s Degrees</h4>
        <p>Most of our alumni graduate from American Universities. Several have found success in Hong Kong, Canada, the Phillipines, and at other world class schools in Europe and Asia. Our students usually choose <a href="./liberal-arts">liberal arts</a> colleges due to the small class sizes, personalized attention, and academic freedom that these schools offer. Here’s a list of some of the universities that PCP alumni have studied at, along with their majors.</p>
        <img src={image2} width="100%" alt="College List" />

      </div>
    )
  }
}

export default StudyAbroad

