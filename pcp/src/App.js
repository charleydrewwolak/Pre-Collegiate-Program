import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import HomePage from './HomePage'
import Footer from './Footer'

import Alumni from './About/Alumni'
import History from './About/History'
import Mission from './About/Mission'
import VisitUs from './About/VisitUs'

import Curriculum from './Academics/Curriculum'
import FacultyStaff from './Academics/FacultyStaff'
import LiberalArts from './Academics/LiberalArts'
import StudyAbroad from './Academics/StudyAbroad'

import Apply from './Admissions/Apply'
import FinancialAid from './Admissions/FinancialAid'

import Impetus from './Connect/Impetus';
import Bonner from './Connect/Bonner';
import Intern from './Connect/Intern';
import Partner from './Connect/Partner';
import Partnerships from './Connect/Partnerships';
import Team from './Connect/Team';
import Zomia from './Connect/Zomia';

import Calendar from './StudentResources/Calendar';

import Donate from './Donate';

import Internships from './StudentLife/Internships';
import StudentLife from './StudentLife/StudentLife';
import ServiceSites from './StudentLife/ServiceSites';
import Blog from './StudentLife/Blog';



class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <NavBar className="nav"/>
              <Route name="home" exact path="/" component={HomePage} />
            <div className="Body">
              <Route path='/alumni' component={Alumni} />
              <Route path='/history' component={History} />
              <Route path='/mission' component={Mission} />
              <Route path='/visit-us' component={VisitUs} />

              <Route path='/curriculum' component={Curriculum} />
              <Route path='/faculty-and-staff' component={FacultyStaff} />
              <Route path='/liberal-arts' component={LiberalArts} />
              <Route path='/study-abroad' component={StudyAbroad} />

              <Route path='/apply' component={Apply} />
              <Route path='/financial-aid' component={FinancialAid} />

              <Route path='/bonner' component={Bonner} />
              <Route path='/impetus' component={Impetus} />
              <Route path='/intern' component={Intern} />
              <Route path='/partner' component={Partner} />
              <Route path='/partnerships' component={Partnerships} />
              <Route path='/join' component={Team} />
              <Route path='/zomia' component={Zomia} />

              <Route path='/donate' component={Donate} />

              <Route path='/calendar' component={Calendar} />

              <Route path='/student-life' component={StudentLife} />
              <Route path='/internships' component={Internships} />
              <Route path='/service-sites' component={ServiceSites} />
              <Route path='/blog' component={Blog} />

            </div>
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
