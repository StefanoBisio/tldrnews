import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './navigationToggle/MenuButton';
import { NavigationList } from './navigationList/NavigationList';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
        <h2>sidenav</h2>
        <NavigationList isOpen={isOpen || isHovered}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* Add more navigation items here */}
        </NavigationList>
      </nav>
    </>
  );
};
