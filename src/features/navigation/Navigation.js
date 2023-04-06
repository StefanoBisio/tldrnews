import React, { useState } from 'react';
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
      <button onClick={handleToggle} className={styles.navToggle}>
        Toggle Navigation
      </button>
      <nav
        className={`${styles.navigation} ${isOpen || isHovered ? styles.open : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>sidenav</h2>
      </nav>
    </>
  );
};
