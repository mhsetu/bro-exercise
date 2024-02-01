import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import Shop from '../Shop/Shop';

const Header = () => {
  return (
    <div className='logo-name'>
      <img src={logo} alt='' />
      <h2>Bro Exercise</h2>
    </div>
  );
};

export default Header;
