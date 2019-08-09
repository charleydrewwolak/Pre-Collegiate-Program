import React, { Component } from 'react'
import './Calendar.css'

class Calendar extends Component {
  constructor(){
    super();
    this.state = {
      events: {
        "7/8/2019-9/20/2019": "Term 3",
        "9/23/2019-9/27/2019": "Term Break",
        "9/30/2019-12/6/2019": "Term 4",
        "10/11/2019-10/14/2019": "Thadingyut",
        "11/11/2019": "Full Moon Day",
        "11/21/2019": "National Day",
        

      },
    }  
    this.orderEvents()
  }
    

  formatDate = (date) => {
    var months= {1:"January", 2:"Febuary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}

    let fDate = ''
    let endDate = 0
    date=date.split('-')
    if (date.length===2) {endDate=1}  
    let n = 0
    while (n<=endDate) {
      let dt = date[n].split('/')
      let m  = dt[0]
      let d = dt[1]
      let y = dt[2]
      m = months[m]
      if (d[d.length-1] === "1" && d!=="11") {d = d.concat("st")} else if (d[d.length-1] === "2" && d!=="12") {d = d.concat("nd")} else if (d[d.length-1] === "3"  && d!=="13") {d = d.concat("rd")} else {d = d.concat("th")}
      if (n===1) {fDate = fDate.concat(' - ')}
      fDate = fDate.concat(m,' ', d, ', ', y)
      n++
    }
    return fDate
  }

  dateValue = (date) => {
//    var months = {1:30, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
    date = date.split('-')[0].split('/')
    return parseInt(date[2].concat(date[0], date[1]))
  }

  orderEvents = () => {
    let dates = {}
    let ordered = []
    let orderedEvents = []
    var dkeys = Object.keys(this.state.events)
    for (let i=0;i<dkeys.length;i++) {
      let d = this.dateValue(dkeys[i])
      dates[d] = dkeys[i]
      ordered.push(d)
    }
    ordered.sort()
    for (let i = 0; i < ordered.length; i++) {
      orderedEvents.push(dates[ordered[i]])
    }
    return orderedEvents
  }

  render() {
    return (
      <div>
        <table className="calendar">
          <tbody>
            <th colspan="2"><strong>Academic Calendar</strong></th>
            {this.orderEvents().map(m => (
              <tr>
                <td className='lc'>{this.formatDate(m)}</td>
                <td className='rc'>{this.state.events[m]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar

