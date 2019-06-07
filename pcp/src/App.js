import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import Header from './Header';
import HomePage from './HomePage'
import Database from './Database'
import Example from './Example'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavBar />
            <div className="Body">
              <Route name="home" exact path="/" component={HomePage} />
              <Route path='/database' component={Database} />
              <Route path='/example' component={Example} />
            </div>
          </nav>
        </Router>
        <Footer />
      </div>
    );
  }
}


export default App;
