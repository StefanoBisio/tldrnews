import React from 'react';
// import styles from './About.module.css';

export const AboutPage = () => {
  return (
    // <div className={`page-wrapper ${styles.about}`}>
    <div className={'page-wrapper'}>
      <h1>About</h1>
      <h2>What is this?</h2>
      <p>This app is a news article aggregator that fetches and displays a list of articles, allowing users to quickly browse through the headlines. When an article is selected, a modal opens up to present the full content, along with additional information such as the publication date and source. The app features a TL;DR (Too Long; Didn't Read) button that generates a summary of the article using an AI-powered summarization service, providing users with a shorter version of the content.</p>
      <p>
        This is purely a tech demo, it has been built by Stefano Bisio during his React.js learning path. The following technologies and libraries have been used to build this application:
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

