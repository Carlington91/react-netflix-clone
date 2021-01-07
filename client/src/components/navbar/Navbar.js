import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
    return () => window.removeEventListener('scroll');
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScroll ? 'sticky' : ''}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
        className='logo'
      />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='avatar'
        className='avatar'
      />
    </nav>
  );
};

export default Navbar;
