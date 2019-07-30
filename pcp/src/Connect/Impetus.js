import React, { Component } from 'react'
import './Impetus.css'
class Impetus extends Component {
  render() {
    return (
      <div className="Impetus">
        <h1>The PCP Impetus Fund</h1>
        <h3>What is this?</h3>
        <p>The ImpetusFund is a scholarship awarded to current PCP students, funding their internships or educational pursuits. Awards range from 100-1000 USD depending on the student’s need and standing with PCP, the project’s value, and fund availability. Started by three alumni of the PCP program, the scholarship seeks to open up opportunities for PCP students otherwise obstructed by financial considerations.</p>
        <h3>Why we are doing this?</h3>
        <p>To put it simply, we are doing this because we want to help. PCP alumni ourselves, we want our juniors to work on any project or internship they want, without having to worry about money. Fortunate enough to be able to attend colleges with adequate scholarships and work hours, we wanted to give back to PCP. We believed that if we started a special, non-profit fund for PCP students, we could make a difference in someone’s life. We, as former PCP students, have also experienced the financial barrier that sometimes poses difficulties for further learning. Our juniors should not.</p>
        <p><a href={require("./ImpetusFundApplication.pdf")} target="_blank" rel="noopener">Download the application form</a></p>
        <h3>Personal Profiles</h3>
        <p><strong>Shine Min Thant (Raj Gautam)</strong></p>
        <p><img  src={require("./raj.jpg")} alt="portrait" />Hello, my name is Shine Min Thant (Raj Gautam) and I am from the 13th wave. I am studying Global Studies with Political Science at Concordia College in Moorhead, Minnesota. I like playing games, reading books, and taking photos. I also enjoy traveling to new places and interacting with different people. I am a member of this project because I believe that financial difficulties should not hold back students from their academic endeavors. Hopefully, we will be able to address the issue. If you have any questions or just want to say hi, please send us an email. We will be more than happy to talk.</p>
        <p>&nbsp;</p>
        <p><strong>Hpone Myint Tu</strong></p>
        <p><img src={require("./hpone.jpg")} alt="portrait" />I graduated from the 13th Wave of PCP, and got into Sewanee, The University of the South in rural Tennessee thanks to the program. My passion for the humanities, and the depth and beauty of the English language, moved me to major in English and Classical Languages (Latin focus) with minors in History and Politics. So if you want to discuss Classical allusions in Renaissance poetry, or the historical truth about samurai culture, or wolves (just because that’s my spirit animal)—as one does—I’m your guy. People like to think I was born with the &#8203; Complete Works of Shakespeare in my hands and a quill in my mouth (they were obviously wrong because I was holding Milton’s &#8203; Paradise Lost ) &#8203; . But indeed, I used to be horrible at writing and did struggle with complicated Englishsyntax and grammar, and yes, there was a time when I did not know Latin. No one thinks too deeply or even remembers these years because they look at me now and imagine I had always been this way. I became good at what I wanted to be today because of years of perseverance, failure, and opportunity. Ultimately, we cannot help someone persevere, nor can we shield them from failure – but we can give them opportunity if it is within our power. That is what this fund is all about: providing opportunity for PCP students to further their learning. My internship at Kaw Dai Organization gave me deeper knowledge of English grammar, which serves me now in my work study job as a consultant for the Sewanee Writing Centre. Thus, I encourage current PCP students to take up internships they are excited about, or those that they want to test-drive – this resource will ensure that finances do not bar you.</p>
        <p>&nbsp;</p>
        <p><strong>Mothi</strong> &#8203;</p>
        <p><img src={require("./mothi.jpg")} alt="portrait" />I come from a public high school and am part of the 13th wave of PCP. I have been interested in Physics for most part of my childhood and hence am studying it at Berea College. I am a woodworker at the college. I also like listening/analyzing/playing music, reading, writing and watching movies/series. I took part in this project because I understand, from first hand, that studying at PCP entails several miscellaneous costs that could burden low income students with their intellectual endeavors, such as travel expenses for an internship. I believe this project is a good start for helping our fellow juniors have a smooth PCP experience and not face any financial difficulties.</p>
      </div>
    )
  }
}

export default Impetus

