# TLDR News

TLDR News is a React/Redux application that allows users to fetch the latest news from a query of their choosing, and generate summarized versions of them using OpenAI's GPT-3 model. The app uses Redux for state management and Framer Motion for animations.

Hosted on Netlify: [TLDR News](https://effervescent-concha-d86787.netlify.app/)

## Features

- Fetch and display news articles
- Animate articles transitions with Framer Motion
- Display article content within a modal
- Summarize the content of articles using OpenAI's GPT-3 model
- A side navigation also accessible through keyboard tabbing
- Responsive design

## Structure

The application is divided into different components and features:

### Components

2. `ArticlesList.js`: A component that renders a list of `ArticleWithModal` components.
1. `ArticleWithModal.js`: A component that displays an article with a modal containing the summary.
3. `TldrButton.js`: A custom button component that triggers the summarization of an article.

### Features

1. `articleSlice.js`: A Redux slice handling the asynchronous API call to OpenAI for summarization.
2. `searchSlice.js`: A Redux slice handling the search and fetching of news articles.

### Pages

1. `Home.js`: The homepage that displays the news articles.
2. `AboutPage.js`: An about page with information about the application.

## Usage

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Add your OpenAI API key to an `.env` file with the variable `REACT_APP_OPENAI_API_KEY`.
4. Run the development server using `npm start`.

## Dependencies

- React
- Redux
- React-Redux
- Redux Toolkit
- React Router
- Framer Motion
- OpenAI API

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
