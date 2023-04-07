import React, { useState } from 'react';
import MenuButton from './MenuButton';
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          {/* Add more navigation items here */}
        </NavigationList>
      </nav>
    </>
  );
};
