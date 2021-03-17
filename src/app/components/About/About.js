import React, { Component } from 'react'

import './About.css';

class About extends Component {

  render = () => {

    return (
      <div>
        <div className='about-section'>
          <div className='side-divs'>
            <h2 className='side-text'>Services you will love</h2>
            <h3 className='side-subtext'>We think ahead</h3>
          </div>
          <img className='about-image' src='/home-image-1.png' alt='packed laundry'></img>
          <div className='side-divs'>
            <img src='/home-icon-1.png' className='side-text'/>
            <h2 className='side-text'>555-080-201</h2>
            <h3 className='side-subtext'>Call Now!</h3>
          </div>
        </div>
        <h1 className='background-text'>About us</h1>
        <div className='service-section'>
          <div className='service-item'>
            <img src='/home-icon-2.png' className='service-icon'/>
            <h4 className='service-text'>Guaranteed Services</h4>
          </div>
          <div className='service-item'>
            <img src='/home-icon-3.png' className='service-icon'/>
            <h4 className='service-text'>Affordable Prices</h4>
          </div>
          <div className='service-item'>
            <img src='/home-icon-4.png' className='service-icon'/>
            <h4 className='service-text'>Pick Up & Delivery Free</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default About