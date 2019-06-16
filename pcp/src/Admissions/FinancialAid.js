import React, { Component } from 'react'
import Image from './Scholarship.jpg'

class FinancialAid extends Component {
  render() {
    return (
      <div>
        <h2>Program Fees and Scholarships</h2>
        <p>The Pre-Collegiate Program is a ‘need-blind’ program. This means we admit students based solely on their merit. Once a student is selected, we work with each family to develop a plan that fits their particular finances. If necessary, we are prepared to give “full ride” scholarships,” covering 100% of costs. Every family will need to pay a non-refundable deposit of K100,000 upon admission.</p>
        <img src={Image} alt="Students"/>
        <p className="baby">Proud students, teachers, and mentors at the 12th wave graduation. June, 2015</p>
        <p>Every student admitted to the program who qualifies for financial aid will receive it. The reason we provide need-based financial aid instead of merit-based scholarships is that every student in our Program merits a scholarship. Our students win merit-based scholarships awarded by colleges and universities abroad because they do the work of the Program.</p>
        <p>The full cost for 2016-2017 is US $600 a month or US $9,600 for the whole program (or the kyat equivalent upon payment). The services covered include: classroom learning, books and articles, all field trips, standardized tests, and all costs to send applications to colleges and universities. The fees for the four terms are due before the beginning of each term, or every four months. Special arrangements may be made to pay on a more extended plan.</p>
      </div>
    )
  }
}

export default FinancialAid

