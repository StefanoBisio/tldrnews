import React from 'react';
// import styles from './About.module.css';

export const AboutPage = () => {
  return (
    // <div className={`page-wrapper ${styles.about}`}>
    <div className={'page-wrapper'}>
    <h1>About</h1>
    <h2>What is this?</h2>
      <p>
        TL;DR News has been built by Stefano Bisio during his React.js learning path. This application is a modern web app demonstrating proficiency in a wide range of technologies and best practices. The following technologies and libraries have been used to build this application:
      </p>
      <ul>
        <li>React: A JavaScript library for building user interfaces</li>
        <li>React Router: A library for handling navigation and routing in the application</li>
        <li>React Redux: A state management library to manage the application's global state</li>
        <li>Framer Motion: A library for handling animations and transitions</li>
        <li>CSS Modules: A modular approach to organizing and scoping CSS styles</li>
      </ul>

      <p>
        The application is developed with a focus on maintainability, modularity, and scalability. Each component is encapsulated with its own styles and logic, allowing for easy expansion and modification.
      </p>

    </div>
  );
};

