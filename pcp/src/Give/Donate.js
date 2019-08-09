import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Donate extends Component {

  render() {
    return (
      <div>
        <h1>Give to PCP</h1>
        <br/>
        <h3>Why does the Pre-Collegiate Program need funds?</h3>
        <p>Since its inception, the Pre-Collegiate Program has admitted every student based on his or her academic aptitude and maturity. Half of our students receive financial aid. In 2015, this amounted to $35,000 in scholarship awards.</p>
        <br/>
        <h3>Where does the money go?</h3>
        <p>This year, the total projected operations budget of the PCP is $97,000. Salaries for the five faculty constitute sixty-seven percent of these costs. In addition to rent and utilities, the program will spend $8,000 on field trips such as a week long investigation of the ancient city of Bagan. We also cover all college admissions costs, including SAT and TOEFL testing fees.</p>
        <br/>
        <h3>How are funds collected?</h3>
        <p>Tax deductable donations can be made to the <a href="https://myanmar-foundation.org/giving-opportunities/">Myanmar Foundation</a> for Analytic Education, Inc.</p>
        <br/>
        <h3>Are there other ways to get involved?</h3>
        <p>Yes! Many people <Link to="/partner">contribute</Link> to the PCP community by spending time with students while in Myanmar, assisting a student in matriculating at a particular college, or hosting one for a family holiday.</p>
      </div>
    )
  }
}

export default Donate

