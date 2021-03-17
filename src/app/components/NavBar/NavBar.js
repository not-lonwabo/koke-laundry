import
  React, {
  Component
} from 'react';

import {
  MenuItems
} from './MenuItems';

import './NavBar.css'

class NavBar extends Component {

  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }));
  }

  render = () => {

    return(
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Laundry</h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='social-menu'>
          <li>
            <a className='social-links' href='#'>
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a className='social-links' href='#'>
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a className='social-links' href='#'>
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;