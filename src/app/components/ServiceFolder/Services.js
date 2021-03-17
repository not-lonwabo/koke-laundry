import React, { Component } from 'react'

import {
  Button
} from '../../lib/Button/Button';

import './Services.css';

class Services extends Component {

  render = () => {

    return (
      <div className='service-section-2'>
        <img src='/row-background-image-1.png' className='laundry-image' />
        <h1>Why choose us</h1>
        <h2>We think ahead</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet massa et itur non vulputate augue, condimentum interdum nibh. Praesent at dignissim purus, vitae tempus nunc. Praesent posuere, augue sed vulputate condimentum, nec finibus rci lacus et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>Read more</Button>
        <div className='check-mark-section'>
          <div>
            <img src='/icon-check.png' className='check-1' />
            <div>
              <h2>Faster service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <img src='/icon-check.png' className='check-1' />
            <div>
              <h2>Delivery free</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services