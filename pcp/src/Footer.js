import React, { Component } from 'react'
import './Footer.css'
import fb from './images/facebook.png'
import ig from './images/instagram.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="info">
          <h6>
            Pre-Collegiate Program Yangon<br />
            09-730-79-846 or 09-739-01-611<br />
            21/23, Kon Zay Dan St. (Lower Block)<br />
            Pabedan Township, Yangon, Myanmar 11143<br />
            precollegiate@gmail.com
              </h6>
        </div>
        <div className="sm">
          <a href="https://www.facebook.com/precollegiateprogram/" target="_blank" rel="noopener noreferrer"><img className="fb" src={fb} alt="fb" /></a>
          <a href="https://www.instagram.com/pcp_yangon/" target="_blank" rel="noopener noreferrer"><img className="ig" src={ig} alt="ig" /></a>
        </div>
      </footer>

    )
  }

}

export default Footer

