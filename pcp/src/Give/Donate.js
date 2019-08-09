import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Donate extends Component {

  render() {
    return (
      <div>
        <h1>Give to PCP</h1>
        <br/>
        <h3>Why does the Pre-Collegiate Program need funds?</h3>
        <p>Since its inception, the Pre-Collegiate Program has admitted every student based on his or her academic aptitude and maturity, without regard to the family's ability to pay. In 2018 and 2019, well over half of our students have received scholarship support to attend the Program.</p>
        <br/>
        <h3>Where does the money go?</h3>
        <p>This year, the total projected budget of the PCP is $150,000 USD. Salaries and benefits for faculty and staff constitute the bulk of these costs. In addition to rent, utilities, learning materials, and maintenance costs,  the program will spend $8,000 on field trips such as a week long investigation of the ancient city of Bagan. We also cover all college admissions costs, including SAT and IELTS testing fees.  Students admitted to the Program but whose families are unable to make a financial contribution to their education receive, in addition to tuition remission, a monthly stipend to cover their living expenses while they are enrolled in the Program.</p>
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

