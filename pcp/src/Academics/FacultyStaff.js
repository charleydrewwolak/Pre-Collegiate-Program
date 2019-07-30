import React, { Component } from 'react'
import './FacultyStaff.css'

class FacultyStaff extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        
        {
          name: "Kristen Hartman",
          title: "Director",
          bio:"Kristen holds an MA and BA in English Literature and has been teaching composition and literature at the university level since 2001. In addition to teaching, she has worked at the Centre for the Study and Teaching of Writing, the Digital Media Project, and as assistant editor for the academic journal “American Periodicals.” Prior to joining the Pre-Collegiate Program of Yangon, Kristen directed the Access Academy at the Asian University for Women."
        },

        {
          name: "Khaing Ei Mon",
          title: "Dean of Administration",
          bio: "Khaing Ei Mon was born in the Inle Lake region of Shan State. She is devoted to Liberal Arts education and life-long learning and left the Institute of Medicine I (Yangon) to become a student of the Pre-Collegiate Program in 2008. Upon graduation in 2014 from the Asian University for Women in Chittagong, Bangladesh, Khaing Ei Mon joined the Pre-Collegiate Program of Yangon as Dean of Administration."
        },
        
        {
          name: "Danielle Purkey",
          title: "Introduction to Gender Studies",
          bio: "Dani Purkey teaches Gender Studies at PCP and she loves encouraging students to apply what they are learning in class to their surroundings. She holds a BA in Religion and Critical Ethnic Studies with a concentration in Women, Gender, and Sexuality Studies from Kalamazoo College in Michigan. Besides teaching, Dani loves cooking, hiking, and reading. "
        },

        
        {
          name: "Joseph McClellan",
          title: "Philosophy",
          bio:"Joseph McClellan joined our faculty in January 2018. He earned his Ph.D. in 2013 from Columbia University’s Department of Religion and has taught philosophy, religion, and gender studies at several universities in the United States and Asia. He has published translations from Tibetan and French, as well as his own monograph. In addition to teaching our World Philosophies course, he leads a weekly extracurricular Sutta Studies group at PCP."
        },

        {
          name: "Marie-Laure Laila Le Guen",
          title: "Science",
          bio:"Laila is a science educator with a background in Fundamental Physics and a lifelong passion for learning about the world. She’s lived and worked in Thailand, Tanzania and Kenya, before joining the alternative education sector in Myanmar two years ago. At PCP Yangon, she helps students analyze the scientific enterprise as a human adventure and explore the ramifications of science and technology in their environment."
        },

        {
          name: "Tanmai Vemulapalli",
          title: "Anthropology",
          bio: "Being at PCP has been an incredible growing experience. I feel lucky to be grounded in the community of PCP, with the wonderful students and supportive and intelligent faculty, especially as someone who’s new to Myanmar. Every day, I learn from those around me."
        },

        {
          name: "Zune Nyein Soe",
          title: "Program Assistant",
          bio:"Zune Nyein Soe graduated from the Asian University for Women in 2015, with a major in Environmental Science, and joined the Pre-Collegiate Program in May of 2018 as an assistant to the Dean and Program Director."
        },

        
      ]
    }
  }
  render() {
    return (
      <div>
        <h2 className="staff">Our Faculty and Staff</h2>
        { this.state.profiles.map(m => (
          <div className="profile">
            <div className="bio">
              <img alt="Portrait" className="portrait" src={require(`./staff/${m.name.replace(' ','')}.jpg`)}/>
            </div>
            <div className="background">
              <h2>{m.name}</h2>
              <i>{m.title}</i> 
              <p>{m.bio}</p>

            </div>
          </div>
         ))}
      </div>
    )
  }
}

export default FacultyStaff

