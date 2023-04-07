import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './navigationToggle/MenuButton';
import { NavigationList } from './navigationList/NavigationList';
import styles from './Navigation.module.css';
import Logo from '../../logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="TLDR News logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </NavigationList>
      </nav>
    </>
  );
};
