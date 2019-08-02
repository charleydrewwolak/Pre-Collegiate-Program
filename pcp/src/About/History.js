import React, { Component } from 'react'
import Picture from './History.jpg'


class History extends Component {
  render() {
    return (
      <div>
        <h2>History</h2>
        <p>The Pre-Collegiate Program was founded in 2003 by the former Myanmar Minister of Education, Dr. U Khin Maung Win, along with Drs. Dorothy and Jim Guyot, who have been Burma scholars since the 1950s. Together, the three created the program in order to provide Myanmar students with the foundational skills and extraordinary opportunities necessary to become effective agents of change. At PCP, students develop the means and passion to succeed at universities abroad and become effective leaders in their communities. The curriculum consists of an intensive sixteen-month course of study that includes rigorous liberal arts classwork, extracurricular engagement, and cross-cultural exchanges. Our graduates are distinguished by their ability to read and write critically, learn both in and out of the classroom, empathize across difference, and use innovation and teamwork to solve problems.
        </p>
        <img src={Picture} alt="Students explore Danu Self-Administered Zone on a week-long field trip"  />
        <p className="histImg">Teachers, alumni, and current students gather for a reunion in 2015</p>
      </div>
    )
  }
}

export default History

