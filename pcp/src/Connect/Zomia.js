import React, { Component } from 'react'

class Zomia extends Component {
  render() {
    return (
      <div>
        <h1></h1>
        <img src={require("./zomia.png")} width="30%"/>
        <p>Zomia is a crowdfunding platform that connects people with talented students from Myanmar through affordable higher education loans. Zomia provides Pre-Collegiate Program students with priority funding in the loan application process and the ability to study at any accredited university in the world. </p>
        <a href="https://zomia.org/">Click Here to learn More</a>
      </div>
    )
  }
}

export default Zomia

