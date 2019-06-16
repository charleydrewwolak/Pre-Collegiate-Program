import React, { Component } from 'react'
import Picture from './History.jpg'


class History extends Component {
  render() {
    return (
      <div>
        <h2>History</h2>
        <p>The Pre-Collegiate Program was founded by Dr. U Khin Maung Win, the former Myanmar Minister of Education, along with Dr. Dorothy Guyot, and Dr. Jim Guyot, who have been Burma scholars since the 1950s.  They banded together in order to help support Myanmar students to become liberally educated.   Since 2003, the Pre-­Collegiate Program has provided Myanmar students with the opportunities and abilities to become agents of change. At PCP, students develop the skills and passion to succeed at universities abroad and become effective leaders in their communities. The curriculum consists of an intensive 16-­month course of study that includes rigorous liberal arts classwork, extracurricular engagement, and cross-­cultural exchanges. Our graduates’ ability to read and write critically, learn both in and out of the classroom, empathize, and innovate sets them apart.
        </p>
        <img src={Picture} alt="Students explore Danu Self-Administered Zone on a week-long field trip"  />
        <p className="histImg">Teachers, alumni, and current students gather for a reunion in 2015</p>
      </div>
    )
  }
}

export default History

