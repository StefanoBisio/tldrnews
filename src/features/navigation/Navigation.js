import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './navigationToggle/MenuButton';
import { NavigationList } from './navigationList/NavigationList';
import styles from './Navigation.module.css';
import Logo from '../../logo.png';

// Navigation.js is a simple module that renders a navigation bar, containing a toggle button, a logo and a NavigationList component.
// The functions handleToggle, handleClose, handleMouseEnter, handleMouseLeave, handleFocus and handleBlur are used to control the state of the navigation, and help with accessibility.

export const Navigation = () => {
  // isOpen is a state to track whether the navigation is open
  const [isOpen, setIsOpen] = useState(false);
  // isHovered is a state to track whether the navigation is being hovered
  const [isHovered, setIsHovered] = useState(false);
  // isMobile is a state to track whether the current screen size is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  // navRef is a ref for the navigation element
  // used to check if keyboard focus is outside of navigation
  const navRef = useRef(null);

  // useEffect to update isMobile state based on the window size
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    updateIsMobile();

    // Attach a resize event listener to update isMobile state
    window.addEventListener('resize', updateIsMobile);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  // Toggle the isOpen state when the menu button is clicked
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // Close the navigation by setting isOpen to false
  const handleClose = () => {
    setIsOpen(false);
  };
  // Show the navigation when it's being hovered and not on mobile
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };
  // Hide the navigation when the hover ends and not on mobile
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };
  // Open the navigation when any navigation link is focused using the keyboard
  const handleFocus = () => {
    console.log('link focused');
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  // Close the navigation when the keyboard focus moves outside of the navigation
  const handleBlur = (event) => {
    // Add a short delay to check the next focused element
    setTimeout(() => {
      // Check if the next focused element is not inside the navigation
      if (!navRef.current.contains(document.activeElement)) {
        console.log("focus moved outside of navigation");
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }, 50);
  };

  return (
    <>
      <MenuButton isOpen={isOpen} handleToggle={handleToggle} />
      <nav
        className={`${styles.navigation} ${isOpen || isHovered ? styles.open : ''
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={navRef}
      >
        <NavigationList isOpen={isOpen || isHovered} handleClose={handleClose}>
          <Link handleFocus={handleFocus} handleBlur={handleBlur} to="/">
            <img className={styles.logo} src={Logo} alt="TLDR News logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link handleFocus={handleFocus} handleBlur={handleBlur} to="/about">About</Link>
        </NavigationList>

      </nav>
    </>
  );
};
