import React, { Component } from 'react'
import Image from './Scholarship.jpg'

class FinancialAid extends Component {
  render() {
    return (
      <div>
        <h2>Program Fees and Scholarships</h2>
        <p>The Pre-Collegiate Program is a ‘need-blind’ program. This means we admit students based solely on their merit. Once a student is selected, we work with each family to develop a plan that fits their particular finances. If necessary, we may offer “full ride” scholarships,” covering 100% of costs and, for students coming from outside Yangon, a stipend to cover costs of living while they are enrolled in the program. To secure a student’s place in the program, every family must pay a non-refundable deposit of 2 lakh kyats upon receiving an offer of admission.</p>
        <img src={Image} alt="Students of PCP Wave 15 Graduation" width="100%"/>
        <p>The full cost for sixteen months is US $662.50 a month or US $10,600 for the whole program. The services covered include: all classroom learning, including materials such as books and articles; all field trips; standardized tests; and all costs associated with college and university applications. Tuition fees are paid in USD and are due before the end of the first week of each term. With the permission of the Director and Dean of Administration, special arrangements may be made to pay on a more extended plan.</p>
        <a href="Financial_Aid_Form.pdf" className="lButton" download>Apply for Finacial Aid</a>
        <p></p>

      </div>
    )
  }
}

export default FinancialAid

