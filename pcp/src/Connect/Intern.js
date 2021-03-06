import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Intern extends Component {
  render() {
    return (
      <div>
        <h2>Hire an Intern</h2>
        <p>PCP students spend a term getting hands-on experience with a variety of organizations throughout Myanmar. They’re hardworking, fluent in English and Burmese, talented in a variety of qualitative and quantitative tasks, and looking to gain experience outside the classroom.
        <br/>If your NGO, social enterprise, research group, or business would like to mentor a PCP student, please send us an <a href="mailto:precollegiate@gmail.com">email</a> describing your intern’s duties, requirements, and the skills that he or she will learn. We will then encourage our students to apply directly to you. Projects vary based on the individual’s interest, and have included reporting at the <a href="http://www.mmtimes.com/" target="_blank" rel="noopener noreferrer">Myanmar Times</a>, assisting research at <a href="http://www.proximitydesigns.org/" target="_blank" rel="noopener noreferrer">Proximity Designs</a>, surveying workers with the <a href="http://www.ilo.org/yangon/lang--en/" target="_blank" rel="noopener noreferrer">International Labor Organization</a>, and learning documentary filmmaking with <a href="http://tagufilms.com" target="_blank" rel="noopener noreferrer">Tagu Films</a>.<br/>
        Interns usually work full-time from late February through June, though more flexible schedules are occasionally possible.</p>
        <Link className="lButton" to="/internships">Check out where students have been interning</Link>

      </div>
    )
  }
}

export default Intern

