import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        &copy; {new Date().getFullYear()} NetFlix Clone
      </div>
    </footer>
  );
};

export default Footer;
