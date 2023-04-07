import React from 'react';
import styles from './MenuButton.module.css';

const MenuButton = ({ isOpen, handleToggle }) => {
  return (
    <button
      className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
      onClick={handleToggle}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default MenuButton;
