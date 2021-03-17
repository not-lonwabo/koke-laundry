import
  React,
  { Component
} from 'react'

import {
  Button
} from '../../lib/Button/Button';

import './Hero.css';

class Hero extends Component {

  render = () => {

    return (
      <div className='hero-section'>
        <div className='image-container'>
          <img className='first-image' src='/slider-image-1.png' alt='open washing machine'/>
          <img className='second-image' src='/slider-image-2.png' alt='semi open washing machine'/>
          <img className='third-image' src='/slider-image-3.png' alt='closed washing machine'/>
        </div>
        <div className='header-container'>
          <h2 className='main-header'>
            Laundry services
          </h2>
        </div>
        <h4 className='sub-header'>
          Services you will love
        </h4>
        <Button className='btn'>Read more</Button>
      </div>
    );
  }
}

export default Hero