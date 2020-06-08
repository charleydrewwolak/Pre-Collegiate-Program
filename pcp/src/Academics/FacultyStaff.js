import React, { Component } from 'react'
import './FacultyStaff.css'

class FacultyStaff extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [

        {
          name: "Khaing Ei Mon",
          title: "Dean of Administration",
          bio: "Khaing Ei Mon was born in the Inle Lake region of Shan State. She is devoted to Liberal Arts education and life-long learning and left the Institute of Medicine I (Yangon) to become a student of the Pre-Collegiate Program in 2008. Upon graduation in 2014 from the Asian University for Women in Chittagong, Bangladesh, Khaing Ei Mon joined the Pre-Collegiate Program of Yangon as Dean of Administration."
        },
        {
          name: "Zune Nyein Soe",
          title: "Program Assistant",
          bio:"Zune Nyein Soe graduated from the Asian University for Women in 2015, with a major in Environmental Science, and joined the Pre-Collegiate Program in May of 2018 as an assistant to the Dean and Program Director."
        },
        {
          name: "Kendall Quisenberry",
          title: "Environmental Studies, Academic & Creative Writing",
          bio:"Kendall grew up in Kentucky and graduated from DePauw University in 2013 with a Bachelor's in English Writing and Education. She has a teaching license from Teach-Now Graduate School of Education with a specialization in secondary English Language Arts. Prior to coming to the Pre-Collegiate Program, she worked in education in Thailand, California, and Malaysia."
        },
        {
          name: "Raju Gautam",
          title: "World History, Touchstones Discussion",
          bio: "Raju, himself an alumnus of the Program, teaches Modern History and facilitates Touchstones Discussions. He co-ordinates the weekly Internship Seminar to help students reflect on their internship experiences. He also works with students to reflect on their Community Service experiences. Raju graduated with a B.A. in General History from William Penn University. He is fascinated by the debates on how to mitigate various inequalities, which he integrates into his curriculum."
        },
        {
          name: "Zarni Htun",
          title: "Literature",
          bio:"Zarni studied at Bard College in Annandale-on-Hudson York, and then graduated with a M.A. in English Literature and a M.S. in Global Studies and International Affairs. In addition to her major studies, she also enjoyed art history, psychology, philosophy/ethics, mathematics and theology classes. She is currently teaching fairy tales, short stories, expatriate and postcolonial novels, and philosophical texts at PCP. She also writes poetry and short stories and is an avid horsewoman and athlete. She has worked as a teacher, in the communications field, in solar energy, in business, in CSR and in research and consulting. She is also devoting time to community service by raising funds for and distributing food packages (staple food items) to impoverished homes in Yangon due to the backlash of Covid19."
        },

        {
          name: "Kyaw San Min",
          title: "SAT Preparation",
          bio:"Kyaw San Min is from Yangon. He graduated from the Pre-Collegiate Program in 2012 and went on to study Environmental Science at Trinity College in Connecticut. Since receiving his degree, he worked in Agricultural Development. He returned to P-CP in 2020 to volunteer with the program as a part-time tutor to help students practice for their SAT exams."
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
              <img alt="Portrait" className="portrait" src={require(`./staff/${m.name.replace(' ','')}.jpeg`)}/>
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

