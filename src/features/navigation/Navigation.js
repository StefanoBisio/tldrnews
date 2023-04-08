import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './navigationToggle/MenuButton';
import { NavigationList } from './navigationList/NavigationList';
import styles from './Navigation.module.css';
import Logo from '../../logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <MenuButton isOpen={isOpen} handleToggle={handleToggle} />
      <nav
        className={`${styles.navigation} ${
          isOpen || isHovered ? styles.open : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavigationList isOpen={isOpen || isHovered} handleClose={handleClose}>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="TLDR News logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </NavigationList>
      </nav>
    </>
  );
};
